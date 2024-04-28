import * as React from "react";
import { Avatar, Box, Button, Container, Typography } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import {
  AppRegistration,
  Email,
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

  return (
    <>
      <Box className={"flex p-4 bg-mainBleu text-white justify-evenly "}>
        <Typography className={"flex gap-2"}>
          <Email></Email>
          <p>Micmianh@gmail.com</p>
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
      <Box className="bg-white w-screen py-2 drop-shadow shadow-secendBleu">
        <Container maxWidth="lg">
          <Box className={"flex items-center gap-2 justify-between w-full"}>
            <Avatar
              sx={{ width: 54, height: 54 }}
              src={"/public/assets/images/logo.png"}
              className={"bg-logo"}
            ></Avatar>
            <Box
              className={"flex items-center gap-8 justify-between capitalize"}
            >
              <div>
                <Button
                  aria-controls="fade-menu1"
                  aria-haspopup="true"
                  onClick={handleClick1}
                  endIcon={<ExpandMore />}
                  className={
                    "capitalize font-main text-black hover:bg-yellow hover:text-white font-bold transition-all duration-700 "
                  }
                >
                  Activités de loisirs
                </Button>
                <Menu
                  id="fade-menu1"
                  anchorEl={anchorEl1}
                  open={Boolean(anchorEl1)}
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
                  aria-controls="fade-menu2"
                  aria-haspopup="true"
                  onClick={handleClick2}
                  endIcon={<ExpandMore />}
                  className={
                    "capitalize font-main text-black hover:bg-yellow hover:text-white font-bold transition-all duration-700 "
                  }
                >
                  Aides financières
                </Button>
                <Menu
                  id="fade-menu2"
                  anchorEl={anchorEl2}
                  open={Boolean(anchorEl2)}
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
                  aria-controls="fade-menu3"
                  aria-haspopup="true"
                  onClick={handleClick3}
                  endIcon={<ExpandMore />}
                  className={
                    "capitalize font-main text-black hover:bg-yellow hover:text-white font-bold transition-all duration-700 "
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
                    "capitalize font-main text-black hover:bg-yellow hover:text-white font-bold transition-all duration-700 "
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
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={handleClose}>My account</MenuItem>
                  <MenuItem onClick={handleClose}>Logout</MenuItem>
                </Menu>
              </div>
            </Box>
            <Button
              className={
                "bg-mainBleu font-main text-white hover:bg-yellow transition-all duration-700 capitalize"
              }
              startIcon={<AppRegistration />}
            >
              inscription
            </Button>
            <Button
              className={
                "bg-mainBleu font-main text-white hover:bg-yellow transition-all duration-700 capitalize"
              }
              startIcon={<Login />}
            >
              se conecter
            </Button>
          </Box>
        </Container>
      </Box>
    </>
  );
};
export default Navbar;
