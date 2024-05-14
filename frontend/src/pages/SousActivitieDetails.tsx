import { Box, Container, Typography } from "@mui/material";
import Navbar from "../component/navbar";
import { useState } from "react";
import FileUpload from "../component/dropfile";

const SousActivitieDetails = () => {
  const [DropFile, SetDropfile] = useState<boolean>(false);
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
          <Typography>{"Allocation de retrait"}</Typography>
        </Box>
        {DropFile ? (
          <FileUpload />
        ) : (
          <Box className={"bg-gray-50 h-full mt-5 rounded p-5 mb-5"}>
            <Box>
              <Box
                component={"div"}
                className="w-full bg-makah bg-center h-[320px]  bg-cover "
              ></Box>
              <Box component={"div"} className={"mt-5 "}>
                <Typography className="font-main capitalize font-bold bg-mainBleu w-max p-2 text-white rounded">
                  Parlons de {"Allocation de retrait"}
                </Typography>
                <Typography className={"mt-2 font-main p-2 "}>
                  L'Association des Affaires Sociales du Ministère de
                  l'Industrie, du Commerce et des Technologies Modernes accorde
                  à ses membres une allocation financière lors de leur départ à
                  la retraite à l'âge légal. Cette allocation s'élève à 51 000
                  dirhams en reconnaissance de leurs services exceptionnels
                  rendus tout au long de leur carrière dans le secteur. De plus,
                  une cérémonie annuelle est organisée en l'honneur des
                  retraités, au cours de laquelle ils reçoivent cette allocation
                  ainsi que des plaques commémoratives.
                </Typography>
              </Box>
              <Box component={"div"} className={"mt-5 "}>
                <Typography className="font-main capitalize font-bold bg-mainBleu w-max p-2 text-white rounded">
                  Les documents requis
                </Typography>
                <ul className="pl-10 py-4 list-disc font-secend">
                  <li>Copie de la décision de mise à la retraite</li>
                  <li>Copie de la décision de mise à la retraite</li>
                  <li>Copie de la décision de mise à la retraite</li>
                  <li>Copie de la décision de mise à la retraite</li>
                  <li>Copie de la décision de mise à la retraite</li>
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
