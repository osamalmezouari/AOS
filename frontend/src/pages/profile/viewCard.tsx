import { Avatar, Box, Grid, Typography } from "@mui/material";

const ViewCard = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh" // Full viewport height to center vertically
    >
      <Grid
        container
        maxWidth={"800px"}
        maxHeight={"300px"}
        className="min-h-[300px] bg-gray-50 rounded gap-2 ml-4 mt-4"
      >
        <Grid item xl={5} xs={0} className="bg-makah bg-center bg-cover"></Grid>
        <Grid item xl={6} className="flex items-center bg-landing bg-center">
          <Box>
            <Avatar src="A" alt="A" className="border-2 border-mainBleu mb-1" />
            <Typography className="font-main px-2 mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit earum
              at, labore voluptate distinctio perspiciatis, expedita ipsum quia
              magnam, commodi mollitia ut suscipit exercitationem sapiente
              aliquam eaque. Eligendi, ipsam veritatis.
            </Typography>
            <Typography className="flex items-center gap-2 font-secend p-2 ">
              <Typography className="w-2 h-2 rounded-full bg-yellow"></Typography>
              <Typography className="text-[12px] font-bold font-main text-yellow">
                Document Requis
              </Typography>
            </Typography>
            <Avatar
              src="https://github.com/osamalmezouari/AOS/raw/master/frontend/public/assets/images/logo.jpg"
              alt="A"
              className="border-2 border-yellow ml-auto w-6 h-6"
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ViewCard;
