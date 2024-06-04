import { PollOutlined, Widgets } from "@mui/icons-material";
import { Box, Container, Grid, Typography } from "@mui/material";
import PolarAreaChart from "./ProfileDashboardChart";
import SideBar from "../../component/sidebar";
import Header from "../../component/header";
import { useEffect, useState } from "react";
import axios from "axios";
import TableInfo from "./ProfileDashboardTable";

const Profile = () => {
  const userDataString = localStorage.getItem("user");
  const JSONDATA = userDataString ? JSON.parse(userDataString) : null;
  const user = JSONDATA;
  const [Statdata, setStatData] = useState({
    approuved: 0,
    refused: 0,
    Docrequired: 0,
    inProgress: 0,
  });
  const [DataTable, setDatatable] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    const getStatDashboardProfile = async () => {
      try {
        const res = await axios.get(
          `http://localhost:3400/sous-activite/Profile/State/${user.id}`
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
          `http://localhost:3400/personel/DemandesWithDetails/${user.id}`
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
    <Box className="">
      <Box>
        <SideBar />
        <Header />
        <Container maxWidth="lg" className="pt-28">
          <Grid container gap={2}>
            <Box className={"w-full mb-4 mt-4"}>
              <Box className={"flex items-center gap-2"}>
                <PollOutlined
                  fontSize="large"
                  className="bg-mainBleu text-white p-2 rounded"
                />
                <Typography className="font-secend capitalize text-2xl text-mainBleu ">
                  Suivation de demandes
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
            <Box className={"w-full mt-8"}>
              <Box className={"flex items-center gap-2"}>
                <Widgets
                  fontSize="large"
                  className="bg-mainBleu text-white p-2 rounded"
                />
                <Typography className="font-secend capitalize text-2xl text-mainBleu ">
                  Table des demandes
                </Typography>
              </Box>
            </Box>
            <Grid item xs={12} sm={12} md={12} lg={6} className="py-6 items-start">
              <TableInfo
                data={DataTable.data}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={5.5} className="m-auto">
              <PolarAreaChart  data={Statdata} />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Profile;
