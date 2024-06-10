import { Avatar, Box, Grid, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
const ViewCard = () => {
  const { observInfo, Status } = useParams();
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      component={"div"}
      className="bg-landing bg-contain flex-wrap"
    >
      <Grid
        container
        maxWidth={"800px"}
        maxHeight={"300px"}
        className="min-h-[300px] bg-gray-50 rounded gap-2 ml-4 mt-4"
      >
        <Grid item xl={5} xs={0} className="bg-makah bg-center bg-cover"></Grid>
        <Grid item xl={6} className="flex items-center bg-landing bg-center">
          <Box className={'w-full'}>
            <Avatar src="A" alt="A" className="border-2 border-mainBleu mb-1" />
            <Typography className="w-full font-main px-2 mt-4">
              {observInfo}
            </Typography>
            <Typography className="flex items-center gap-2 font-secend p-2 ">
              <Typography
                className={`w-2 h-2 rounded-full 
                ${Status === "Documents requis" && "bg-yellow"}
                ${Status === "Refusée" && "bg-red-400"}
                ${Status === "Approuvée" && "bg-green-400"}
              `}
              ></Typography>
              <Typography
                className={`text-[12px] font-bold font-main ${
                  Status === "Documents requis" && "text-yellow"
                } ${Status === "Refusée" && "text-red-400"} ${
                  Status === "Approuvée" && "text-green-400"
                }`}
              >
                {Status}
              </Typography>
            </Typography>
            <Avatar
              src="https://github.com/osamalmezouari/AOS/raw/master/frontend/public/assets/images/logo.jpg"
              alt="A"
              className="border-2 border-yellow ml-auto w-16 h-16"
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ViewCard;
