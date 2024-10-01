import React from "react";

const Pagination = ({ itemsPerPage, totalItems, paginate, currentPage }) => {
  const pageNumbers = [];

  // Calculate total pages
  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={`page-item ${currentPage === number ? "active" : ""}`}
            style={{ display: "inline", margin: "5px", cursor: "pointer" }}
          >
            <span onClick={() => paginate(number)}>{number}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;