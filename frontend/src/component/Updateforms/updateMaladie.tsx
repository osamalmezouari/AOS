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
import Navbar from "../navbar.tsx";
import { useParams } from "react-router-dom";
import Header from "../header.tsx";
import SideBar from "../sidebar.tsx";

const UpdateMaladie: React.FC = () => {
  const userDataString = JSON.parse(localStorage.getItem("user"));
  const [maxFiles, setMaxFiles] = useState<number>(0);
  const user = userDataString;
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

  const [formState, setFormState] = useState<{
    description: string;
    files: File[];
    personelId: string;
  }>({
    description: "",
    files: [],
    personelId: user.id,
  });

  useEffect(() => {
    const fetchMaxFiles = async () => {
      try {
        const res = await axios.get(`http://localhost:${PORT}/sous-activite/5`);
        const maxPieces = res.data.pieces.length;
        setMaxFiles(maxPieces);
      } catch (error) {
        console.log(error);
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
    if (files.length > maxFiles) {
      setSentStatus({
        success: false,
        inprogress: false,
        error: "",
        alert: `Max files allowed is ${maxFiles}`,
      });
      return;
    }
    setFormState((prevState) => ({
      ...prevState,
      files,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formState.files.length < maxFiles) {
      setSentStatus({
        success: false,
        inprogress: false,
        error: "",
        alert: `Min files allowed is ${maxFiles}`,
      });
      return;
    }
    try {
      setSentStatus({
        inprogress: true,
        success: false,
        error: "",
        alert: "",
      });

      const formData = new FormData();
      formData.append("description", formState.description);
      formData.append("personelId", formState.personelId);
      formState.files.forEach((file) => {
        formData.append("files", file);
      });

      const response = await axios.patch(
        `http://localhost:${PORT}/demande-maladies/${demandeId}`,
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
    const fetchtargetdemande = async () => {
      try {
        const res = await axios.get(
          `http://localhost:${PORT}/demande-maladies/${demandeId}`
        );
        const data = await res.data;
        setFormState((prevState) => ({
          ...prevState,
          description: data.Decription,
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
      <SideBar/>
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
            Modification de Demande de Maladies
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
                  name="description"
                  label="Description"
                  type="text"
                  value={formState.description}
                  onChange={handleChange}
                  multiline
                  rows={4}
                  inputProps={{ maxLength: 300 }}
                  InputLabelProps={{ shrink: true }}
                />
                <Typography className="text-sm text-gray-500 mt-1">
                  {`Maximum ${
                    formState.description && formState.description.length
                  } / 300 characters`}
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

export default UpdateMaladie;
