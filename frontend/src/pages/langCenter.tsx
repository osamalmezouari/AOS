import {
  Autocomplete,
  Box,
  Button,
  Container,
  Grid,
  Pagination,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Navbar from "../component/navbar";
import { Copyright, Search } from "@mui/icons-material";
import MultiActionAreaCard from "../component/mui/MultiActionAreaCard";
import Footer from "../component/footer";

const LangCenters = () => {
  return (
    <>
      <Navbar />
      <Container>
        <Typography className="text-xl mt-20 mb-5 flex items-center justify-between font-bold capitalize font-main text-start text-mainBleu underline rounded px-4 h-max">
          Notre contres des languges :
        </Typography>
        <Typography className="text-xl px-4 flex font-normal items-center justify-between capitalize font-main text-start text-black rounded max-w-[1000px] h-max">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis
          quidem odit rem eius molestiae fuga illum hic nostrum itaque eum
          cumque deleniti voluptate, pariatur ullam veniam nobis! Harum,
          repellat vel. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Similique fugit eaque assumenda labore odit. Asperiores corrupti velit
          est natus nobis exercitationem temporibus perspiciatis itaque.
          Quisquam tempore animi numquam! Alias, provident.
        </Typography>
        <Box
          component={"div"}
          className="h-16 flex gap-x-2 items-center justify-between px-2  bg-mainBleu mt-12 rounded max-w-[620px] ml-auto"
        >
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={top100Films}
            className="bg-white border-0 rounded"
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Type" />}
          />
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={top100Films}
            className="bg-white border-0 rounded"
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Vile" />}
          />
          <Button
            startIcon={<Search />}
            className="flex item-center bg-yellow text-white justify-center min-h-14"
          ></Button>
        </Box>
        <Box>
          <Container className="mt-20" maxWidth={"lg"}>
            <Grid
              container
              justifyContent={"space-between"}
              sx={{ flexGrow: 1 }}
              className=" gap-y-6 mt-4 mb-6"
            >
              <MultiActionAreaCard />
              <MultiActionAreaCard />
              <MultiActionAreaCard />
              <MultiActionAreaCard />
              <MultiActionAreaCard />
              <MultiActionAreaCard />
              <MultiActionAreaCard />
              <MultiActionAreaCard />
              <MultiActionAreaCard />
            </Grid>
          </Container>
        </Box>
        <Stack spacing={2} className="flex items-center mb-20">
          <Pagination count={10} />
        </Stack>
      </Container>
      <Footer />
    </>
  );
};
export default LangCenters;

const top100Films = [
  { label: "The Shawshank Redemption", year: 1994 },
  { label: "The Godfather", year: 1972 },
  { label: "The Godfather: Part II", year: 1974 },
  { label: "The Dark Knight", year: 2008 },
  { label: "12 Angry Men", year: 1957 },
  { label: "Schindler's List", year: 1993 },
  { label: "Pulp Fiction", year: 1994 },
  {
    label: "The Lord of the Rings: The Return of the King",
    year: 2003,
  },
  { label: "The Good, the Bad and the Ugly", year: 1966 },
  { label: "Fight Club", year: 1999 },
  {
    label: "The Lord of the Rings: The Fellowship of the Ring",
    year: 2001,
  },
  {
    label: "Star Wars: Episode V - The Empire Strikes Back",
    year: 1980,
  },
];
