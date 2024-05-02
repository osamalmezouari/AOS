import { Copyright } from "@mui/icons-material"
import { Box, Typography } from "@mui/material"

const Footer = () => {
    return <>
        <Box className="h-24 bg-myGray p-2 gap-x-4 mt-24 w-full m-auto flex items-center justify-center">
              <div className="bg-logo  min-w-10 h-16 bg-center bg-cover"></div>
              <Typography className="font-main w-max">
                Association des Affaires Sociales du Ministère de l'Industrie <Copyright /> {new Date().getFullYear()}
              </Typography>
      </Box>
    </>
}
export default Footer