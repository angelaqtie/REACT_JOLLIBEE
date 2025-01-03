import useQueryData from "@/components/custom-hook/useQueryData";
import { StoreContext } from "@/components/store/storeContext";
import React, { isValidElement } from "react";
import ModalConfirm from "../../partials/modals/ModalConfirm";
import ModalRestore from "@/components/partials/modal/ModalRestore";
import ModalArchive from "@/components/partials/modal/ModalArchive";
import ModalDelete from "../../partials/modals/ModalDelete";
import LoadMore from "../../partials/LoadMore";
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
import { useInView } from "react-intersection-observer";
import SearchBarWithFilterStatus from "@/components/partials/SearchBarWithFilterStatus";
import { FaArchive, FaEdit, FaTrash, FaTrashRestoreAlt } from "react-icons/fa";
import { useInfiniteQuery } from "@tanstack/react-query";
import { queryDataInfinite } from "@/components/helpers/queryDataInfinite";

const DeveloperList = ({ setItemEdit }) => {
  const { dispatch, store } = React.useContext(StoreContext);
  const [id, setIsId] = React.useState("");
  const [dataItem, setIsDataItem] = React.useState(null);
  const [isFilter, setIsFilter] = React.useState(false);
  const [onSearch, setOnSearch] = React.useState(false);
  const search = React.useRef({ value: "" });
  const [statusFilter, setStatusFilter] = React.useState("");
  const [page, setPage] = React.useState(1);
  const { ref, inView } = useInView();

  let counter = 1;

  const handleEdit = (item) => {
    dispatch(setIsAdd(true));
    setItemEdit(item);
  };
  const handleDelete = (item) => {
    dispatch(setIsDelete(true));
    setIsId(item.user_developer_aid);
    setIsDataItem(item);
  };
  const handleArchive = (item) => {
    dispatch(setIsArchive(true));
    setIsId(item.user_developer_aid);
  };
  const handleRestore = (item) => {
    dispatch(setIsRestore(true));
    setIsId(item.user_developer_aid);
  };

  // const {
  //   isLoading,
  //   isFetching,
  //   error,
  //   data: result,
  //   status,
  // } = useQueryData(
  //   `/v2/role`, //endpoint
  //   "get", //method
  //   "role" //key
  // );

  const {
    data: result,
    isLoading,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ["developer", onSearch, isFilter, statusFilter],
    queryFn: async ({ pageParam = 1 }) =>
      await queryDataInfinite(
        "/v2/developer/search", // search or filter endpoint
        `/v2/developer/page/${pageParam}`, // page api/endpoint
        isFilter || store.isSearch, // search boolean
        {
          isFilter,
          statusFilter,
          searchValue: search?.current.value,
          id: "",
        } // payload
      ),
    getNextPageParam: (lastPage) => {
      if (lastPage.page < lastPage.total) {
        return lastPage.page + lastPage.count;
      }
      return;
    },
    refetchOnWindowFocus: false,
  });

  React.useEffect(() => {
    if (inView) {
      setPage((prev) => prev + 1);
      fetchNextPage();
    }
  }, [inView]);

  return (
    <>
      <div>
        <SearchBarWithFilterStatus
          search={search}
          dispatch={dispatch}
          store={store}
          result={result}
          isFetching={isFetching}
          setOnSearch={setOnSearch}
          onSearch={onSearch}
          statusFilter={statusFilter}
          setStatusFilter={setStatusFilter}
          setIsFilter={setIsFilter}
          setPage={setPage}
        />
      </div>
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
              {(status === "pending" || result?.pages[0].data.length === 0) && (
                <tr>
                  <td colSpan="100" className="p-10">
                    {status === "pending" ? (
                      <TableLoader count={4} cols={5} />
                    ) : (
                      <IconNoData />
                    )}
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

              {/* RESULT */}
              {result?.pages.map((page, pageKey) => (
                <React.Fragment key={pageKey}>
                  {page.data.map((item, key) => {
                    return (
                      <tr key={key} className="group relative cursor-pointer">
                        <td className="text-center">{counter++}</td>
                        <td>
                          {item.user_developer_is_active ? (
                            <Status text={"Active"} />
                          ) : (
                            <Status text={"Inactive"} />
                          )}
                        </td>
                        <td>{`${item.user_developer_first_name} ${item.user_developer_last_name}`}</td>
                        <td>{item.user_developer_email}</td>
                        <td
                          colSpan="100%"
                          className="opacity-0 group-hover:opacity-100"
                        >
                          <div className="flex items-center justify-end gap-2 mr-4">
                            {item.user_developer_is_active == 1 ? (
                              <>
                                <button
                                  type="button"
                                  className=""
                                  data-tooltip="Edit"
                                  disabled={isFetching}
                                  onClick={() => handleEdit(item)}
                                >
                                  <FaEdit />
                                </button>
                                <button
                                  type="button"
                                  className=""
                                  data-tooltip="Archive"
                                  disabled={isFetching}
                                  onClick={() => handleArchive(item)}
                                >
                                  <FaArchive />
                                </button>
                              </>
                            ) : (
                              <>
                                <button
                                  type="button"
                                  className="tool"
                                  data-tooltip="Restore"
                                  disabled={isFetching}
                                  onClick={() => handleRestore(item)}
                                >
                                  <FaTrashRestoreAlt />
                                </button>
                                <button
                                  type="button"
                                  className="tool"
                                  data-tooltip="Delete"
                                  disabled={isFetching}
                                  onClick={() => handleDelete(item)}
                                >
                                  <FaTrash />
                                </button>
                              </>
                            )}
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </React.Fragment>
              ))}
            </tbody>
          </table>

          <div className="pb-10 flex items-center justify-center">
            <LoadMore
              fetchNextPage={fetchNextPage}
              isFetchingNextPage={isFetchingNextPage}
              hasNextPage={hasNextPage}
              result={result?.pages[0]}
              setPage={setPage}
              page={page}
              refView={ref}
            />
          </div>
        </div>
      </div>

      {store.isDelete && (
        <ModalDelete
          setIsDelete={setIsDelete}
          mysqlApiDelete={`/v2/developer/${id}`}
          queryKey={"developer"}
          item={dataItem.developer_name}
        />
      )}

      {store.isArchive && (
        <ModalArchive
          setIsArchive={setIsArchive}
          mysqlEndpoint={`/v2/developer/active/${id}`}
          queryKey={"developer"}
        />
      )}

      {store.isRestore && (
        <ModalRestore
          setIsRestore={setIsRestore}
          mysqlEndpoint={`/v2/developer/active/${id}`}
          queryKey={"developer"}
        />
      )}

      {store.isConfirm && <ModalConfirm />}
    </>
  );
};

export default DeveloperList;
