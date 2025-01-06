import React from "react";
import SideNavigation from "../../partials/SideNavigation";
import Header from "../../partials/Header";
import RoleList from "./RoleList";
import Footer from "../../partials/Footer";
import { StoreContext } from "@/components/store/storeContext";
import { setIsAdd } from "@/components/store/storeAction";
import { FaPlus } from "react-icons/fa";
import ModalAddRole from "./ModalAddRole";
import ModalError from "../../partials/modals/ModalError";
import ModalSuccess from "@/components/partials/modal/modalSuccess";
import ToastSuccess from "../../partials/ToastSuccess";

const Role = () => {
  const { dispatch, store } = React.useContext(StoreContext);
  const [itemEdit, setItemEdit] = React.useState(null);

  const handleAdd = () => {
    setItemEdit(null);
    dispatch(setIsAdd(true));
  };

  return (
    <>
      <section className="layout-main ">
        <div className="layout-division ">
          <SideNavigation menu="settings" />
          <main>
            <Header title="Role" subtitle="Welcome to Jollibee" />
            <div className="p-5">
              <div className="flex justify-between items-center">
                <div></div>
                <button
                  type="button"
                  className="btn btn-add"
                  onClick={handleAdd}
                >
                  <FaPlus /> Add New
                </button>
              </div>
              <RoleList setItemEdit={setItemEdit} />
            </div>
            <Footer />
          </main>
        </div>
      </section>
      {store.success && <ToastSuccess />}
      {store.error && <ModalError />}
      {store.isAdd && <ModalAddRole itemEdit={itemEdit} />}
    </>
  );
};

export default Role;
