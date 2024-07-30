import {
  AccountBalance,
  Cabin,
  Hiking,
  Logout,
  MedicalInformation,
  SpaceDashboard,
} from "@mui/icons-material";
import { Avatar, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const SideBar = () => {
  const navigate = useNavigate();
  const Deconexion = () => {
    localStorage.clear();
    navigate("/Aos", { replace: true });
  };
  return (
    <>
      <Box className="w-24 h-screen z-20 absolute bg-gray-100 text-white flex flex-col items-center py-6 gap-6 justify-between">
        <Box>
          <Avatar
              component={'div'}
            className="w-12 h-12"
            onClick={()=>navigate("/Aos")}
              src={'https://github.com/osamalmezouari/AOS/raw/master/frontend/public/assets/images/logo.jpg'}
          >
          </Avatar>
        </Box>
        <Box className={"flex flex-col gap-2 text-gray-600"}>
          <Box
            onClick={() =>
              navigate("/AOS/Profile/dashboard", { replace: true })
            }
            className={
              "bg-mainBleu px-4 py-2 rounded hover:bg-yellow duration-500 text-white transition cursor-pointer"
            }
          >
            <SpaceDashboard fontSize="small" />
          </Box>
          <Box
            onClick={() =>
              navigate("/AOS/Profile/Activitie/1", { replace: true })
            }
            className={
              "bg-mainBleu px-4 py-2 rounded hover:bg-yellow duration-500 text-white transition cursor-pointer"
            }
          >
            <AccountBalance fontSize="small" />
          </Box>
          <Box
            onClick={() =>
              navigate("/AOS/Profile/Activitie/3", { replace: true })
            }
            className={
              "bg-mainBleu px-4 py-2 rounded hover:bg-yellow duration-500 text-white transition  cursor-pointer"
            }
          >
            <MedicalInformation fontSize="small" />
          </Box>
          <Box
            onClick={() =>
              navigate("/AOS/Profile/Activitie/2", { replace: true })
            }
            className={
              "bg-mainBleu px-4 py-2 rounded hover:bg-yellow duration-500 text-white transition cursor-pointer"
            }
          >
            <Hiking fontSize="small" />
          </Box>
          <Box
            onClick={() =>
              navigate("/AOS/Profile/Activitie/4", { replace: true })
            }
            className={
              "bg-mainBleu px-4 py-2 rounded hover:bg-yellow duration-500 text-white transition cursor-pointer"
            }
          >
            <Cabin fontSize="small" />
          </Box>
        </Box>
        <Box onClick={()=>Deconexion()}>
          <Logout className="text-gray-700 w-12" fontSize="small" />
        </Box>
      </Box>
    </>
  );
};
export default SideBar;
