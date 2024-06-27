import { Avatar, Box, Grid, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { PORT } from "../../../../env";
import { useParams } from "react-router-dom";

const PretsView = () => {
  const { demandeId } = useParams();

  const [data, setdata] = useState({});
  useEffect(() => {
    const fetchdemandeMariage = async () => {
      try {
        const res = await axios.get(
          `http://localhost:${PORT}/demande-credit/${demandeId}`
        );
        const datares = await res.data;
        setdata(datares);
      } catch (err) {
        console.log(err);
      }
    };
    fetchdemandeMariage();
  }, []);
  useEffect(() => {
    console.log(data);
  }, []);
  return (
    <>
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
          maxWidth={"1200px"}
          className="h-max bg-gray-300 rounded gap-2 ml-4 mt-4 p-4 font-main border-rounded border-2 border-blue-300"
        >
          <Grid
            item
            xl={3}
            xs={0}
            className="bg-makah bg-center bg-cover"
          ></Grid>
          <Grid item xl={6} className="flex items-center bg-landing bg-center">
            <Box className={"w-full h-full"}>
              
              <Typography className="w-full font-main px-2 mt-4">
                Observation : {data && data.observation}
              </Typography>
              <Typography className="w-full font-main px-2 mt-4">
                description : {data && data.description}
              </Typography>
              <Typography className="w-full font-main px-2 mt-4">
                Montant : {data && data.mantantCredit}
              </Typography>
              <Typography className="w-full font-main px-2 mt-4">
                Effet : {data && data.effet}
              </Typography>
              <Typography className="flex items-center gap-2 font-secend p-2 ">
                <Typography
                  className={`w-2 h-2 rounded-full 
                ${data && data.Status === "Documents requis" && "bg-yellow"}
                ${data && data.Status === "Refusée" && "bg-red-400"}
                ${data && data.Status === "Approuvée" && "bg-green-400"}
                ${data && data.Status === "En traitement" && "bg-blue-400"}
                ${data && data.Status === null && "bg-gray-400"}
              `}
                ></Typography>
                <Typography
                  className={`text-[12px] font-bold font-main ${
                    data && data.Status === "Documents requis"
                      ? "text-yellow"
                      : ""
                  } ${
                    data && data.Status === "Refusée" ? "text-red-400" : ""
                  } ${
                    data && data.Status === "Approuvée" ? "text-green-400" : ""
                  }${
                    data && data.Status === "En traitement"
                      ? "text-blue-400"
                      : ""
                  } ${
                    data && data.Status === null
                      ? "text-gray-400"
                      : ""
                  }`}
                >
                   {data && data.Status || 'pas encore vue'}
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
    </>
  );
};
export default PretsView;
