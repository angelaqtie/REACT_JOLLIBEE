import { Plus } from "lucide-react";
import React from "react";
import SideNavigation from "../partials/SideNavigation";
import Header from "../partials/Header";
import Searchbar from "../partials/Searchbar";
import Footer from "../partials/Footer";
import AdvertisementTable from "./AdvertisementTable";
import { StoreContext } from "@/components/store/storeContext";
import ModalAdvertisement from "./ModalAdvertisement";
import { setIsAdd } from "@/components/store/storeAction";
import ModalValidation from "../partials/modals/ModalValidation";
import ModalError from "../partials/modals/ModalError";
import ToastSuccess from "../partials/ToastSuccess";

const Advertisement = () => {
  const { dispatch, store } = React.useContext(StoreContext);

  const handleAdd = () => {
    dispatch(setIsAdd(true));
  };

  return (
    <>
      <section className="layout-main ">
        <div className="layout-division ">
          <SideNavigation menu="advertisement" />
          <main>
            <Header
              title="Advertisement"
              subtitle="Manage Kiosk Advertisement"
            />
            <div className="p-8">
              <div className="flex justify-between items-center">
                <Searchbar/>
                <button className="btn btn-add" onClick={handleAdd}>
                  <Plus size={16} /> Add New
                </button>
              </div>

              <AdvertisementTable />
            </div>

            <Footer />
          </main>
        </div>
      </section>
      {store.validate && <ModalValidation />}
      {store.error && <ModalError />}
      {store.success && <ToastSuccess />}
      {store.isAdd && <ModalAdvertisement />}
    </>
  );
};

export default Advertisement;
