import { Box, Grid, Typography } from "@mui/material";

const ActivitieCard = ({ imgurl, nomAr, nomFr, onClick }) => {
  return (
    <Grid
      item
      xs={5}
      xl={2.9}
      className="p-4 bg-mainBleu rounded text-white font-main hover:bg-yellow transform-all duration-500 text-center cursor-pointer"
      onClick={onClick}
    >
      <Box component="div" className="flex items-center gap-4">
        <Box
          component="img"
          src={imgurl}
          className="bg-white bg-cover bg-center rounded h-24 w-24"
          alt={nomFr}
        />
        <Typography className="text-start font-main">
          {nomFr}
        </Typography>
      </Box>
    </Grid>
  );
};

export default ActivitieCard;
