import { Plus } from "lucide-react";
import React from "react";
import SideNavigation from "../partials/SideNavigation";
import Header from "../partials/Header";
import Searchbar from "../partials/Searchbar";
import Footer from "../partials/Footer";
import { StoreContext } from "@/components/store/storeContext";
import { setIsAdd } from "@/components/store/storeAction";
import FoodsTable from "./FoodsTable";
import ModalAddFood from "./ModalAddFood";
import ToastSuccess from "../partials/ToastSuccess";
import ModalError from "../partials/modals/ModalError";
import ModalValidation from "../partials/modals/ModalValidation";

const Food = () => {
  const { dispatch, store } = React.useContext(StoreContext);
  const [itemEdit, setItemEdit] = React.useState(null);

  const handleAdd = () => {
    dispatch(setIsAdd(true));
    setItemEdit(null);
  };

  return (
    <>
      <section className="layout-main ">
        <div className="layout-division ">
          <SideNavigation menu="food" />
          <main>
            <Header title="Food" subtitle="Manage Kiosk Food" />
            <div className="px-8 pt-3">
              <div className="flex justify-between items-center">
                <div></div>
                <button className="btn btn-add" onClick={handleAdd}>
                  <Plus size={16} /> Add New
                </button>
              </div>

              <FoodsTable setItemEdit={setItemEdit} itemEdit={itemEdit} />
            </div>

            <Footer />
          </main>
        </div>
      </section>
      {store.validate && <ModalValidation />}
      {store.error && <ModalError />}
      {store.success && <ToastSuccess />}
      {store.isAdd && <ModalAddFood itemEdit={itemEdit} />}
    </>
  );
};

export default Food;
