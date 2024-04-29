import * as React from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import {
  AppRegistration,
  Dehaze,
  Email,
  ExpandLess,
  ExpandMore,
  Facebook,
  Instagram,
  LinkedIn,
  Login,
  YouTube,
} from "@mui/icons-material";

const Navbar = () => {
  const [anchorEl1, setAnchorEl1] = React.useState<null | HTMLElement>(null);
  const [anchorEl2, setAnchorEl2] = React.useState<null | HTMLElement>(null);
  const [anchorEl3, setAnchorEl3] = React.useState<null | HTMLElement>(null);
  const [anchorEl4, setAnchorEl4] = React.useState<null | HTMLElement>(null);
  const [Activite1,setActivite1] = React.useState<boolean>(false)
  const [Activite2,setActivite2] = React.useState<boolean>(false)
  const [Activite3,setActivite3] = React.useState<boolean>(false)
  const [Activite4,setActivite4] = React.useState<boolean>(false)
  const [Nav,setNav] = React.useState<string>("")
  const [ToggleNavBar,SetToggleNavBar] = React.useState<boolean>(false)
  const handleClick1 = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl1(event.currentTarget);
  };
  const handleClick2 = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl2(event.currentTarget);
  };
  const handleClick3 = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl3(event.currentTarget);
  };
  const handleClick4 = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl4(event.currentTarget);
  };


  const handleClose = () => {
    setAnchorEl1(null);
    setAnchorEl2(null);
    setAnchorEl3(null);
    setAnchorEl4(null);
  };

  React.useEffect(()=>{
    const screenWidth : number = window.innerWidth
    if(screenWidth === 1200 || screenWidth <= 1200 ){
      setNav('small')
    }
    else if (screenWidth  >= 1200 ){
      setNav('large')
    }
    console.log(Nav)
  },[Nav])
  return (
    <>
      <Box className={`flex p-4 bg-mainBleu text-white justify-evenly relative z-20`}>
        <Typography className={"flex gap-2"}>
          <Email></Email>
          <p className="font-main">Micmianh@Gmail.mic.ma</p>
        </Typography>
        <Box className={"flex gap-2"}>
          <Facebook
            className={
              "hover:text-yellow cursor-pointer transition-all duration-500 "
            }
          ></Facebook>
          <Instagram
            className={
              "hover:text-yellow cursor-pointer transition-all duration-500 "
            }
          ></Instagram>
          <LinkedIn
            className={
              "hover:text-yellow cursor-pointer transition-all duration-500 "
            }
          ></LinkedIn>
          <YouTube
            className={
              "hover:text-yellow cursor-pointer transition-all duration-500 "
            }
          ></YouTube>
        </Box>
      </Box>
      <Box className={`bg-white py-2 drop-shadow shadow-secendBleu ${Nav === "large" ? "" : "hidden"}`}>
        <Container maxWidth={"lg"}>
          <Box className={"flex items-center gap-2 justify-between w-full"}>
            {/*<Avatar
              sx={{ width: 54, height: 54 }}
              src={"/public/assets/images/logo.png"}
              className={"bg-logo"}
          ></Avatar>*/}
          <Box className={'w-[200px] h-28 bg-pngfr bg-cover bg-center flex-grow-1'} ></Box>
            <Box
              className={"flex items-center gap-2 justify-between capitalize"}
            >
              <div>
                <Button
                  aria-controls="fade-menu1"
                  aria-haspopup="true"
                  onClick={handleClick1}
                  endIcon={<ExpandMore />}
                  className={
                    "capitalize w-max font-main text-black hover:bg-yellow hover:text-white font-bold transition-all duration-700 "
                  }
                >
                  Aides financières
                </Button>
                <Menu
                  id="fade-menu1"
                  anchorEl={anchorEl1}
                  open={Boolean(anchorEl1)}
                  onClose={handleClose}
                  TransitionComponent={Fade}
                >
                  <MenuItem onClick={handleClose} color={"font-bold"}>
                    Social Loans Service
                  </MenuItem>
                  <MenuItem onClick={handleClose}>Retirement Grant</MenuItem>
                  <MenuItem onClick={handleClose}>
                    Bourse de pèlerinage
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    Allocation de retraite
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    Aide financière pour les cas médicaux graves
                  </MenuItem>
                  <MenuItem onClick={handleClose}>Condoléances </MenuItem>
                </Menu>
              </div>
              <div>
                <Button
                  aria-controls="fade-menu2"
                  aria-haspopup="true"
                  onClick={handleClick2}
                  endIcon={<ExpandMore />}
                  className={
                    "capitalize w-max font-main text-black hover:bg-yellow hover:text-white font-bold transition-all duration-700 "
                  }
                >
                  Activités de loisirs
                </Button>
                <Menu
                  id="fade-menu2"
                  anchorEl={anchorEl2}
                  open={Boolean(anchorEl2)}
                  onClose={handleClose}
                  TransitionComponent={Fade}
                >
                  <MenuItem onClick={handleClose}>
                    Centres de soutien en langue étrangère
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    Voyages, sorties, camps d'été et activités sportives
                  </MenuItem>
                </Menu>
              </div>
              <div>
                <Button
                  aria-controls="fade-menu3"
                  aria-haspopup="true"
                  onClick={handleClick3}
                  endIcon={<ExpandMore />}
                  className={
                    "capitalize w-max font-main text-black hover:bg-yellow hover:text-white font-bold transition-all duration-700 "
                  }
                >
                  Garantie et aide
                </Button>
                <Menu
                  id="fade-menu3"
                  anchorEl={anchorEl3}
                  open={Boolean(anchorEl3)}
                  onClose={handleClose}
                  TransitionComponent={Fade}
                >
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={handleClose}>My account</MenuItem>
                  <MenuItem onClick={handleClose}>Logout</MenuItem>
                </Menu>
              </div>
              <div>
                <Button
                  aria-controls="fade-menu4"
                  aria-haspopup="true"
                  onClick={handleClick4}
                  endIcon={<ExpandMore />}
                  className={
                    "capitalize w-max font-main text-black hover:bg-yellow hover:text-white font-bold transition-all duration-700 "
                  }
                >
                  Activités culturelles
                </Button>
                <Menu
                  id="fade-menu4"
                  anchorEl={anchorEl4}
                  open={Boolean(anchorEl4)}
                  onClose={handleClose}
                  TransitionComponent={Fade}
                >
                  <MenuItem onClick={handleClose}>
                    Centres de soutien en langue étrangère
                  </MenuItem>
                  <MenuItem onClick={handleClose}>Centres de vacances</MenuItem>
                </Menu>
              </div>
            </Box>
            <Box className={"flex gap-x-2"}>
              <Button
                className={
                  "bg-mainBleu w-max font-main text-white hover:bg-yellow transition-all duration-700 capitalize"
                }
                startIcon={<AppRegistration />}
              >
                inscription
              </Button>
              <Button
                className={
                  "bg-mainBleu w-max font-main text-white hover:bg-yellow transition-all duration-700 capitalize"
                }
                startIcon={<Login />}
              >
                se conecter
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>

        {/* small navs */}
              
      <Box className={`bg-white py-2 drop-shadow shadow-secendBleu relative z-20 ${Nav === "small" ? "" : "hidden"}`}>
        <Container maxWidth={"lg"}>
          <Box className={"flex items-center gap-2 justify-between w-full"}>
          <Box className={'w-[300px] h-[60px] bg-pngfr bg-cover bg-center flex-grow-1'} ></Box>
          <Box className={"flex gap-x-2"}>
              <Button
                className={
                  "bg-mainBleu w-max font-main text-white hover:bg-yellow transition-all duration-700 capitalize"
                }
                startIcon={<AppRegistration />}
              >
                inscription
              </Button>
              <Button
                className={
                  "bg-mainBleu w-max font-main text-white hover:bg-yellow transition-all duration-700 capitalize"
                }
                startIcon={<Login />}
              >
                se conecter
              </Button>
              <Button onClick={()=>SetToggleNavBar(!ToggleNavBar)} size="large" className="bg-mainBleu text-white hover:bg-yellow duration-500 transition-all">
                <Dehaze />
              </Button>
            </Box>
          

          </Box>
        </Container>
      </Box>
      <Box  className={`p-6 mt-1 bg-myGray absolute w-full z-10  ${ToggleNavBar ? "top-[120px]" : "-top-[1000px] transition-all duration-300"}`}>
        <Typography component={'p'} onClick={()=>setActivite1(!Activite1)} className="flex items-center justify-between font-main font-bold w-full text-start p-2 hover:bg-mainBleu hover:text-white transition-all duration-200 hover:pl-6 cursor-pointer rounded" >
        Aides financières
        <Button className="text-white" >{Activite1 ? <ExpandLess /> : <ExpandMore/>}</Button>
        </Typography>
        <Box className={`px-10 flex flex-col ${Activite1 ? "" : "hidden" }`}>
        <Button className="w-max bg-main font-main capitalize">
            Social Loans Service
            </Button>
            <Button className="w-max bg-main font-main capitalize">
            Social Loans Service
            </Button>
            <Button className="w-max bg-main font-main capitalize">
            Social Loans Service
            </Button>
        </Box>
        <Typography component={'p'} onClick={()=>setActivite2(!Activite2)} className="flex items-center justify-between font-main font-bold w-full text-start p-2 hover:bg-mainBleu hover:text-white transition-all duration-200 hover:pl-6 cursor-pointer rounded" >
        Aides financières
        <Button className="text-white" >{Activite4 ? <ExpandLess /> : <ExpandMore/>}</Button>
        </Typography>
        <Box className={`px-10 flex flex-col ${Activite2 ? "" : "hidden" }`}>
            <Button className="w-max bg-main font-main capitalize">
            Social Loans Service
            </Button>
            <Button className="w-max bg-main font-main capitalize">
            Social Loans Service
            </Button>
            <Button className="w-max bg-main font-main capitalize">
            Social Loans Service
            </Button>
        </Box>
        <Typography component={'p'} onClick={()=>setActivite3(!Activite3)} className="flex items-center justify-between font-main font-bold w-full text-start p-2 hover:bg-mainBleu hover:text-white transition-all duration-200 hover:pl-6 cursor-pointer rounded" >
        Aides financières
        <Button className="text-white" >{Activite3 ? <ExpandLess /> : <ExpandMore/>}</Button>
        </Typography>
        <Box className={`px-10 flex flex-col ${Activite3 ? "" : "hidden" }`}>
        <Button className="w-max bg-main font-main capitalize">
            Social Loans Service
            </Button>
            <Button className="w-max bg-main font-main capitalize">
            Social Loans Service
            </Button>
            <Button className="w-max bg-main font-main capitalize">
            Social Loans Service
            </Button>
        </Box>
        <Typography component={'p'} onClick={()=>setActivite4(!Activite4)} className="flex items-center justify-between font-main font-bold w-full text-start p-2 hover:bg-mainBleu hover:text-white transition-all duration-200 hover:pl-6 cursor-pointer rounded" >
        Aides financières 
        <Button className="text-white" >{Activite4 ? <ExpandLess /> : <ExpandMore/>}</Button>
        </Typography>
        <Box className={`px-10 flex flex-col ${Activite4 ? "" : "hidden" }`}>
        <Button className="w-max bg-main font-main capitalize">
            Social Loans Service
            </Button>
            <Button className="w-max bg-main font-main capitalize">
            Social Loans Service
            </Button>
            <Button className="w-max bg-main font-main capitalize">
            Social Loans Service
            </Button>
        </Box>
      </Box>   
    </>
  );
};
export default Navbar;
