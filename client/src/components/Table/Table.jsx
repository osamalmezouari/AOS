import React from "react";
import DataTable from "react-data-table-component";

function getNumberOfPages(rowCount, rowsPerPage) {
  return Math.ceil(rowCount / rowsPerPage);
}

function toPages(pages) {
  const results = [];

  for (let i = 1; i < pages; i++) {
    results.push(i);
  }

  return results;
}

function Table() {
  // Sample data
  const personnelData = [
    {
      id: 1,
      nom_fr: "Smith",
      prenom_fr: "John",
      nom_ar: "سميث",
      prenom_ar: "جون",
      date_naissance: "1990-01-01",
      email: "john@example.com",
      echelle: "Echelle 1",
      qualite: "Qualité 1",
      adherent: "Oui",
      structure_fr: "Structure 1"
    },
    // Add more personnel objects as needed
  ];

  const columns = [
    {
      name: "NOM FR",
      selector: (row) => row.nom_fr,
      sortable: true
    },
    {
      name: "Prenom FR",
      selector: (row) => row.prenom_fr,
      sortable: true
    },
    {
      name: "NOM AR",
      selector: (row) => row.nom_ar,
      sortable: true
    },
    {
      name: "PRENOM AR",
      selector: (row) => row.prenom_ar,
      sortable: true
    },
    {
      name: "DATE NAISSANCE",
      selector: (row) => row.date_naissance,
      sortable: true
    },
    {
      name: "EMAIL",
      selector: (row) => row.email,
      sortable: true
    },
    {
      name: "ECHELLE",
      selector: (row) => row.echelle,
      sortable: true
    },
    {
      name: "QUALITE",
      selector: (row) => row.qualite,
      sortable: true
    },
    {
      name: "ADHERENT",
      selector: (row) => row.adherent,
      sortable: true
    },
    {
      name: "Structure FR",
      selector: (row) => row.structure_fr,
      sortable: true
    },
    // Add more columns as needed
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
            onClick={() => handleDelete(row.id)}
          >
            Delete
          </button>
        </div>
      )
    }
  ];

  const BootyPagination = ({
    rowsPerPage,
    rowCount,
    onChangePage,
    currentPage
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

  const handleDelete = (id) => {
    // Implement delete action here
    console.log("Delete action for row with id:", id);
  };

  return (
    <div className="App">
      <div className="card">
        <DataTable
          title="Personnel"
          columns={columns}
          data={personnelData}
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

export default Table;
