import Navbar from "../component/navbar.tsx";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { CollectionsBookmark, Send } from "@mui/icons-material";
import MultiActionAreaCard from "../component/mui/MultiActionAreaCard.tsx";
import ActivitieCard from "../component/mui/activitieCard.tsx";
import Footer from "../component/footer.tsx";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Landing() {
  const [SousActivities, setSousActivities] = useState({
    loading: true,
    error: "",
    data: [],
  });
  const navigate = useNavigate()
  useEffect(() => {
    const fetchSousActivities = async () => {
      try {
        const res = await axios.get("http://localhost:3000/sous-activite");
        setSousActivities({
          loading: true,
          data: res.data,
          error: "",
        });
        console.log(res.data);
      } catch (error) {
        setSousActivities({
          data: [],
          error: `Error fetching navbar data:`,
          loading: false,
        });
      }
    };
    fetchSousActivities();
  }, []);
  return (
    <div className={"bg-landing h-screen bg-cover "}>
      <Navbar></Navbar>
      <Container className={""}>
        <Grid
          container
          spacing={0}
          gap={6}
          sx={{ flexGrow: 1 }}
          marginTop={4}
          marginBottom={6}
        >
          <Grid
            item
            component={"div"}
            xs={12}
            md={5}
            className={
              "h-[550px] max-md:h-[300px] border-2  rounded-xl drop-shadow-xl bg-home bg-center bg-cover"
            }
            padding={0}
          ></Grid>
          <Grid
            item
            component={"div"}
            md={6}
            xs={12}
            className={"grid items-center gap-2"}
          >
            <Box>
              <Typography
                className={"text-[28px] font-main  text-mainBleu font-bold"}
              >
                <p className="d">Association des Affaires Sociales</p> du
                Ministère de l'Industrie, du Commerce et des Technologies
                Modernes
              </Typography>
              <Typography className={"font-main py-2"}>
                L'objectif de l'association est d'organiser et de promouvoir des
                activités à caractère social, culturel et sportif au profit de
                ses membres, qu'ils soient actifs ou retraités, ainsi que de
                leurs familles, veuves et orphelins des défunts parmi eux, dans
                le but de renforcer et de développer les liens de fraternité et
                de solidarité entre ses membres.
              </Typography>
              <Button
                startIcon={<CollectionsBookmark />}
                size={"large"}
                className={
                  "capitalize mt-4 font-main bg-mainBleu text-white hover:bg-yellow hover:text-white font-bold transition-all duration-700 "
                }
              >
                Voir Plus
              </Button>
            </Box>
          </Grid>
        </Grid>
        <Typography className="text-xl font-bold capitalize font-main text-start text-mainBleu underline rounded p-4 h-max">
          Explorez notre demande en ligne dès maintenant disponible
        </Typography>
        <Grid
          container
          justifyContent={""}
          sx={{ flexGrow: 1 }}
          className="m-auto gap-2 mt-4 mb-6"
        >
          {SousActivities.data.length > 0
            ? SousActivities.data.map((singleSousActivitie) => {
                return (
                  <ActivitieCard
                    onClick={()=>navigate(`SousActivitie/${singleSousActivitie.id}`)}
                    imgurl={singleSousActivitie?.imgUrl}
                    nomAr={singleSousActivitie?.nomAr}
                    nomFr={singleSousActivitie?.nomFr}
                  />
                );
              })
            : ""}
        </Grid>
        <Typography className="text-xl flex items-center justify-between font-bold capitalize font-main text-start text-mainBleu underline rounded p-4 h-max">
          Esstivage appartement disponible
          <Button
            endIcon={<Send />}
            className="min-w-[150px] h-12 bg-mainBleu capitalize no-underline font-main hover:bg-yellow text-white"
          >
            Voir Tout
          </Button>
        </Typography>
        <Box>
          <Container className="" maxWidth={"lg"}>
            <Grid
              container
              justifyContent={"space-between"}
              sx={{ flexGrow: 1 }}
              className=" gap-y-2 mt-4 mb-6"
            >
              <MultiActionAreaCard />
              <MultiActionAreaCard />
              <MultiActionAreaCard />
            </Grid>
          </Container>
        </Box>
        <Typography className="text-xl flex items-center justify-between font-bold capitalize font-main text-start text-mainBleu underline rounded p-4 h-max">
          les Recents Centre disponible
          <Button
            endIcon={<Send />}
            className="min-w-[150px] h-12 bg-mainBleu no-underline capitalize font-main hover:bg-yellow text-white"
          >
            Voir Tout
          </Button>
        </Typography>
        <Box>
          <Container className="" maxWidth={"lg"}>
            <Grid
              container
              justifyContent={"space-between"}
              sx={{ flexGrow: 1 }}
              className=" gap-y-2 mt-4 mb-6"
            >
              <MultiActionAreaCard />
              <MultiActionAreaCard />
              <MultiActionAreaCard />
            </Grid>
          </Container>
        </Box>
        <Typography className="text-xl flex items-center justify-between font-bold capitalize font-main text-start text-mainBleu underline rounded p-4 h-max">
          les Recents Excursion disponible
          <Button
            endIcon={<Send />}
            className="min-w-[150px] h-12 bg-mainBleu no-underline capitalize font-main hover:bg-yellow text-white"
          >
            Voir Tout
          </Button>
        </Typography>
        <Box>
          <Container className="" maxWidth={"lg"}>
            <Grid
              container
              justifyContent={"space-between"}
              sx={{ flexGrow: 1 }}
              className=" gap-y-2 mt-4 mb-6"
            >
              <MultiActionAreaCard />
              <MultiActionAreaCard />
              <MultiActionAreaCard />
            </Grid>
          </Container>
        </Box>
      </Container>
      <Footer />
    </div>
  );
}

export default Landing;
