import React from "react";
import SideNavigation from "../../partials/SideNavigation";
import Header from "../../partials/Header";
import Footer from "../../partials/Footer";
import { StoreContext } from "@/components/store/storeContext";
import { setError, setIsAdd, setMessage } from "@/components/store/storeAction";
import { FaPlus } from "react-icons/fa";
import ModalError from "../../partials/modals/ModalError";
import ToastSuccess from "../../partials/ToastSuccess";
import UserList from "./DeveloperList";
import ModalAddUser from "./ModalAddDeveloper";
import DeveloperList from "./DeveloperList";
import ModalAddDeveloper from "./ModalAddDeveloper";
import useQueryData from "@/components/custom-hook/useQueryData";

const Developer = () => {
  const { dispatch, store } = React.useContext(StoreContext);
  const [itemEdit, setItemEdit] = React.useState(null);

  const { isLoading, data: role } = useQueryData(
    `/v2/role`, //endpoint
    "get", //method
    "role" //key
  );

  const developerRole = role?.data.filter(
    (item) => item.role_is_developer == 1
  );

  const handleAdd = () => {
    if (developerRole?.length === 0) {
      dispatch(setError(true));
      dispatch(setMessage("Developer role is requiered"));
      return;
    }
    setItemEdit(null);
    dispatch(setIsAdd(true));
  };

  return (
    <>
      <section className="layout-main ">
        <div className="layout-division ">
          <SideNavigation menu="settings" />
          <main>
            <Header title="Developer" subtitle="Welcome to Jollibee" />
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
              <DeveloperList setItemEdit={setItemEdit} />
            </div>
            <Footer />
          </main>
        </div>
      </section>
      {store.success && <ToastSuccess />}
      {/* {store.error && <ModalError />} */}
      {store.isAdd && (
        <ModalAddDeveloper itemEdit={itemEdit} developerRole={developerRole} />
      )}
    </>
  );
};

export default Developer;
