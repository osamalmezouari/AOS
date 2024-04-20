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

function TableSsActivity() {
  // Sample data
  const ssActivityData = [
    {
      ID_Sous_Activite: 1,
      Sous_Activite_FR: "Sous Activite 1",
      Sous_Activite_AR: "النشاط الفرعي 1",
      Text_AR: "نص بالعربية",
      Text_FR: "Text in French",
      Dotation: 1000, // New column
      Piece_Demandee: "Rib / CIN / Copie carte...", // New column
    },
    // Add more sub-activity objects as needed
  ];

  const columns = [
    {
      name: "ID_Sous_Activite",
      selector: (row) => row.ID_Sous_Activite,
      sortable: true,
    },
    {
      name: "Sous Activite FR",
      selector: (row) => row.Sous_Activite_FR,
      sortable: true,
    },
    {
      name: "Sous Activite AR",
      selector: (row) => row.Sous_Activite_AR,
      sortable: true,
    },
    {
      name: "Text AR",
      selector: (row) => row.Text_AR,
      sortable: true,
    },
    {
      name: "Text Fr",
      selector: (row) => row.Text_FR,
      sortable: true,
    },
    {
      name: "Dotation", // New column
      selector: (row) => row.Dotation+" DH",
      sortable: true,
    },
    {
      name: "Piece Demandée", // New column
      selector: (row) => row.Piece_Demandee,
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
            onClick={() => handleDelete(row.ID_Sous_Activite)}
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

  const handleDelete = (ID_Sous_Activite) => {
    // Implement delete action here
    console.log(
      "Delete action for row with ID_Sous_Activite:",
      ID_Sous_Activite
    );
  };

  return (
    <div className="App">
      <div className="card">
        <DataTable
          columns={columns}
          data={ssActivityData}
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

export default TableSsActivity;
