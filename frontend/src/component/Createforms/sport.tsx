import React, { useState, useEffect } from "react";
import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Container,
  CssBaseline,
  Grid,
  TextField,
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

const Sport: React.FC = () => {
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
  const [enfants, setenfants] = useState([]);
  const [formState, setFormState] = useState<{
    enfant: string;
    files: File[];
    personelId: string;
    montant: number;
  }>({
    montant: 0,
    enfant: "",
    files: [],
    personelId: user.id,
  });

  useEffect(() => {
    const fetchMaxFiles = async () => {
      try {
        const res = await axios.get(
          `http://localhost:${PORT}/sous-activite/18`
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
    const fetchenfants = async () => {
      try {
        const res = await axios.get(`http://localhost:${PORT}/enfants`);
        setenfants(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchenfants();
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
      const response = await axios.post(
        `http://localhost:${PORT}/sport`,
        formState,
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

  return (
    <div className="bg-landing h-screen">
      <Navbar />
      <Container
        maxWidth="sm"
        className={"w-full flex items-center justify-center h-[80vh]"}
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
            Demande de Sport
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
                  name="montant"
                  label="montant"
                  type="number"
                  value={formState.montant}
                  onChange={handleChange}
                  multiline
                  rows={1}
                  inputProps={{ maxLength: 100 }}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth required>
                  <InputLabel id="select-enfant">
                    Choisissez l'enfant
                  </InputLabel>
                  <Select
                    labelId="select-enfant"
                    id="select-enfant"
                    name="enfant"
                    value={formState.enfant}
                    onChange={handleChange}
                    label="l'enfant"
                  >
                    {enfants &&
                      enfants.map((nom) => (
                        <MenuItem key={nom.nom_fr} value={nom.nom_fr}>
                          {nom.nom_fr}
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
                  <Typography>{formState.files.length} files chosen</Typography>
                ) : (
                  <Typography>No fichier selectioné</Typography>
                )}
                <Typography className="text-sm text-gray-500 mt-1">
                  Max {maxFiles} Fichiers
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

export default Sport;
