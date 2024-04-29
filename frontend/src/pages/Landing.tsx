import Navbar from "../component/navbar.tsx";
import { Avatar, Box, Button, Container, Grid, Typography } from "@mui/material";
import { CollectionsBookmark, Copyright, MonetizationOn, Send } from "@mui/icons-material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea, CardActions } from "@mui/material";
import MultiActionAreaCard from "../component/mui/MultiActionAreaCard.tsx";
function Landing() {
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
          justifyContent={"space-evenly"}
          sx={{ flexGrow: 1 }}
          className="m-auto gap-y-2 mt-4 mb-6"
        >
          <Grid
            xs={5}
            xl={2.8}
            className="p-4 bg-mainBleu rounded text-white font-main hover:bg-yellow transform-all duration-500 text-center cursor-pointer"
          >
            <Box component={"div"} className="flex items-center gap-4">
              <Button size="small" className="bg-white h-8 max-w-12 min-w-8 ">
                <MonetizationOn />
              </Button>
              <Typography>Social Loans Service</Typography>
            </Box>
          </Grid>
          <Grid
            xs={5}
            xl={2.8}
            className="p-4 bg-mainBleu rounded text-white font-main hover:bg-yellow transform-all duration-500 text-center cursor-pointer"
          >
            <Box component={"div"} className="flex items-center gap-4">
              <Button size="small" className="bg-white h-8 max-w-12 min-w-8">
                <MonetizationOn />
              </Button>
              <Typography>Social Loans Service</Typography>
            </Box>
          </Grid>
          <Grid
            xs={5}
            xl={2.8}
            className="p-4 bg-mainBleu rounded text-white font-main hover:bg-yellow transform-all duration-500 text-center cursor-pointer"
          >
            <Box component={"div"} className="flex items-center gap-4">
              <Button size="small" className="bg-white h-8 max-w-12 min-w-8">
                <MonetizationOn />
              </Button>
              <Typography>Social Loans Service</Typography>
            </Box>
          </Grid>
          <Grid
            xs={5}
            xl={2.8}
            className="p-4 bg-mainBleu rounded text-white font-main hover:bg-yellow transform-all duration-500 text-center cursor-pointer"
          >
            <Box component={"div"} className="flex items-center gap-4">
              <Button size="small" className="bg-white h-8 max-w-12 min-w-8">
                <MonetizationOn />
              </Button>
              <Typography>Social Loans Service</Typography>
            </Box>
          </Grid>
          <Grid
            xs={5}
            xl={2.8}
            className="p-4 bg-mainBleu rounded text-white font-main hover:bg-yellow transform-all duration-500 text-center cursor-pointer"
          >
            <Box component={"div"} className="flex items-center gap-4">
              <Button size="small" className="bg-white h-8 max-w-12 min-w-8">
                <MonetizationOn />
              </Button>
              <Typography>Social Loans Service</Typography>
            </Box>
          </Grid>
          <Grid
            xs={5}
            xl={2.8}
            className="p-4 bg-mainBleu rounded text-white font-main hover:bg-yellow transform-all duration-500 text-center cursor-pointer"
          >
            <Box component={"div"} className="flex items-center gap-4">
              <Button size="small" className="bg-white h-8 max-w-12 min-w-8">
                <MonetizationOn />
              </Button>
              <Typography>Social Loans Service</Typography>
            </Box>
          </Grid>
          <Grid
            xs={5}
            xl={2.8}
            className="p-4 bg-mainBleu rounded text-white font-main hover:bg-yellow transform-all duration-500 text-center cursor-pointer"
          >
            <Box component={"div"} className="flex items-center gap-4">
              <Button size="small" className="bg-white h-8 max-w-12 min-w-8">
                <MonetizationOn />
              </Button>
              <Typography>Social Loans Service</Typography>
            </Box>
          </Grid>
          <Grid
            xs={5}
            xl={2.8}
            className="p-4 bg-mainBleu rounded text-white font-main hover:bg-yellow transform-all duration-500 text-center cursor-pointer"
          >
            <Box component={"div"} className="flex items-center gap-4">
              <Button size="small" className="bg-white h-8 max-w-12 min-w-8">
                <MonetizationOn />
              </Button>
              <Typography>Social Loans Service</Typography>
            </Box>
          </Grid>
          <Grid
            xs={5}
            xl={2.8}
            className="p-4 bg-mainBleu rounded text-white font-main hover:bg-yellow transform-all duration-500 text-center cursor-pointer"
          >
            <Box component={"div"} className="flex items-center gap-4">
              <Button size="small" className="bg-white h-8 max-w-12 min-w-8">
                <MonetizationOn />
              </Button>
              <Typography>Social Loans Service</Typography>
            </Box>
          </Grid>
          <Grid
            xs={5}
            xl={2.8}
            className="p-4 bg-mainBleu rounded text-white font-main hover:bg-yellow transform-all duration-500 text-center cursor-pointer"
          >
            <Box component={"div"} className="flex items-center gap-4">
              <Button size="small" className="bg-white h-8 max-w-12 min-w-8">
                <MonetizationOn />
              </Button>
              <Typography>Social Loans Service</Typography>
            </Box>
          </Grid>
          <Grid
            xs={5}
            xl={2.8}
            
            className="p-4 bg-mainBleu rounded text-white font-main hover:bg-yellow transform-all duration-500 text-center cursor-pointer"
          >
            <Box component={"div"} className="flex items-center gap-4">
              <Button size="small" className="bg-white h-8 max-w-12 min-w-8">
                <MonetizationOn />
              </Button>
              <Typography>Social Loans Service</Typography>
            </Box>
          </Grid>
          <Grid
            xs={5}
            xl={2.8}
            className="p-4 bg-mainBleu rounded text-white font-main hover:bg-yellow transform-all duration-500 text-center cursor-pointer"
          >
            <Box component={"div"} className="flex items-center gap-4">
              <Button size="small" className="bg-white h-8 max-w-12 min-w-8">
                <MonetizationOn />
              </Button>
              <Typography>Social Loans Service</Typography>
            </Box>
          </Grid>
        </Grid>
        <Typography className="text-xl flex items-center justify-between font-bold capitalize font-main text-start text-mainBleu underline rounded p-4 h-max">
          Esstivage appartement disponible
          <Button endIcon={<Send />} className="min-w-[150px] h-12 bg-mainBleu capitalize font-main hover:bg-yellow text-white">Voir Tout</Button>
        </Typography>
        <Box>
          <Container className="" maxWidth={'lg'}>
            <Grid container 
          justifyContent={"space-between"}
          sx={{ flexGrow: 1 }}
          className=" gap-y-2 mt-4 mb-6" >
            <MultiActionAreaCard />
            <MultiActionAreaCard />
            <MultiActionAreaCard />
          </Grid>
            
          </Container>
          
        </Box> 
        <Typography className="text-xl flex items-center justify-between font-bold capitalize font-main text-start text-mainBleu underline rounded p-4 h-max">
          les Recents Centre disponible
          <Button endIcon={<Send />} className="min-w-[150px] h-12 bg-mainBleu capitalize font-main hover:bg-yellow text-white">Voir Tout</Button>
        </Typography>
        <Box>
          <Container className="" maxWidth={'lg'}>
            <Grid container 
          justifyContent={"space-between"}
          sx={{ flexGrow: 1 }}
          className=" gap-y-2 mt-4 mb-6" >
            <MultiActionAreaCard />
            <MultiActionAreaCard />
            <MultiActionAreaCard />
          </Grid>
          </Container>
        </Box> 
        
      </Container>
      <Box className="h-24 bg-myGray p-4 mt-24 w-full m-auto flex items-center justify-center">
              <div className="bg-logo  w-16 h-16 bg-center bg-cover"></div>
              <Typography className="font-main">
                Association des Affaires Sociales du Ministère de l'Industrie <Copyright /> {new Date().getFullYear()}

              </Typography>
        </Box>
    </div>
  );
}

export default Landing;
