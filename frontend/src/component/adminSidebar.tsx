import {
  AccountCircleRounded,
  AccountTree,
  ExpandLess,
  ExpandMore,
  FolderCopy,
  HomeWork,
  KeyboardDoubleArrowLeft,
  KeyboardDoubleArrowRight,
  Logout,
  SpaceDashboard,
  Stadium,
  Tour,
  VolunteerActivism,
  WorkOutlineRounded,
} from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { PORT } from "../../env";

const AdminSideBar = () => {
  const [NavbarData, setNavbarData] = useState({
    loading: true,
    error: "",
    data: [],
  });
  const [toogle, setToogle] = useState({
    demandes: true,
    panel: false,
  });
  const [ToogleClose, setToogleClose] = useState(false);
  const navigate = useNavigate();
  const HandleClose = (target: string) => {
    if (target === "demandes") {
      setToogle({ panel: false, demandes: !toogle.demandes });
    }
    if (target === "panel") {
      setToogle({ demandes: false, panel: !toogle.panel });
    }
  };
  const Deconexion = () => {
    localStorage.clear();
    navigate("/Aos", { replace: true });
  };
  useEffect(() => {
    const fetchNavbar = async () => {
      try {
        const res = await axios.get(`http://localhost:${PORT}/sous-activite`);
        setNavbarData({
          loading: true,
          data: res.data,
          error: "",
        });
        console.log(res.data);
      } catch (error) {
        setNavbarData({
          data: [],
          error: `Error fetching navbar data:`,
          loading: false,
        });
      }
    };
    fetchNavbar();
  }, []);
  return (
    <>
      <Box
        className={`w-max p-2 min-h-screen max-h-max z-20 fixed bg-gray-100 text-white flex flex-col items-center duration-500 transation-all py-6 gap-6 justify-between ${
          ToogleClose ? "-left-[208px]" : "left-0"
        }`}
      >
        <Box
          className={`cursor-pointer absolute top-[50%] left-[95%] `}
          onClick={() => setToogleClose(!ToogleClose)}
        >
          {ToogleClose ? (
            <KeyboardDoubleArrowRight className="text-white bg-blue-500 rounded-tr-lg rounded-br-lg w-6 h-6" />
          ) : (
            <KeyboardDoubleArrowLeft className="text-white bg-blue-500 rounded-tr-lg rounded-br-lg w-6 h-6" />
          )}
        </Box>
        <Box className={"self-start text-gray-600"}>
          <Box
            component={"div"}
            onClick={() => navigate("/AOS/Admin/Dashbaord", { replace: true })}
            className={
              "bg-mainBleu flex gap-2 items-center px-4 py-2 rounded hover:bg-yellow duration-500 text-white transition cursor-pointer"
            }
          >
            <SpaceDashboard fontSize="small" />
            <Typography> Dashbaord </Typography>
          </Box>
          <Box
            component={"div"}
            onClick={() => HandleClose("demandes")}
            className={
              "bg-mainBleu justify-between mt-2 flex gap-4 items-center px-4 py-2 rounded hover:bg-yellow duration-500 text-white transition cursor-pointer"
            }
          >
            <FolderCopy fontSize="small" />
            <Typography> Demandes </Typography>
            {toogle.demandes ? (
              <ExpandLess fontSize="small" />
            ) : (
              <ExpandMore fontSize="small" />
            )}
          </Box>
          <Box
            className={`pl-5 block mt-2 cursor-pointer font-main w-[200px] max-h-[250px] overflow-y-scroll ${
              !toogle.demandes && "hidden"
            }`}
          >
            {NavbarData.data.map((singleSousActivitie) => {
              return (
                <Typography
                  component={"div"}
                  onClick={() =>
                    navigate(
                      `/AOS/Admin/Dashboard/demande/${singleSousActivitie.id}`
                    )
                  }
                  className={
                    "text-[12px] bg-gray-200 my-2 rounded text-black w-[160px] hover:underline hover:ml-2 transition-all duration-300 py-2 pl-2 text-black-500"
                  }
                >
                  {singleSousActivitie.nomFr}
                </Typography>
              );
            })}
          </Box>
          <Box className={`block mt-2 cursor-pointer font-main `}>
            <Box
              component={"div"}
              onClick={() =>
                navigate("/AOS/Admin/Dashboard/demande/inscriptions", {
                  replace: true,
                })
              }
              className={
                "text-[12px] flex gap-4 bg-blue-500 my-2 rounded text-white  hover:underline hover:ml-2 transition-all duration-300 py-2 pl-2 text-black-500"
              }
            >
              <AccountCircleRounded fontSize="small" />
              <Typography> Inscreptions </Typography>
            </Box>
            <Box
              component={"div"}
              onClick={() =>
                navigate("/AOS/Admin/Dashboard/demande/sousActivities", {
                  replace: true,
                })
              }
              className={
                "text-[12px] flex gap-4 bg-blue-500 my-2 rounded text-white  hover:underline hover:ml-2 transition-all duration-300 py-2 pl-2 text-black-500"
              }
            >
              <VolunteerActivism fontSize="small" />
              <Typography> Sous Activities </Typography>
            </Box>
            <Box
              component={"div"}
              onClick={() =>
                navigate("/AOS/Admin/Dashboard/demande/CentresEstivage", {
                  replace: true,
                })
              }
              className={
                "text-[12px] flex gap-4 bg-blue-500 my-2 rounded text-white  hover:underline hover:ml-2 transition-all duration-300 py-2 pl-2 text-black-500"
              }
            >
              <Stadium fontSize="small" />
              <Typography> Esstivage Centres </Typography>
            </Box>
            <Box
              component={"div"}
              onClick={() =>
                navigate("/AOS/Admin/Dashboard/demande/Excursion", {
                  replace: true,
                })
              }
              className={
                "text-[12px] flex gap-4 bg-blue-500 my-2 rounded text-white  hover:underline hover:ml-2 transition-all duration-300 py-2 pl-2 text-black-500"
              }
            >
              <Tour fontSize="small" />
              <Typography> Excursion </Typography>
            </Box>
            <Box
              component={"div"}
              onClick={() =>
                navigate("/AOS/Admin/Dashboard/demande/Appartements", {
                  replace: true,
                })
              }
              className={
                "text-[12px] flex gap-4 bg-blue-500 my-2 rounded text-white  hover:underline hover:ml-2 transition-all duration-300 py-2 pl-2 text-black-500"
              }
            >
              <HomeWork fontSize="small" />
              <Typography> Appartements </Typography>
            </Box>
            <Box
              component={"div"}
              onClick={() =>
                navigate("/AOS/Admin/Dashboard/demande/Structures", {
                  replace: true,
                })
              }
              className={
                "text-[12px] flex gap-4 bg-blue-500 my-2 rounded text-white  hover:underline hover:ml-2 transition-all duration-300 py-2 pl-2 text-black-500"
              }
            >
              <AccountTree fontSize="small" />
              <Typography> Structures </Typography>
            </Box>
            <Typography
              component={"div"}
              onClick={() =>
                navigate("/AOS/Admin/Dashboard/demande/Persones", {
                  replace: true,
                })
              }
              className={
                "text-[12px] flex gap-4 bg-blue-500 my-2 rounded text-white  hover:underline hover:ml-2 transition-all duration-300 py-2 pl-2 text-black-500"
              }
            >
              <WorkOutlineRounded fontSize="small" />
              <Typography> Persones </Typography>
            </Typography>
          </Box>
        </Box>
        <Button onClick={()=>Deconexion()}>
          <Logout className="text-gray-700 w-12" fontSize="small" />
          Deconexion
        </Button>
      </Box>
    </>
  );
};
export default AdminSideBar;
