import React, { useState, useEffect } from "react";
import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Container,
  CssBaseline,
  Grid,
  Typography,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from "@mui/material";
import { ErrorOutlineRounded, Verified } from "@mui/icons-material";
import axios from "axios";
import { PORT } from "../../../env.ts";
import Navbar from "../navbar.tsx";
import { ExcursionType } from "../../interfaces/types.tsx";
import { useParams } from "react-router-dom";

const UpdateExcursion: React.FC = () => {
  const { demandeId } = useParams();
  const userDataString = localStorage.getItem("user");
  const JSONDATA = userDataString ? JSON.parse(userDataString) : null;
  const user = JSONDATA;

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

  const [maxFiles, setMaxFiles] = useState<number>(0);
  const [ExcursionDispo, setExcursionDispo] = useState<ExcursionType[]>([]);
  const [formState, setFormState] = useState<{
    description: string;
    ExcursionId: string;
    files: File[];
    personelId: string;
    sousActiviteId: string;
  }>({
    description: "",
    ExcursionId: "",
    files: [],
    personelId: user.id,
    sousActiviteId: "12",
  });

  useEffect(() => {
    const fetchMaxFiles = async () => {
      try {
        const res = await axios.get(
          `http://localhost:${PORT}/sous-activite/12`
        );
        const maxPieces = res.data.pieces.length;
        setMaxFiles(maxPieces);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMaxFiles();
  }, []);

  useEffect(() => {
    const fetchExcursionOptions = async () => {
      try {
        const res = await axios.get(
          `http://localhost:${PORT}/excursion/excursionDispo`
        );
        setExcursionDispo(res.data);
        console.log(`excursin disponible`, ExcursionDispo);
      } catch (error) {
        console.log(error);
      }
    };
    fetchExcursionOptions();
  }, []);

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      | React.ChangeEvent<{ name?: string; value: unknown }>
  ) => {
    const { name, value } = e.target;
    setSentStatus((prevStatus) => ({
      ...prevStatus,
      alert: "",
    }));

    setFormState((prevState) => ({
      ...prevState,
      [name || ""]: value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (files.length > maxFiles) {
      setSentStatus((prevStatus) => ({
        ...prevStatus,
        alert: `Maximum files allowed is ${maxFiles}`,
      }));
      return;
    }

    setFormState((prevState) => ({
      ...prevState,
      files,
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
      console.log(formState);
      const response = await axios.patch(
        `http://localhost:${PORT}/demande-excursion/${demandeId}`,
        formState,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
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
          error: error.response.data.message || "An error occurred",
          alert: "",
        });
      } else {
        setSentStatus({
          success: false,
          inprogress: false,
          error: "An error occurred",
          alert: "",
        });
      }
    }
  };
  useEffect(() => {
    const fetchtargetdemande = async () => {
      try {
        const res = await axios.get(
          `http://localhost:${PORT}/demande-excursion/${demandeId}`
        );
        const data = await res.data;
        setFormState((prevState) => ({
          ...prevState,
          ExcursionId: data.ExcursionId,
        }));
      } catch (error) {
        console.log(error);
      }
    };
    fetchtargetdemande();
  }, []);
  return (
    <div className="bg-landing h-screen">
      <Navbar />
      <Container
        maxWidth="sm"
        className="w-full flex items-center justify-center h-screen "
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
            Demande d'Excursion
          </Typography>
          <Box
            component="form"
            sx={{ mt: 3 }}
            onSubmit={handleSubmit}
            className={"w-full"}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <FormControl fullWidth required>
                  <InputLabel id="select-deceased-label">Excursion</InputLabel>
                  <Select
                    labelId="select-Excursion"
                    id="select-Excursion"
                    name="ExcursionId"
                    value={formState.ExcursionId}
                    onChange={handleChange}
                    label="Excursion"
                  >
                    {ExcursionDispo &&
                      ExcursionDispo.map((Type) => (
                        <MenuItem key={Type.id} value={Type.id}>
                          {Type.nom}
                        </MenuItem>
                      ))}
                  </Select>
                </FormControl>
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
                    Importer les Fichiers
                  </Button>
                </label>
                {formState.files.length > 0 ? (
                  <Typography>
                    {formState.files.length} fichiers choisis
                  </Typography>
                ) : (
                  <Typography>Aucun fichier sélectionné</Typography>
                )}
                <Typography className="text-sm text-gray-500 mt-1">
                  Max {maxFiles} fichiers
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
              disabled={sentStatus.inprogress}
            >
              Envoyer
              {sentStatus.inprogress && (
                <CircularProgress color="inherit" size={100} />
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

export default UpdateExcursion;
