import { CircleNotifications } from "@mui/icons-material";
import { Avatar, Box , Typography } from "@mui/material";

const Header = () => {
  const userDataString = localStorage.getItem("user");
  const JSONDATA = userDataString ? JSON.parse(userDataString) : null;
  const user = JSONDATA;
  return (
    <>
      <Box className="pl-32 bg-white pr-16 w-full  fixed flex gap-2 h-24 top-0 items-center justify-between border-2">
        <Avatar/>
        <Box className={"flex gap-x-4 font-main items-center"}>
        <Box className={'flex item-center justify-center gap-2'}>
        <Box className="bg-mainBleu rounded-full text-center px-1 py-1 hover:bg-yellow font-bold duration-500 transition-all cursor-pointer text-white w-8 h-8">Fr</Box>
        <Box className="bg-mainBleu rounded-full text-center px-1 py-1 hover:bg-yellow duration-500 transition-all cursor-pointer text-white w-8 h-8">
          <CircleNotifications />
        </Box>
          </Box>
          
          <Box className={"flex gap-x-2 font-main items-center"}>
            <Avatar src="frontend\public\assets\images\1.png"  alt={user?.nom_fr.substring(0,1).toUpperCase()} className="w-8 h-8 bg-makah" />
            <Typography className="font-main text-[16px]">{user?.nom_fr} {user.prenom_fr}</Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default Header;
