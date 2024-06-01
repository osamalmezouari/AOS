import { Box, Container, Grid, Typography } from "@mui/material";
import Navbar from "../component/navbar";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { SingleSousActivitiesWithpieces } from "../interfaces/types.tsx";
import { PORT } from "../../env.ts";

interface SousActivitieState {
  loading: boolean;
  data: SingleSousActivitiesWithpieces | null;
  error: string;
}

const SousActivitieDetails = () => {
  const navigate = useNavigate();
  const [SousActivitieDetails, SetSousActivitieDetails] =
    useState<SousActivitieState>({
      loading: true,
      data: null,
      error: "",
    });

  const { id } = useParams<{ id: string }>();
  const user = localStorage.getItem("user");

  const CheckDemade = () => {
    if (!user) {
      navigate("/AOS/SeConecter");
    }
    if (id === "1" && user) {
      navigate("/AOS/SousActivitie/DemandeMriage", { replace: true });
    } else if (id === "4" && user) {
      navigate("/AOS/SousActivitie/DemandeRetrait", { replace: true });
    } else if (id === "13" && user) {
      navigate("/AOS/SousActivitie/DemandeNaissance", { replace: true });
    } else if (id === "2" && user) {
      navigate("/AOS/SousActivitie/Pelerinage", { replace: true });
    } else if (id === "6" && user) {
      navigate("/AOS/SousActivitie/Condoleance", { replace: true });
    } else if (id === "5" && user) {
      navigate("/AOS/SousActivitie/Maladies", { replace: true });
    } else if (id === "3" && user) {
      navigate("/AOS/SousActivitie/Prets", { replace: true });
    } else if (id === "14" && user) {
      navigate("/AOS/SousActivitie/rentree-scolaire", { replace: true });
    } else if (id === "15" && user) {
      navigate("/AOS/SousActivitie/lang", { replace: true });
    } else if (id === "11" && user) {
      navigate("/AOS/SousActivitie/Zoo", { replace: true });
    } else if (id === "10" && user) {
      navigate("/AOS/SousActivitie/Esstivage", { replace: true });
    } else if (id === "12" && user) {
      navigate("/AOS/SousActivitie/Excursion", { replace: true });
    }
  };

  useEffect(() => {
    const fetchSousActivitieDetails = async () => {
      try {
        const res = await axios.get(
          `http://localhost:${PORT}/sous-activite/${id}`
        );
        const data: SingleSousActivitiesWithpieces = res.data;
        SetSousActivitieDetails({
          data: data,
          loading: false,
          error: "",
        });
        console.log(data);
      } catch (error) {
        SetSousActivitieDetails({
          data: null,
          loading: false,
          error: error.message,
        });
      }
    };
    fetchSousActivitieDetails();
  }, [id]);

  if (SousActivitieDetails.loading) {
    return <div>Loading...</div>;
  }

  if (SousActivitieDetails.error) {
    return <div>Error: {SousActivitieDetails.error}</div>;
  }

  const data = SousActivitieDetails.data;

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
          <Typography>{data?.nomFr}</Typography>
        </Box>
        <Box
          className={
            "bg-gray-50 h-full mt-5 rounded p-5 mb-5 border-mainBleu border-2 "
          }
        >
          <Grid container className={"justify-between items-center "}>
            <Grid
              xl={12}
              component={"img"}
              src={data?.imgUrl}
              className="w-max bg-center bg-contain bg-repeat h-max rounded-xl"
            ></Grid>
            <Grid xl={12}>
              <Box component={"div"} className={"mt-5"}>
                <Typography className="font-main capitalize font-bold bg-mainBleu p-2 text-white rounded">
                  Parlons de {data?.nomFr}
                </Typography>
                {data && (
                  <Typography
                    className={"mt-2 font-main p-2"}
                    style={{ whiteSpace: "pre-wrap" }}
                  >
                    {data.descriptionFr}
                  </Typography>
                )}
              </Box>
              <Box component={"div"} className={"mt-5"}>
                <Typography className="font-main capitalize font-bold bg-mainBleu w-max p-2 text-white rounded">
                  Les documents requis
                </Typography>
                <ul className="pl-10 py-4 list-disc font-secend">
                  {data?.pieces && data.pieces.length > 0 ? (
                    data.pieces.map((singlePiece) => (
                      <li key={singlePiece.piece.id}>
                        {singlePiece.piece.nomFr}
                      </li>
                    ))
                  ) : (
                    <li>
                      pas de documents nécessaires pour la demande{" "}
                      {SousActivitieDetails.data?.nomFr}
                    </li>
                  )}
                </ul>
              </Box>
              {data?.pieces && data.pieces.length > 0 ? (
                <div
                  onClick={() => CheckDemade()}
                  className="text-white bg-yellow right-0 w-max p-2 rounded cursor-pointer ml-auto"
                >
                  Envoyer les documents
                </div>
              ) : (
                ""
              )}
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default SousActivitieDetails;
