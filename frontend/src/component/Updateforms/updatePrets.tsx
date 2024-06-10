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
} from "@mui/material";
import { ErrorOutlineRounded, Verified } from "@mui/icons-material";
import axios from "axios";
import { PORT } from "../../../env.ts";
import { useParams } from "react-router-dom";
import Header from "../header.tsx";
import SideBar from "../sidebar.tsx";

const UpdatePrets: React.FC = () => {
  const userDataString = localStorage.getItem("user");
  const user = userDataString ? JSON.parse(userDataString) : null;
  const { demandeId } = useParams();

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
  const [formState, setFormState] = useState<{
    mantantCredit: number;
    description: string;
    files: File[];
    personelId: string;
  }>({
    mantantCredit: 0,
    description: "",
    files: [],
    personelId: user?.id || "",
  });

  useEffect(() => {
    const fetchMaxFiles = async () => {
      try {
        const res = await axios.get(`http://localhost:${PORT}/sous-activite/3`);
        const maxPieces = res.data.pieces.length;
        setMaxFiles(maxPieces);
      } catch (error) {
        console.error(error);
      }
    };
    fetchMaxFiles();
  }, []);

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

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
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
      const formData = new FormData();
      formData.append("mantantCredit", formState.mantantCredit.toString());
      formData.append("description", formState.description);
      formData.append("personelId", formState.personelId);
      formState.files.forEach((file) => {
        formData.append("files", file);
      });

      const response = await axios.patch(
        `http://localhost:${PORT}/demande-credit/${demandeId}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (response.status === 200) {
        setTimeout(() => {
          setSentStatus({
            success: true,
            error: "",
            inprogress: false,
            alert: "",
          });
        }, 2000);
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
        console.error(error);
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
    const fetchtargetdemande = async () => {
      try {
        const res = await axios.get(
          `http://localhost:${PORT}/demande-credit/${demandeId}`
        );
        const data = await res.data;
        setFormState((prevState) => ({
          ...prevState,
          year: data.annee || new Date().getFullYear(),
          mantantCredit: data.mantantCredit,
          description: data.description || "",
        }));
      } catch (error) {
        console.log(error);
      }
    };
    fetchtargetdemande();
  }, []);
  return (
    <div className="bg-landing h-screen">
      <Header />
      <SideBar />
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
            Modification De la Demande de Prêts
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
                  name="mantantCredit"
                  label="Montant du Crédit DH"
                  type="number"
                  value={formState.mantantCredit}
                  onChange={handleChange}
                  InputLabelProps={{ shrink: true }}
                  inputProps={{ min: 0 }}
                />
              </Grid>
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
                  inputProps={{ maxLength: 300 }}
                />
                <Typography
                  variant="body2"
                  color="textSecondary"
                  className={"capitalize pt-2"}
                  component="p"
                >
                  max charachters {formState.description.length} / 300
                </Typography>
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

export default UpdatePrets;
