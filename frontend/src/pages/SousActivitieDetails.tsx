import { Button, Container, Typography } from "@mui/material"
import Navbar from "../component/navbar"
import { Send } from "@mui/icons-material"

const SousActivitieDetails = () => {
    return <>
        <Navbar />
        <Container>
        <Typography className="text-xl mt-[400px] flex items-center justify-between font-bold capitalize font-main text-start text-mainBleu underline rounded p-4 h-max">
          les Recents Centre disponible
          <Button endIcon={<Send />} className="min-w-[150px] h-12 bg-mainBleu capitalize font-main hover:bg-yellow text-white">Voir Tout</Butt>
        </Typography>
        </Container>
    </>
}
export default SousActivitieDetails