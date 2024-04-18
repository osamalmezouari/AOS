import React from "react";
import DataTable from "react-data-table-component";

function getNumberOfPages(rowCount, rowsPerPage) {
  return Math.ceil(rowCount / rowsPerPage);
}

function toPages(pages) {
  const results = [];

  for (let i = 1; i <= pages; i++) {
    results.push(i);
  }

  return results;
}

function TableAffectation() {
  // Sample data
  const affectationData = [
    {
      IDA: 1,
      structure_fr: "siege 1",
      structure_ar: "الهيكل 1",
      abrv: "ABRV1",
      type_dep: "Dir",
    },
    // Add more affectation objects as needed
  ];

  const columns = [
    {
      name: "IDA",
      selector: (row) => row.IDA,
      sortable: true,
    },
    {
      name: "Structure FR",
      selector: (row) => row.structure_fr,
      sortable: true,
    },
    {
      name: "Structure AR",
      selector: (row) => row.structure_ar,
      sortable: true,
    },
    {
      name: "ABRV",
      selector: (row) => row.abrv,
      sortable: true,
    },
    {
      name: "Type DEP",
      selector: (row) => row.type_dep,
      sortable: true,
    },
    {
      name: "Actions",
      cell: (row) => (
        <div>
          <button
            className="btn btn-primary btn-sm"
            onClick={() => handleModify(row)}
          >
            Modify
          </button>{" "}
          <button
            className="btn btn-danger btn-sm"
            onClick={() => handleDelete(row.IDA)}
          >
            Delete
          </button>
        </div>
      ),
    },
  ];

  const BootyPagination = ({
    rowsPerPage,
    rowCount,
    onChangePage,
    currentPage,
  }) => {
    const handleBackButtonClick = () => {
      onChangePage(currentPage - 1);
    };

    const handleNextButtonClick = () => {
      onChangePage(currentPage + 1);
    };

    const handlePageNumber = (e) => {
      onChangePage(Number(e.target.value));
    };

    const pages = getNumberOfPages(rowCount, rowsPerPage);
    const pageItems = toPages(pages);
    const nextDisabled = currentPage === pageItems.length;
    const previosDisabled = currentPage === 1;

    return (
      <nav>
        <ul className="pagination">
          <li className="page-item">
            <button
              className="page-link"
              onClick={handleBackButtonClick}
              disabled={previosDisabled}
              aria-disabled={previosDisabled}
              aria-label="previous page"
            >
              Previous
            </button>
          </li>
          {pageItems.map((page) => {
            const className =
              page === currentPage ? "page-item active" : "page-item";

            return (
              <li key={page} className={className}>
                <button
                  className="page-link"
                  onClick={handlePageNumber}
                  value={page}
                >
                  {page}
                </button>
              </li>
            );
          })}
          <li className="page-item">
            <button
              className="page-link"
              onClick={handleNextButtonClick}
              disabled={nextDisabled}
              aria-disabled={nextDisabled}
              aria-label="next page"
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
    );
  };

  const BootyCheckbox = React.forwardRef(({ onClick, ...rest }, ref) => (
    <div className="form-check">
      <input
        htmlFor="booty-check"
        type="checkbox"
        className="form-check-input"
        ref={ref}
        onClick={onClick}
        {...rest}
      />
      <label className="form-check-label" id="booty-check" />
    </div>
  ));

  const handleModify = (row) => {
    // Implement modify action here
    console.log("Modify action for row:", row);
  };

  const handleDelete = (IDA) => {
    // Implement delete action here
    console.log("Delete action for row with IDA:", IDA);
  };

  return (
    <div className="App">
      <div className="card">
        <DataTable
          columns={columns}
          data={affectationData}
          defaultSortFieldID={1}
          pagination
          paginationComponent={BootyPagination}
          selectableRows
          selectableRowsComponent={BootyCheckbox}
        />
      </div>
    </div>
  );
}

export default TableAffectation;
