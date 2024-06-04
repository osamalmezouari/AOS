import { AccountBalance } from "@mui/icons-material";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import SideBar from "../../component/sidebar";
import Header from "../../component/header";
import { useEffect, useState } from "react";
import {
  ActivitieWithSousActivities,
  SingleSousActivities,
} from "../../interfaces/types";
import axios from "axios";
import { PORT } from "../../../env";
import { useNavigate, useParams } from "react-router-dom";

const Activitie = () => {
  const navigate = useNavigate();
  const [ActivitieWithSousActivities, setNavbarData] = useState<{
    loading: boolean;
    error: string;
    data: ActivitieWithSousActivities[];
  }>({
    loading: true,
    error: "",
    data: [],
  });

  useEffect(() => {
    const FetchSousActivities = async () => {
      try {
        const res = await axios.get(`http://localhost:${PORT}/activite`);
        setNavbarData({
          loading: true,
          data: res.data,
          error: "",
        });
        console.log(res.data);
      } catch (error) {
        setNavbarData({
          data: [],
          error: `Error fetching navbar data:`,
          loading: false,
        });
      }
    };
    FetchSousActivities();
  }, []);
  const { id } = useParams();

  return (
    <Box>
      <Box>
        <SideBar />
        <Header />
        <Container maxWidth="lg" className="pt-28 flex items-center h-[90vh]">
          <Grid container gap={2}>
            <Box className={"w-full mb-4 mt-4"}>
              <Box className={"flex items-center gap-2"}>
                <AccountBalance
                  fontSize="large"
                  className="bg-mainBleu text-white p-2 rounded"
                />
                <Typography className="font-main capitalize text-2xl text-mainBleu ">
                  {ActivitieWithSousActivities.data.map((item) => {
                    return item.id === id ? item.nomFr : "";
                  })}
                </Typography>
              </Box>
            </Box>
            <Grid
              container
              className="h-[60vh] overflow-y-scroll gap-4 justify-start"
            >
              {ActivitieWithSousActivities.data.map((item) => {
                return item.id === id
                  ? item.SousActivities.map(
                      (singleSousActivities: SingleSousActivities) => {
                        return (
                          <Grid
                            item
                            xs={12}
                            sm={6}
                            md={4}
                            lg={3.8}
                            style={{
                              backgroundImage: `url(${singleSousActivities.imgUrl})`,
                            }}
                            className="p-2 flex items-end justify-end w-full h-full max-h-[250px] rounded shadow-md bg-cover bg-center"
                          >
                            <Button
                              onClick={() =>
                                navigate(
                                  `/AOS/Profile/Activitie/Gererdemandes/${singleSousActivities.id}`
                                )
                              }
                              className="bg-mainBleu w-max h-max text-white duration-500 hover:bg-yellow p-2 font-secend font-bold  capitalize"
                            >
                              {singleSousActivities.nomFr}
                            </Button>
                          </Grid>
                        );
                      }
                    )
                  : "";
              })}
              {}
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};
export default Activitie;
