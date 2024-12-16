import React from "react";
import SideNavigation from "../../partials/SideNavigation";
import Header from "../../partials/Header";
import Footer from "../../partials/Footer";
import { StoreContext } from "@/components/store/storeContext";
import { setIsAdd } from "@/components/store/storeAction";
import { FaPlus } from "react-icons/fa";
import ModalError from "../../partials/modals/ModalError";
import ToastSuccess from "../../partials/ToastSuccess";
import UserList from "./UserList";
import ModalAddUser from "./ModalAddUser";

const User = () => {
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
            <Header title="Settings" subtitle="Welcome to Jollibee" />
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
              <UserList setItemEdit={setItemEdit} />
            </div>
            <Footer />
          </main>
        </div>
      </section>
      {store.success && <ToastSuccess />}
      {store.error && <ModalError />}
      {store.isAdd && <ModalAddUser itemEdit={itemEdit} />}
    </>
  );
};

export default User;
