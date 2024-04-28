import Navbar from "../component/navbar.tsx";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { Search } from "@mui/icons-material";

function Landing() {
  return (
    <div className={"bg-landing w-screen h-screen bg-cover "}>
      <Navbar></Navbar>
      <Container className={""}>
        <Grid container spacing={0} gap={2} sx={{ flexGrow: 1 }} marginTop={8}>
          <Grid
            item
            component={"div"}
            xs={5}
            className={
              "h-[500px] border-2 rounded-xl drop-shadow-xl bg-bg bg-center bg-contain"
            }
            padding={0}
          ></Grid>
          <Grid
            item
            component={"div"}
            xs={6}
            className={"grid items-center gap-2"}
          >
            <Box>
              <Typography className={"text-3xl font-main "}>
                Association des Affaires Sociales du Ministère de l'Industrie,
                du Commerce et des Technologies Modernes
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
                endIcon={<Search />}
                size={"large"}
                className={
                  "capitalize mt-4 font-main bg-mainBleu text-white hover:bg-yellow hover:text-white font-bold transition-all duration-700 "
                }
              >
                Voir tout
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Landing;
