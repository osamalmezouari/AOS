import { Box, Container, Typography } from "@mui/material";
import Navbar from "../component/navbar";
import { useEffect, useState } from "react";
import FileUpload from "../component/dropfile";
import axios from "axios";
import { useParams } from "react-router-dom";

const SousActivitieDetails = () => {
  const [DropFile, SetDropfile] = useState<boolean>(false);
  const [SousActivitieDetails, SetSousActivitieDetails] = useState({
    loading: true,
    data: {},
    error: "",
  });
  const { id } = useParams();
  useEffect(() => {
    const fetchSousActivitieDetails = async () => {
      try {
        const res = await axios.get(
          `http://localhost:3000/sous-activite/${id}`
        );
        const data = await res.data;
        SetSousActivitieDetails({
          data: data,
          loading: false,
          error: "",
        });
        console.log(SousActivitieDetails.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchSousActivitieDetails();
  }, [id]);
  return (
    <>
      <Navbar />
      <Container>
        <Box
          component={"div"}
          className={
            "bg-mainBleu text-white p-4 mt-12 font-main capitalize rounded font-bold"
          }
        >
          <Typography>{SousActivitieDetails.data.nomFr}</Typography>
        </Box>
        {DropFile ? (
          <FileUpload />
        ) : (
          <Box className={"bg-gray-50 h-full mt-5 rounded p-5 mb-5"}>
            <Box>
              <Box
                component={"img"}
                src={`${SousActivitieDetails.data.imgUrl}`}
                className="w-full bg-makah bg-center h-max  bg-cover "
              ></Box>
              <Box component={"div"} className={"mt-5 "}>
                <Typography className="font-main capitalize font-bold bg-mainBleu w-max p-2 text-white rounded">
                  Parlons de {SousActivitieDetails.data.nomFr}
                </Typography>
                {SousActivitieDetails.data ? (
                  <Typography
                    className={"mt-2 font-main p-2"}
                    style={{ whiteSpace: "pre-wrap" }}
                  >
                    {SousActivitieDetails?.data?.descriptionFr}
                  </Typography>
                ) : (
                  ""
                )}
              </Box>
              <Box component={"div"} className={"mt-5 "}>
                <Typography className="font-main capitalize font-bold bg-mainBleu w-max p-2 text-white rounded">
                  Les documents requis
                </Typography>
                <ul className="pl-10 py-4 list-disc font-secend">
                  {SousActivitieDetails?.data?.pieces?.length > 0 ? (
                    SousActivitieDetails.data.pieces.map((Singlepiece) => (
                      <li key={Singlepiece.piece.id}>
                        {Singlepiece.piece.nomFr}
                      </li>
                    ))
                  ) : (
                    <li>pas de documents nécessaires pour ce SousActivitie</li>
                  )}
                </ul>
              </Box>
            </Box>
            <div
              onClick={() => SetDropfile(!DropFile)}
              className="text-white bg-yellow right-0 w-max p-2 rounded cursor-pointer ml-auto"
            >
              Envoyer les documents
            </div>
          </Box>
        )}
      </Container>
    </>
  );
};
export default SousActivitieDetails;
