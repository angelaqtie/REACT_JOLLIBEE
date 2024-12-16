import { imgPath } from "@/components/helpers/functions-general";
import FetchingSpinner from "@/components/partials/spinner/FetchingSpinner";
import TableLoader from "@/components/partials/TableLoader";
import React from "react";

const SideNav = ({ setCategoryId, isLoading, isFetching, result }) => {
  const handleClickCategory = (item) => {
    setCategoryId(item.category_aid);
  };

  return (
    <>
      <h5 className="mb-0 text-center pt-2">Menu</h5>
      <ul className="text-center relative">
        {isFetching && !isLoading && <FetchingSpinner />}
        {isLoading && <TableLoader cols={1} count={15} />}

        <button
          type="button"
          onClick={() => handleClickCategory({ category_aid: "" })}
          className="w-full mx-auto"
        >
          <img
            src={`${imgPath}/jollibee-logo.png`}
            className="w-16 mx-auto py-2"
          />
          <small className="text-xs">All</small>
        </button>

        {result?.count > 0 &&
          result.data.map((item, key) => (
            <li className="mb-3" key={key}>
              <button type="button" onClick={() => handleClickCategory(item)}>
                <img src={`${imgPath}/${item.category_image}`} />
                <small className="text-xs">{item.category_title}</small>
              </button>
            </li>
          ))}
      </ul>
    </>
  );
};

export default SideNav;
