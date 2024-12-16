import useQueryData from "@/components/custom-hook/useQueryData";
import { StoreContext } from "@/components/store/storeContext";
import React, { isValidElement } from "react";
import ModalConfirm from "../../partials/modals/ModalConfirm";
import ModalRestore from "@/components/partials/modal/ModalRestore";
import ModalArchive from "@/components/partials/modal/ModalArchive";
import ModalDelete from "../../partials/modals/ModalDelete";
import LoadMore from "../../partials/LoadMore";
import { Archive, ArchiveRestore, FilePenLine, Trash2 } from "lucide-react";
import {
  setIsAdd,
  setIsArchive,
  setIsDelete,
  setIsRestore,
} from "@/components/store/storeAction";
import FetchingSpinner from "@/components/partials/spinner/FetchingSpinner";
import IconNoData from "../../partials/IconNoData";
import IconServerError from "../../partials/IconServerError";
import SpinnerTable from "../../partials/spinners/SpinnerTable";
import TableLoader from "../../partials/TableLoader";
import Pills from "../../partials/Pills";
import Status from "@/components/partials/Status";

const UserList = ({ setItemEdit }) => {
  const { dispatch, store } = React.useContext(StoreContext);

  const [id, setIsId] = React.useState("");
  const [dataItem, setIsDataItem] = React.useState(null);

  let counter = 1;

  const handleEdit = (item) => {
    dispatch(setIsAdd(true));
    setItemEdit(item);
  };
  const handleDelete = (item) => {
    dispatch(setIsDelete(true));
    setIsId(item.role_aid);
    setIsDataItem(item);
  };
  const handleArchive = (item) => {
    dispatch(setIsArchive(true));
    setIsId(item.role_aid);
  };
  const handleRestore = (item) => {
    dispatch(setIsRestore(true));
    setIsId(item.role_aid);
  };

  const {
    isLoading,
    isFetching,
    error,
    data: result,
    status,
  } = useQueryData(
    `/v2/role`, //endpoint
    "get", //method
    "role" //key
  );
  return (
    <>
      <div className="p-4 bg-secondary mt-10 rounded-md border border-line relative">
        {isFetching && !isLoading && <SpinnerTable />}
        <div className="table-wrapper custom-scroll">
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Status</th>
                <th className="w-[50%]">Name</th>
                <th>Email</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {isLoading && (
                <tr>
                  <td colSpan="100%">
                    <TableLoader count={20} cols={4} />
                  </td>
                </tr>
              )}
              {result?.count === 0 && (
                <tr>
                  <td colSpan={100}>
                    <IconNoData />
                  </td>
                </tr>
              )}
              {error && (
                <tr>
                  <td colSpan={100}>
                    <IconServerError />
                  </td>
                </tr>
              )}

              {result?.count > 0 &&
                result.data.map((item, key) => (
                  <tr key={key}>
                    <td>{counter++}</td>
                    <td>
                      {item.role_is_active === 1 ? (
                        <Status text="Active" />
                      ) : (
                        <Status text="InActive" />
                      )}
                    </td>
                    <td>{item.role_name}</td>
                    <td>{item.role_description}</td>

                    <td>
                      <ul className="table-action">
                        {item.role_is_active === 1 ? (
                          <>
                            <li>
                              <button
                                className="tooltip"
                                data-tooltip="Edit"
                                onClick={() => handleEdit(item)}
                              >
                                <FilePenLine />
                              </button>
                            </li>
                            <li>
                              <button
                                className="tooltip"
                                data-tooltip="Archive"
                                onClick={() => handleArchive(item)}
                              >
                                <Archive />
                              </button>
                            </li>
                          </>
                        ) : (
                          <>
                            <li>
                              <button
                                className="tooltip"
                                data-tooltip="Restore"
                                onClick={() => handleRestore(item)}
                              >
                                <ArchiveRestore />
                              </button>
                            </li>
                            <li>
                              <button
                                className="tool-tip"
                                data-tooltip="Delete"
                                onClick={() => handleDelete(item)}
                              >
                                <Trash2 />
                              </button>
                            </li>
                          </>
                        )}
                      </ul>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>

          <LoadMore />
        </div>
      </div>

      {store.isDelete && (
        <ModalDelete
          setIsDelete={setIsDelete}
          mysqlApiDelete={`/v2/role/${id}`}
          queryKey={"role"}
          item={dataItem.role_name}
        />
      )}

      {store.isArchive && (
        <ModalArchive
          setIsArchive={setIsArchive}
          mysqlEndpoint={`/v2/role/active/${id}`}
          queryKey={"role"}
        />
      )}

      {store.isRestore && (
        <ModalRestore
          setIsRestore={setIsRestore}
          mysqlEndpoint={`/v2/role/active/${id}`}
          queryKey={"role"}
        />
      )}

      {store.isConfirm && <ModalConfirm />}
    </>
  );
};

export default UserList;
