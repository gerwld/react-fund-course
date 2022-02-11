import React from "react";
import { usePagination } from "../../../hooks/usePagination";

function MyPagination({totalPages, changePage, page}) {
  const pagesArray = usePagination(totalPages);

  return (
    <div style={{ margin: "30px 0" }}>
      {pagesArray.map((el) => {
        return (
          <span
            key={el}
            onClick={() => changePage(el)}
            className={el === page ? "pag_active" : "pag_el"}>
            {el}
          </span>
        );
      })}
    </div>
  );
}

export default MyPagination;
