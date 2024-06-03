import {
  AccountBalance,
  Delete,
  DeleteOutline,
  Edit,
  Hiking,
  Logout,
  MedicalInformation,
  MenuOutlined,
  PollOutlined,
  PollSharp,
  Settings,
  TravelExploreOutlined,
  ViewCarousel,
  Visibility,
  Widgets,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import SideBar from "../../component/sidebar";
import Header from "../../component/header";

interface Column {
  id: "code" | "Status" | "date" | "SousActivitie" | "Actions";
  label: string;
  minWidth?: number;
  align?: "right";
  format?: (value: any) => string;
}

const columns: readonly Column[] = [
  { id: "code", label: "Code", minWidth: 100 },
  {
    id: "Status",
    label: "Status",
    minWidth: 40,
    align: "right",
  },
  {
    id: "date",
    label: "Date",
    minWidth: 170,
    align: "right",
    format: (value: string) => new Date(value).toLocaleDateString("en-US"),
  },
  {
    id: "SousActivitie",
    label: "Sous Activitie",
    minWidth: 170,
    align: "right",
  },
  {
    id: "Actions",
    label: "Actions",
    minWidth: 170,
    align: "right",
  },
];

interface Data {
  code: string;
  Status: string;
  date: string;
  SousActivitie: string;
}

function createData(
  code: string,
  Status: string,
  date: string,
  SousActivitie: string
): Data {
  return { code, Status, date, SousActivitie };
}

const rows = [
  createData("IN", "Active", "2024-06-01", "Activity 1"),
  createData("CN", "Inactive", "2024-06-01", "Activity 2"),
  createData("IT", "Pending", "2024-06-01", "Activity 3"),
  createData("US", "Active", "2024-06-01", "Activity 4"),
];

const SousActivitieDatatable = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Box>
      <Box>
        <SideBar />
        <Header/>
        <Container maxWidth="lg" className="h-[90vh] pt-32">
          <Grid container className="gap-y-6">
            <Box className={"w-full mt-4"}>
              <Box className={"flex items-center gap-2"}>
                <PollSharp
                  fontSize="large"
                  className="bg-mainBleu text-white p-2 rounded"
                />
                <Typography className="font-main capitalize text-2xl text-mainBleu ">
                  Pelerinage
                </Typography>
              </Box>
            </Box>
            <Grid container gap={1}>
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                lg={2.8}
                className="w-full h-32 rounded shadow-md "
              >
                <Typography className="text-white font-main font-bold flex items-center justify-center h-full bg-green-400">
                  {10} Approuvées
                </Typography>
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                lg={2.8}
                className="w-full h-32 rounded shadow-md "
              >
                <Typography className="text-white font-main font-bold flex items-center justify-center h-full bg-red-400">
                  {10} Refusées
                </Typography>
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                lg={2.8}
                className="w-full h-32 rounded shadow-md "
              >
                <Typography className="text-white font-main font-bold flex items-center justify-center h-full bg-yellow">
                  {10} Documents requis
                </Typography>
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                lg={2.8}
                className="w-full h-32 rounded shadow-md "
              >
                <Typography className="text-white font-main font-bold flex items-center justify-center h-full bg-blue-400">
                  {10} En traitement
                </Typography>
              </Grid>
            </Grid>
            <Box className={"w-full mt-4"}>
              <Box className={"flex items-center gap-2"}>
                <Settings
                  fontSize="large"
                  className="bg-mainBleu text-white p-2 rounded"
                />
                <Typography className="font-main capitalize text-2xl text-mainBleu ">
                  gérez vos demandes
                </Typography>
              </Box>
            </Box>
            <Grid item xl={12}>
              <Paper>
                <TableContainer sx={{ maxHeight: 220 }}>
                  <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                      <TableRow>
                        {columns.map((column) => (
                          <TableCell
                            key={column.id}
                            align={column.align}
                            style={{ minWidth: column.minWidth }}
                            sx={{ backgroundColor: "#f0f0f0", color: "black" }}
                            className="font-main uppercase font-bold h-16"
                          >
                            {column.label}
                          </TableCell>
                        ))}
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows
                        .slice(
                          page * rowsPerPage,
                          page * rowsPerPage + rowsPerPage
                        )
                        .map((row) => {
                          return (
                            <TableRow
                              hover
                              role="checkbox"
                              tabIndex={-1}
                              key={row.code}
                            >
                              {columns.map((column) => {
                                const value = row[column.id];
                                return (
                                  <TableCell
                                    key={column.id}
                                    align={column.align}
                                    className={`${
                                      column.id === "Status" &&
                                      "font-main font-bold flex items-center w-full gap-2"
                                    }`}
                                  >
                                    {column.format && typeof value === "string"
                                      ? column.format(value)
                                      : value}

                                    {column.id === "Status" && (
                                      <Box
                                        className={
                                          "w-2 h-2 rounded-full bg-green-300"
                                        }
                                      ></Box>
                                    )}
                                    {column.id === "Actions" && (
                                      <Box className={"flex justify-end gap-2"}>
                                        <Edit
                                          fontSize="small"
                                          className="text-gray-500 hover:text-mainBleu cursor-pointer duration-300 transition-all"
                                        />
                                        <Visibility
                                          fontSize="small"
                                          className="text-gray-500 hover:text-green-500 cursor-pointer duration-300 transition-all"
                                        />
                                        <DeleteOutline
                                          fontSize="small"
                                          className="text-gray-500 hover:text-red-500 cursor-pointer duration-300 transition-all"
                                        />
                                      </Box>
                                    )}
                                  </TableCell>
                                );
                              })}
                            </TableRow>
                          );
                        })}
                    </TableBody>
                  </Table>
                </TableContainer>
                <TablePagination
                  rowsPerPageOptions={[10, 25, 100]}
                  component="div"
                  count={rows.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                />
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default SousActivitieDatatable;
