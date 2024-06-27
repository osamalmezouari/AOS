import * as React from "react";
import { Avatar, Box, Button, Container, Typography } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import {
  AccountCircle,
  AppRegistration,
  Dehaze,
  ExpandLess,
  ExpandMore,
  Login,
} from "@mui/icons-material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  ActivitieWithSousActivities,
  SingleSousActivities,
} from "../interfaces/types.tsx";
import { PORT } from "../../env.ts";

const Navbar = () => {
  const navigate = useNavigate();
  const [anchorEl1, setAnchorEl1] = React.useState<null | HTMLElement>(null);
  const [anchorEl2, setAnchorEl2] = React.useState<null | HTMLElement>(null);
  const [anchorEl3, setAnchorEl3] = React.useState<null | HTMLElement>(null);
  const [anchorEl4, setAnchorEl4] = React.useState<null | HTMLElement>(null);
  const [Activite1, setActivite1] = React.useState<boolean>(false);
  const [Activite2, setActivite2] = React.useState<boolean>(false);
  const [Activite3, setActivite3] = React.useState<boolean>(false);
  const [Activite4, setActivite4] = React.useState<boolean>(false);
  const [Nav, setNav] = React.useState<string>("");
  const [ToggleNavBar, SetToggleNavBar] = React.useState<boolean>(false);
  const [NavbarData, setNavbarData] = React.useState<{
    loading: boolean;
    error: string;
    data: ActivitieWithSousActivities[];
  }>({
    loading: true,
    error: "",
    data: [],
  });
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
  React.useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth <= 900) {
        setNav("small");
      } else {
        setNav("large");
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  React.useEffect(() => {
    const fetchNavbar = async () => {
      try {
        const res = await axios.get(`http://localhost:${PORT}/activite`);
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
  const Json: string = localStorage.getItem("user");
  const user = JSON.parse(Json);
  return (
    <>
      <Box
        component={"div"}
        style={{ backgroundColor: "#F5FCFE" }}
        className={`flex p-4  bg-secendBlue h-24 text-white justify-center relative z-20 border-b-8 border-mainBleu`}
      >
        <Box
          component={"img"}
          onClick={() => navigate("/AOS", { replace: true })}
          src={
            "https://github.com/osamalmezouari/Mic-Minah/blob/master/frontend/public/assets/images/unnamed-removebg-preview.png?raw=true"
          }
          className={"bg-center bg-contain hover:cursor-pointer "}
        />
        <Box />
      </Box>
      <Box
        className={`bg-white py-6 drop-shadow shadow-secendBleu ${
          Nav === "large" ? "" : "hidden"
        }`}
      >
        <Container maxWidth={"lg"}>
          <Box className={"flex items-center gap-2 justify-between w-full"}>
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
                  {NavbarData.data.length > 0
                    ? NavbarData.data[2].SousActivities.map(
                        (singleSousActivitie: SingleSousActivities) => {
                          return (
                            <MenuItem
                              key={singleSousActivitie.id}
                              onClick={() => {
                                navigate(
                                  `/AOS/SousActivitie/${singleSousActivitie.id}`,
                                  { replace: true }
                                );
                                handleClose();
                              }}
                              color={"font-bold"}
                            >
                              {singleSousActivitie.nomFr}
                            </MenuItem>
                          );
                        }
                      )
                    : ""}
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
                  {NavbarData.data.length > 0
                    ? NavbarData.data[1].SousActivities.map(
                        (singleSousActivitie) => {
                          return (
                            <MenuItem
                              key={singleSousActivitie.id}
                              onClick={() => {
                                navigate(
                                  `/AOS/SousActivitie/${singleSousActivitie.id}`,
                                  { replace: true }
                                );
                                handleClose();
                              }}
                              color={"font-bold"}
                            >
                              {singleSousActivitie.nomFr}
                            </MenuItem>
                          );
                        }
                      )
                    : ""}
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
                  {NavbarData.data.length > 0
                    ? NavbarData.data[3].SousActivities.map(
                        (singleSousActivitie) => {
                          return (
                            <MenuItem
                              key={singleSousActivitie.id}
                              onClick={() => {
                                navigate(
                                  `/AOS/SousActivitie/${singleSousActivitie.id}`,
                                  { replace: true }
                                );
                                handleClose();
                              }}
                              color={"font-bold"}
                            >
                              {singleSousActivitie.nomFr}
                            </MenuItem>
                          );
                        }
                      )
                    : ""}
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
                  {NavbarData.data.length > 0
                    ? NavbarData.data[0].SousActivities.map(
                        (singleSousActivitie) => {
                          return (
                            <MenuItem
                              key={singleSousActivitie.id}
                              onClick={() => {
                                navigate(
                                  `/AOS/SousActivitie/${singleSousActivitie.id}`,
                                  { replace: true }
                                );
                                handleClose();
                              }}
                              color={"font-bold"}
                            >
                              {singleSousActivitie.nomFr}
                            </MenuItem>
                          );
                        }
                      )
                    : ""}
                </Menu>
              </div>
            </Box>
            {!user ? (
              <Box className={"flex gap-x-2"}>
                <Button
                  className={
                    "bg-mainBleu w-max font-main text-white hover:bg-yellow transition-all duration-700 capitalize"
                  }
                  startIcon={<AppRegistration />}
                  onClick={() => navigate(`/AOS/Inscreption`)}
                >
                  Demande d'Inscreption
                </Button>
                <Button
                  className={
                    "bg-mainBleu w-max font-main text-white hover:bg-yellow transition-all duration-700 capitalize"
                  }
                  onClick={() => navigate(`/AOS/SeConecter`)}
                  startIcon={<Login />}
                >
                  se conecter
                </Button>
              </Box>
            ) : (
              <Button
                onClick={() =>
                  navigate(`/AOS/Profile/dashboard`, { replace: true })
                }
                startIcon={<AccountCircle />}
                className={
                  "capitalize w-max font-main text-white bg-mainBleu hover:bg-yellow hover:text-white font-bold transition-all duration-700 "
                }
              >
                Espace Personel
              </Button>
            )}
          </Box>
        </Container>
      </Box>
      {/* small navs */}
      <Box
        className={`bg-white py-2 drop-shadow shadow-secendBleu relative z-20 ${
          Nav === "small" ? "" : "hidden"
        }`}
      >
        <Container maxWidth={"lg"}>
          <Box className={" w-full flex justify-between"}>
            <Box className={"flex gap-x-2"}>
              {!user && (
                <Button
                  className={
                    "bg-mainBleu w-max font-main text-white hover:bg-yellow transition-all duration-700 capitalize"
                  }
                  onClick={() => navigate(`/AOS/Inscreption`)}
                  startIcon={<AppRegistration />}
                >
                  Demande d'Inscreption
                </Button>
              )}
              {!user && (
                <Button
                  className={
                    "bg-mainBleu w-max font-main text-white hover:bg-yellow transition-all duration-700 capitalize"
                  }
                  startIcon={<Login />}
                  onClick={() => navigate(`/AOS/SeConecter`)}
                >
                  se conecter
                </Button>
              )}
            </Box>
            <Box>
              <Button
                onClick={() => SetToggleNavBar(!ToggleNavBar)}
                size="small"
                className="bg-mainBleu text-white hover:bg-yellow duration-500 transition-all"
              >
                <Dehaze />
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
      <Box
        className={`p-6 mt-6 bg-myGray absolute w-full z-10  ${
          ToggleNavBar
            ? "top-[120px]"
            : "-top-[1000px] transition-all duration-300"
        }`}
      >
        <Typography
          component={"p"}
          onClick={() => setActivite1(!Activite1)}
          className="flex items-center justify-between font-main font-bold w-full text-start p-2 hover:bg-mainBleu hover:text-white transition-all duration-200 hover:pl-6 cursor-pointer rounded"
        >
          Aides financières
          <Button className="text-white">
            {Activite1 ? <ExpandLess /> : <ExpandMore />}
          </Button>
        </Typography>
        <Box className={`px-5 flex flex-col ${Activite1 ? "" : "hidden"}`}>
          {NavbarData.data.length > 0
            ? NavbarData.data[2].SousActivities.map((singleSousActivitie) => {
                return (
                  <Button
                    className="mr-auto w-max bg-main font-main capitalize"
                    key={singleSousActivitie.id}
                    onClick={() => {
                      navigate(`/AOS/SousActivitie/${singleSousActivitie.id}`, {
                        replace: true,
                      });
                      handleClose();
                    }}
                  >
                    {singleSousActivitie.nomFr}
                  </Button>
                );
              })
            : ""}
        </Box>
        <Typography
          component={"p"}
          onClick={() => setActivite2(!Activite2)}
          className="flex items-center justify-between font-main font-bold w-full text-start p-2 hover:bg-mainBleu hover:text-white transition-all duration-200 hover:pl-6 cursor-pointer rounded"
        >
          Activities des loisirs
          <Button className="text-white">
            {Activite4 ? <ExpandLess /> : <ExpandMore />}
          </Button>
        </Typography>
        <Box className={`px-10 flex flex-col ${Activite2 ? "" : "hidden"}`}>
          {NavbarData.data.length > 0
            ? NavbarData.data[1].SousActivities.map((singleSousActivitie) => {
                return (
                  <Button
                    className="mr-auto w-max bg-main font-main capitalize"
                    key={singleSousActivitie.id}
                    onClick={() => {
                      navigate(`/AOS/SousActivitie/${singleSousActivitie.id}`, {
                        replace: true,
                      });
                      handleClose();
                    }}
                  >
                    {singleSousActivitie.nomFr}
                  </Button>
                );
              })
            : ""}
        </Box>
        <Typography
          component={"p"}
          onClick={() => setActivite3(!Activite3)}
          className="flex items-center justify-between font-main font-bold w-full text-start p-2 hover:bg-mainBleu hover:text-white transition-all duration-200 hover:pl-6 cursor-pointer rounded"
        >
          Garantie Et Aide
          <Button className="text-white">
            {Activite3 ? <ExpandLess /> : <ExpandMore />}
          </Button>
        </Typography>
        <Box className={`px-10 flex flex-col ${Activite3 ? "" : "hidden"}`}>
          {NavbarData.data.length > 0
            ? NavbarData.data[3].SousActivities.map((singleSousActivitie) => {
                return (
                  <Button
                    className="mr-auto w-max bg-main font-main capitalize"
                    key={singleSousActivitie.id}
                    onClick={() => {
                      navigate(`/AOS/SousActivitie/${singleSousActivitie.id}`, {
                        replace: true,
                      });
                      handleClose();
                    }}
                  >
                    {singleSousActivitie.nomFr}
                  </Button>
                );
              })
            : ""}
        </Box>
        <Typography
          component={"p"}
          onClick={() => setActivite4(!Activite4)}
          className="flex items-center justify-between font-main font-bold w-full text-start p-2 hover:bg-mainBleu hover:text-white transition-all duration-200 hover:pl-6 cursor-pointer rounded"
        >
          Activities Culturelles
          <Button className="text-white">
            {Activite4 ? <ExpandLess /> : <ExpandMore />}
          </Button>
        </Typography>
        <Box className={`px-10 flex flex-col ${Activite4 ? "" : "hidden"}`}>
          {NavbarData.data.length > 0
            ? NavbarData.data[0].SousActivities.map((singleSousActivitie) => {
                return (
                  <Button
                    className="mr-auto w-max bg-main font-main capitalize"
                    key={singleSousActivitie.id}
                    onClick={() => {
                      navigate(`/AOS/SousActivitie/${singleSousActivitie.id}`, {
                        replace: true,
                      });
                      handleClose();
                    }}
                  >
                    {singleSousActivitie.nomFr}
                  </Button>
                );
              })
            : ""}
        </Box>
      </Box>
    </>
  );
};
export default Navbar;
