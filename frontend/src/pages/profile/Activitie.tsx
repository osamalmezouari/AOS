import { AccountBalance, Hiking, Logout, MedicalInformation, MenuOutlined, PollOutlined, TravelExploreOutlined, Widgets } from "@mui/icons-material";
import { Avatar, Box, Button, Container, Grid, Typography } from "@mui/material";
import Marriage from "../../component/forms/marriage";

const Activitie = () => {
    return <Box className="">
        <Box>
            <Box className="w-24 h-screen absolute bg-gray-100 text-white flex flex-col items-center py-6 gap-6 justify-between">
                <Box>
                    <Avatar src="D:\Oussama\PROJECTS\AOS\frontend\public\assets\images\logo.jpg" />
                </Box>
                <Box className={'flex flex-col gap-2 text-gray-600'}>
                    <Box className={'bg-mainBleu px-4 py-2 rounded hover:bg-yellow duration-500 text-white transition cursor-pointer'} ><AccountBalance fontSize="small" /></Box>
                    <Box className={'bg-mainBleu px-4 py-2 rounded hover:bg-yellow duration-500 text-white transition  cursor-pointer'}><MedicalInformation fontSize="small" /></Box>
                    <Box className={'bg-mainBleu px-4 py-2 rounded hover:bg-yellow duration-500 text-white transition cursor-pointer'}><Hiking fontSize="small" /></Box>
                    <Box className={'bg-mainBleu px-4 py-2 rounded hover:bg-yellow duration-500 text-white transition cursor-pointer'}><TravelExploreOutlined fontSize="small" /></Box>
                </Box>
                <Box>
                    <Logout className="text-gray-700 w-12" fontSize="small" />
                </Box>
            </Box>
            <Box className="pl-32 pr-16 w-full  fixed flex gap-2 h-24 top-0 items-center justify-between border-2">
                <MenuOutlined />
                <Box className={'flex gap-x-2 font-main items-center'}>
                    <Avatar src="frontend\public\assets\images\maroc.png" />
                    <Box>
                        <Typography>Oussama lmezouari</Typography>
                    </Box>
                </Box>
            </Box>
            <Container maxWidth='lg' className="pt-28 flex items-center h-[90vh]">
                <Grid container gap={2}>
                    <Box className={'w-full mb-4 mt-4'}>
                        <Box className={'flex items-center gap-2'} ><AccountBalance fontSize="large" className="bg-mainBleu text-white p-2 rounded" />
                            <Typography className="font-main capitalize text-2xl text-mainBleu ">
                                Aides financières
                            </Typography>
                        </Box>
                    </Box>
                    <Grid container className="h-[55vh]  gap-x-1 gap-y-1">
                        <Grid item xs={12} sm={6} md={4} lg={5.8} className="p-2 flex items-end justify-end w-full h-full max-h-[200px] shadow-md bg-makah bg-cover bg-center">
                            <Button style={{ letterSpacing: "4px" }} className="bg-mainBleu w-max h-max text-white duration-500 hover:bg-yellow p-2 font-main font-bold text-2xl capitalize">
                                {'Pelerinage'}
                            </Button>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={5.8} className="p-2 flex items-end justify-end w-full h-full max-h-[200px] shadow-md bg-makah bg-cover bg-center">
                            <Button style={{ letterSpacing: "4px" }} className="bg-mainBleu w-max h-max text-white duration-500 hover:bg-yellow p-2 font-main font-bold text-2xl capitalize">
                                {'Pelerinage'}
                            </Button>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={5.8} className="p-2 flex items-end justify-end w-full h-full max-h-[200px] shadow-md bg-makah bg-cover bg-center">
                            <Button style={{ letterSpacing: "4px" }} className="bg-mainBleu w-max h-max text-white duration-500 hover:bg-yellow p-2 font-main font-bold text-2xl capitalize">
                                {'Pelerinage'}
                            </Button>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={5.8} className="p-2 flex items-end justify-end w-full h-full max-h-[200px] shadow-md bg-makah bg-cover bg-center">
                            <Button style={{ letterSpacing: "4px" }} className="bg-mainBleu w-max h-max text-white duration-500 hover:bg-yellow p-2 font-main font-bold text-2xl capitalize">
                                {'Pelerinage'}
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>

        </Box>
    </Box>;
}
export default Activitie