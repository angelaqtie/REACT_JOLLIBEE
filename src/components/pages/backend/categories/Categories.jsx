import { Plus } from "lucide-react";
import React from "react";
import SideNavigation from "../partials/SideNavigation";
import Header from "../partials/Header";
import Searchbar from "../partials/Searchbar";
import Footer from "../partials/Footer";
import { StoreContext } from "@/components/store/storeContext";
import { setIsAdd } from "@/components/store/storeAction";
import CategoriesTable from "./CategoriesTable";
import ModalCategories from "./ModalCategories";
import ToastSuccess from "../partials/ToastSuccess";
import ModalError from "../partials/modals/ModalError";
import ModalValidation from "../partials/modals/ModalValidation";

const Categories = () => {
  const { dispatch, store } = React.useContext(StoreContext);
  const [isCategoryEdit, setIsCategoryEdit] = React.useState(null);

  const handleAdd = () => {
    dispatch(setIsAdd(true));
    setIsCategoryEdit(null);
  };

  return (
    <>
      <section className="layout-main ">
        <div className="layout-division ">
          <SideNavigation menu="categories" />
          <main>
            <Header title="Categories" subtitle="Manage Kiosk Categories" />
            <div className="p-8">
              <div className="flex justify-between items-center">
                <div></div>
                <button className="btn btn-add" onClick={handleAdd}>
                  <Plus size={16} /> Add New
                </button>
              </div>

              <CategoriesTable
                isCategoryEdit={isCategoryEdit}
                setIsCategoryEdit={setIsCategoryEdit}
              />
            </div>

            <Footer />
          </main>
        </div>
      </section>
      {store.validate && <ModalValidation />}
      {store.error && <ModalError />}
      {store.success && <ToastSuccess />}
      {store.isAdd && (
        <ModalCategories
          isCategoryEdit={isCategoryEdit}
          setIsCategoryEdit={setIsCategoryEdit}
        />
      )}
    </>
  );
};

export default Categories;
