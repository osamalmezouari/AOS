import { PollSharp, Settings } from "@mui/icons-material";
import { Box, Container, Grid, Typography } from "@mui/material";
import SideBar from "../../component/sidebar";
import Header from "../../component/header";
import DemandesManageTable from "./DemandesTable";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { DemadesDataType } from "../../interfaces/types";
const SousActivitieDatatable = () => {
  const { id } = useParams();
  const userDataString = localStorage.getItem("user");
  const JSONDATA = userDataString ? JSON.parse(userDataString) : null;
  const user = JSONDATA;
  const [toogleObserv, SetToogleObserv] = useState({})
  const [DataTable, setDatatable] = useState<{
    data: DemadesDataType | [];
    loading: boolean;
  }>({
    data: [],
    loading: true,
  });
  const [Statdata, setStatData] = useState({
    approuved: 0,
    refused: 0,
    Docrequired: 0,
    inProgress: 0,
  });

  useEffect(() => {
    const getStatDashboardProfile = async () => {
      try {
        const res = await axios.get(
          `http://localhost:3400/sous-activite/singlesousActivitie/${user.id}/${id}`
        );
        const data = await res.data;
        const approuved = data.filter(
          (item: string) => item === "Approuvées"
        ).length;
        const refused = data.filter(
          (item: string) => item === "Refusées"
        ).length;
        const Docrequired = data.filter(
          (item: string) => item === "Documents requis"
        ).length;
        const inProgress = data.filter(
          (item: string) => item === "En traitement"
        ).length;
        setStatData({
          approuved,
          refused,
          Docrequired,
          inProgress,
        });
      } catch (error) {
        console.log(error);
      }
    };
    getStatDashboardProfile();
  }, [user.id]);
  useEffect(() => {
    const personeldemandesDetails = async () => {
      try {
        const res = await axios.get(
          `http://localhost:3400/personel/SingleSousActivitiesdemandesWithDetails/${user.id}/${id}`
        );
        const data = await res.data;
        setDatatable({
          data: data,
          loading: false,
        });
      } catch (error) {
        console.log(error);
        setDatatable({
          ...DataTable,
          loading: false,
        });
      }
    };
    personeldemandesDetails();
  }, [user.id]);

  return (
    <Box>
      <Box>
        <SideBar />
        <Header />
        <Container maxWidth="lg" className="h-[90vh] pt-32">
          <Grid container className="gap-y-6">
            <Box className={"w-full mt-4"}>
              <Box className={"flex items-center gap-2"}>
                <PollSharp
                  fontSize="large"
                  className="bg-mainBleu text-white p-2 rounded"
                />
                <Typography className="font-main capitalize text-2xl text-mainBleu ">
                  {DataTable?.data[0]?.SousActivite.nomFr}
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
                  {Statdata.approuved} Approuvées
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
                  {Statdata.refused} Refusées
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
                  {Statdata.Docrequired} Documents requis
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
                  {Statdata.inProgress} En traitement
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
              <DemandesManageTable data={DataTable.data} />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default SousActivitieDatatable;
