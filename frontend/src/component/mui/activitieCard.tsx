import { Box, Grid, Typography } from "@mui/material"

const ActivitieCard = () => {
    return <>
    <Grid
            xs={5}
            xl={2.8}
            className="p-4 bg-mainBleu rounded text-white font-main hover:bg-yellow transform-all duration-500 text-center cursor-pointer"
          >
            <Box component={"div"} className="flex items-center gap-4">
              <Box className="bg-white bg-cover bg-center rounded bg-makah h-24 w-28 min-w-8">
                
              </Box>
              <Typography className="text-start font-main ">Social Loans Service</Typography>
            </Box>
          </Grid>
    </>
}
export default ActivitieCard