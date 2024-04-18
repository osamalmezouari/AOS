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

function TableActivity() {
  // Sample data
  const activityData = [
    {
      ID_Activite: 1,
      Activite_FR: "Activite 1",
      Activite_AR: "نشاط 1",
    },
    // Add more activity objects as needed
  ];

  const columns = [
    {
      name: "ID_Activite",
      selector: (row) => row.ID_Activite,
      sortable: true,
    },
    {
      name: "Activite FR",
      selector: (row) => row.Activite_FR,
      sortable: true,
    },
    {
      name: "Activite AR",
      selector: (row) => row.Activite_AR,
      sortable: true,
    },
    {
      name: "Actions",
      cell: (row) => (
        <div>
          <button
            className="btn btn-primary btn-sm"
            onClick={() => handleAddActivity(row)}
          >
            Add Activity
          </button>{" "}
          <button
            className="btn btn-danger btn-sm"
            onClick={() => handleDeleteActivity(row.ID_Activite)}
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

  const handleAddActivity = (row) => {
    // Implement add activity action here
    console.log("Add activity action for row:", row);
  };

  const handleDeleteActivity = (ID_Activite) => {
    // Implement delete activity action here
    console.log(
      "Delete activity action for row with ID_Activite:",
      ID_Activite
    );
  };

  return (
    <div className="App">
      <div className="card">
        <DataTable
          columns={columns}
          data={activityData}
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

export default TableActivity;
