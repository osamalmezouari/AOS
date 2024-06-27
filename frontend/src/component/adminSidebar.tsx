import {
  ExpandLess,
  ExpandMore,
  Logout,
  PanoramaFishEye,
  SpaceDashboard,
  TrackChanges,
} from "@mui/icons-material";
import { Avatar, Box, Button, Typography } from "@mui/material";
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
        className={`w-max p-2 min-h-screen max-h-max z-20 absolute bg-gray-100 text-white flex flex-col items-center duration-500 transation-all py-6 gap-6 justify-between ${
          ToogleClose ? "-left-[208px]" : "left-0"
        }`}
      >
        <Box
          className={`cursor-pointer absolute top-[50%] left-[95%] `}
          onClick={() => setToogleClose(!ToogleClose)}
        >
          <PanoramaFishEye className="text-white bg-blue-500 rounded-tr-lg rounded-br-lg w-6 h-6" />
        </Box>
        <Box>
          <Avatar
            className="w-12 h-12"
            src="https://github.com/osamalmezouari/AOS/raw/master/frontend/public/assets/images/logo.jpg"
          />
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
            <TrackChanges fontSize="small" />
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
          <Box
            className={
              "bg-mainBleu justify-between mt-2 flex gap-4 items-center px-4 py-2 rounded hover:bg-yellow duration-500 text-white transition cursor-pointer"
            }
            component={"div"}
            onClick={() => HandleClose("panel")}
          >
            <TrackChanges fontSize="small" />
            <Typography> Panel </Typography>
            {toogle.panel ? (
              <ExpandLess fontSize="small" />
            ) : (
              <ExpandMore fontSize="small" />
            )}
          </Box>
          <Box
            className={`pl-5 block max-w-[100px] mt-2 cursor-pointer font-main ${
              !toogle.panel && "hidden"
            }`}
          >
            <Typography
              className={
                "text-[12px] bg-gray-200 my-2 rounded text-black w-[160px] hover:underline hover:ml-2 transition-all duration-300 py-2 pl-2 text-black-500"
              }
            >
              Inscreptions
            </Typography>
            <Typography
              className={
                "text-[12px] bg-gray-200 my-2 rounded text-black w-[160px] hover:underline hover:ml-2 transition-all duration-300 py-2 pl-2 text-black-500"
              }
            >
              Sous Activities
            </Typography>
            <Typography
              className={
                "text-[12px] bg-gray-200 my-2 rounded text-black w-[160px] hover:underline hover:ml-2 transition-all duration-300 py-2 pl-2 text-black-500"
              }
            >
              Centres Esstivage
            </Typography>
            <Typography
              className={
                "text-[12px] bg-gray-200 my-2 rounded text-black w-[160px] hover:underline hover:ml-2 transition-all duration-300 py-2 pl-2 text-black-500"
              }
            >
              Excurssion
            </Typography>
            <Typography
              className={
                "text-[12px] bg-gray-200 my-2 rounded text-black w-[160px] hover:underline hover:ml-2 transition-all duration-300 py-2 pl-2 text-black-500"
              }
            >
              les Pieces
            </Typography>
            <Typography
              className={
                "text-[12px] bg-gray-200 my-2 rounded text-black w-[160px] hover:underline hover:ml-2 transition-all duration-300 py-2 pl-2 text-black-500"
              }
            >
              Structures
            </Typography>
            <Typography
              className={
                "text-[12px] bg-gray-200 my-2 rounded text-black w-[160px] hover:underline hover:ml-2 transition-all duration-300 py-2 pl-2 text-black-500"
              }
            >
              Perssones
            </Typography>
          </Box>
        </Box>
        <Button>
          <Logout className="text-gray-700 w-12" fontSize="small" />
          Deconexion
        </Button>
      </Box>
    </>
  );
};
export default AdminSideBar;
