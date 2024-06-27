import React, { useEffect, useState } from "react";
import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Container,
  CssBaseline,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { ErrorOutlineRounded, Verified } from "@mui/icons-material";
import axios from "axios";
import { useParams } from "react-router-dom";
import Header from "../../../component/header.tsx";
import AdminSideBar from "../../../component/adminSidebar.tsx";
import { PORT } from "../../../../env.ts";

const FormOne: React.FC = () => {
  const { demandeId, personelId, sousActivitieId } = useParams();
  const [sentStatus, setSentStatus] = useState<{
    success: boolean;
    inprogress: boolean;
    error: string;
    alert: string;
  }>({
    success: false,
    inprogress: false,
    error: "",
    alert: "",
  });
  const [formState, setFormState] = useState<{
    observation: string;
    Status: string;
    montant: number;
  }>({
    observation: "",
    Status: "",
    montant: 0,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setSentStatus({
      success: false,
      inprogress: false,
      error: "",
      alert: "",
    });
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setSentStatus({
        inprogress: true,
        success: false,
        error: "",
        alert: "",
      });

      const response = await axios.patch(
        `http://localhost:${PORT}/sous-activite/AdminUpdate/${personelId}/${demandeId}/${sousActivitieId}`,
        formState
      );

      if (response.status === 200) {
        setSentStatus({
          success: true,
          error: "",
          inprogress: false,
          alert: "",
        });
      }
    } catch (error) {
      if (
        axios.isAxiosError(error) &&
        error.response &&
        error.response.status === 400
      ) {
        setSentStatus({
          success: false,
          inprogress: false,
          alert: "",
          error: error.response.data.message || "An error occurred",
        });
      } else {
        setSentStatus({
          success: false,
          inprogress: false,
          alert: "",
          error: "An error occurred",
        });
      }
    }
  };

  useEffect(() => {
    const fetchtargetdemande = async () => {
      try {
        const res = await axios.get(
          `http://localhost:${PORT}/sous-activite/AdminfetchSignledemande/${sousActivitieId}/${demandeId}`
        );
        const data = await res.data;
        setFormState((prevState) => ({
          ...prevState,
          Status: data.Status,
          montant: data.montant,
          observation: data.observation,
        }));
      } catch (error) {
        console.log(error);
      }
    };
    fetchtargetdemande();
  }, []);

  useEffect(() => {
    console.log(formState);
  }, [formState]);

  return (
    <div className="bg-landing h-screen">
      <Header />
      <AdminSideBar />
      <Container
        maxWidth="sm"
        className={"w-full flex items-center justify-center h-screen"}
      >
        <CssBaseline />
        <Box
          sx={{
            mt: 5,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          className={"w-full"}
        >
          <Typography
            variant="h5"
            sx={{
              background: "#1976d2",
            }}
            className="mr-auto rounded font-main flex gap-2 items-center text-white capitalize w-full p-4"
          >
            Observation de demande
          </Typography>
          <Box
            component="form"
            sx={{ mt: 3 }}
            onSubmit={handleSubmit}
            className={"w-full"}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="observation"
                  label="observation"
                  type="text"
                  value={formState.observation}
                  onChange={handleChange}
                  multiline
                  rows={4}
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="montant"
                  label="Montant"
                  type="number"
                  value={formState.montant}
                  onChange={handleChange}
                  multiline
                  rows={1}
                  inputProps={{ maxLength: 500 }}
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth required>
                  <InputLabel id="select-Status">Status</InputLabel>
                  <Select
                    labelId="select-Status"
                    id="select-Status"
                    name="Status"
                    value={formState.Status}
                    onChange={(e) => handleChange(e)}
                    label="Status"
                  >
                    <MenuItem value={"Approuvée"}>Approuvée</MenuItem>
                    <MenuItem value={"Refusée"}>Refusée</MenuItem>
                    <MenuItem value={"Documents requis"}>
                      Documents requis
                    </MenuItem>
                    <MenuItem value={"En traitement"}>En traitement</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
            {sentStatus.error && (
              <Alert className="mt-4" severity="info">
                {sentStatus.error}
              </Alert>
            )}
            {sentStatus.success && (
              <Alert className="mt-4" severity="success">
                {`la demande a ete bien ${formState.Status}`}
              </Alert>
            )}
            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              type="submit"
              className="bg-mainBleu hover:bg-yellow transition-all duration-500 flex gap-x-4"
            >
              Envouyer
              {sentStatus.inprogress && (
                <CircularProgress color="inherit" size={20} />
              )}
              {sentStatus.success && (
                <Verified color="inherit" fontSize={"small"} />
              )}
              {sentStatus.error || sentStatus.alert ? (
                <ErrorOutlineRounded color="inherit" fontSize={"small"} />
              ) : (
                ""
              )}
            </Button>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default FormOne;
