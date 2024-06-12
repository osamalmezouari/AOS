import React, { useState, useEffect } from "react";
import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Container,
  CssBaseline,
  Grid,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import { ErrorOutlineRounded, Verified } from "@mui/icons-material";
import axios from "axios";
import { PORT } from "../../../env.ts";
import Navbar from "../navbar.tsx";
import { Centre } from "../../interfaces/types.tsx";

const Estivage: React.FC = () => {
  const userDataString = JSON.parse(localStorage.getItem("user"));
  const user = userDataString;
  const [centresLoading, setCentresLoading] = useState(true);
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

  const [centres, setCentres] = useState<Centre[]>([]);
  const [formState, setFormState] = useState<{
    datedebut: string;
    datefin: string;
    description: string;
    type: string;
    centreId: string;
    personelId: string;
    files: File[];
    montant: number;
  }>({
    datedebut: "",
    datefin: "",
    description: "",
    type: "",
    centreId: "0",
    personelId: user.id,
    files: [],
    montant: 0,
  });

  const [descriptionLength, setDescriptionLength] = useState<number>(0);
  const [maxFiles, setMaxFiles] = useState<number>(0);

  useEffect(() => {
    const fetchCentres = async () => {
      try {
        const res = await axios.get(
          `http://localhost:${PORT}/centres/${formState.datedebut}`
        );
        const centresFiltred = await res.data.filter((center) => {
          return center.id !== "0";
        });
        setCentres(centresFiltred);
        setCentresLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCentres();
  }, [formState.datefin]);

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
    if (name === "description") {
      setDescriptionLength(value.length);
    }
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    setFormState((prevState) => ({
      ...prevState,
      files,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    console.log(formState);
    e.preventDefault();
    try {
      setSentStatus({
        inprogress: true,
        success: false,
        error: "",
        alert: "",
      });

      const formData = new FormData();
      formData.append("date_entre", formState.datedebut);
      formData.append("date_sortie", formState.datefin);
      formData.append("centreId", formState.centreId);
      formData.append("personelId", formState.personelId);
      formData.append("type", formState.type);
      formData.append("description", formState.description);
      formData.append("montant", formState.montant.toString());

      formState.files.forEach((file) => {
        formData.append("files", file);
      });

      const response = await axios.post(
        `http://localhost:${PORT}/demande-estivage`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 201) {
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
          error: error.response.data.message || "An error occurred",
          inprogress: false,
          alert: "",
        });
      } else {
        console.log(error);
        setSentStatus({
          success: false,
          error: "An error occurred",
          inprogress: false,
          alert: "",
        });
      }
    }
  };
  useEffect(() => {
    const fetchMaxFiles = async () => {
      try {
        const res = await axios.get(
          `http://localhost:${PORT}/sous-activite/10`
        );
        const maxPieces = res.data.pieces.length;
        setMaxFiles(maxPieces);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMaxFiles();
  }, []);

  return (
    <div className="bg-landing h-screen">
      <Navbar />
      <Container maxWidth="sm" className="flex items-center justify-center ">
        <CssBaseline />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            mt: 5,
          }}
          component={"div"}
          className={"w-full"}
        >
          <Typography
            variant="h5"
            sx={{
              background: "#1976d2",
            }}
            className="mr-auto rounded font-main flex gap-2 items-center text-white capitalize w-full p-4"
          >
            Demande d'Estivage
          </Typography>
          <Box
            component="form"
            sx={{ mt: 3 }}
            onSubmit={handleSubmit}
            className={"w-full"}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  name="datedebut"
                  label={"Date de début"}
                  type="datetime-local"
                  value={formState.datedebut}
                  onChange={handleChange}
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  name="datefin"
                  label="Date de fin"
                  type="datetime-local"
                  value={formState.datefin}
                  onChange={handleChange}
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  select
                  fullWidth
                  name="type"
                  label="Type"
                  value={formState.type}
                  onChange={handleChange}
                >
                  <MenuItem value="Association Centre">
                    Association Centre
                  </MenuItem>
                  <MenuItem value="Aide allouée">Aide allouée</MenuItem>
                </TextField>
              </Grid>
              {formState.type === "Association Centre" ? (
                <Grid item xs={6}>
                  <TextField
                    select
                    fullWidth
                    name="centreId"
                    label="Centre"
                    value={formState.centreId}
                    onChange={handleChange}
                  >
                    {centresLoading
                      ? ""
                      : centres.map((centre) => (
                          <MenuItem key={centre.id} value={centre.id}>
                            {centre.centreFr}
                          </MenuItem>
                        ))}
                  </TextField>
                </Grid> 
              )
            : (
              <Grid item xs={6}>
                <TextField
                  required
                  fullWidth
                  type="number"
                  name="montant"
                  label="montant"
                  multiline
                  value={formState.montant}
                  onChange={handleChange}
                />
              </Grid>
            )
            }
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="description"
                  label="Description"
                  multiline
                  rows={4}
                  value={formState.description}
                  onChange={handleChange}
                  helperText={`${descriptionLength}/200`}
                />
              </Grid>
              <Grid item xs={12}>
                <input
                  type="file"
                  id="files"
                  name="files"
                  onChange={handleFileChange}
                  multiple
                  style={{ display: "none" }}
                />
                <label htmlFor="files">
                  <Button
                    variant="contained"
                    component="span"
                    className="bg-mainBleu"
                    sx={{
                      color: "white",
                      mb: 2,
                    }}
                  >
                    Importer les Fechiers
                  </Button>
                </label>
                {formState.files.length > 0 ? (
                  <Typography>
                    {formState.files.length} fechier importer
                  </Typography>
                ) : (
                  <Typography>Non fechier selectioner</Typography>
                )}
                <Typography className="text-sm text-gray-500 mt-1">
                  Max {maxFiles} Fechiers
                </Typography>
              </Grid>
            </Grid>
            {sentStatus.error && (
              <Alert className="mt-4" severity="info">
                {sentStatus.error}
              </Alert>
            )}
            {sentStatus.success && (
              <Alert className="mt-4" severity="success">
                Le formulaire a été envoyé avec succès
              </Alert>
            )}
            {sentStatus.alert && (
              <Alert className="mt-4" severity="info">
                {sentStatus.alert}
              </Alert>
            )}
            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              type="submit"
              className="bg-mainBleu hover:bg-yellow transition-all duration-500 flex gap-x-4"
            >
              Envoyer
              {sentStatus.inprogress && (
                <CircularProgress color="inherit" size={20} />
              )}
              {sentStatus.success && <Verified fontSize="small" />}
              {sentStatus.error && <ErrorOutlineRounded fontSize="small" />}
            </Button>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default Estivage;
