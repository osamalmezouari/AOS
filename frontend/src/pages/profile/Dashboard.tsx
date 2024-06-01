import { AccountBalance, Hiking, Logout, MedicalInformation, MenuBook, MenuOutlined, Poll, PollOutlined, TravelExploreOutlined, Widgets } from "@mui/icons-material";
import { Avatar, Box, Container, Grid, Typography } from "@mui/material";
import LatestOrdersTable from "./table";
import StickyHeadTable from "./table";
import PolarAreaChart from "./chart";

const Profile = () => {
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
            <Container maxWidth='lg' className="pt-28">
                <Grid container gap={2}>
                    <Box className={'w-full mb-4 mt-4'}>
                    <Box className={'flex items-center gap-2'} ><PollOutlined fontSize="large" className="bg-mainBleu text-white p-2 rounded" />
                    <Typography className="font-secend capitalize text-2xl text-mainBleu ">
                        Suivation de demandes
                    </Typography>
                    </Box>
                    </Box>
                    <Grid container gap={1}>
                        <Grid item xs={12} sm={6} md={4} lg={2.8} className="w-full h-32 rounded shadow-md ">
                            <Typography className="text-white font-main font-bold flex items-center justify-center h-full bg-green-400">
                               {10} Approuvées
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={2.8} className="w-full h-32 rounded shadow-md ">
                            <Typography className="text-white font-main font-bold flex items-center justify-center h-full bg-red-400">
                               {10} Refusées 
                            </Typography>
                        </Grid> 
                        <Grid item xs={12} sm={6} md={4} lg={2.8} className="w-full h-32 rounded shadow-md ">
                            <Typography className="text-white font-main font-bold flex items-center justify-center h-full bg-yellow">
                               {10}  Documents requis
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={2.8} className="w-full h-32 rounded shadow-md ">
                            <Typography className="text-white font-main font-bold flex items-center justify-center h-full bg-blue-400">
                               {10}  En traitement
                            </Typography>
                        </Grid>
                    </Grid>
                    <Box className={'w-full my-2 '}>
                        <Box className={'flex items-center gap-2'} ><Widgets fontSize="large" className="bg-mainBleu text-white p-2 rounded" /><Typography className="font-secend capitalize text-2xl text-mainBleu ">Table des demandes</Typography></Box>
                    </Box>
                    <Grid item xs={12} sm={12} md={12} lg={6}>
                        <StickyHeadTable />
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={5.5} className="m-auto">
                        <PolarAreaChart />
                    </Grid>
                </Grid>
            </Container>

        </Box>
    </Box>;
};

export default Profile;