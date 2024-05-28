import React, { useEffect, useState } from "react";
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
import Navbar from "../navbar.tsx";
import axios from "axios";
import { SingleSousActivitiesWithpieces } from "../../interfaces/types.tsx";
import { PORT } from "../../../env.ts";

interface FormState {
  date: string;
  files: File[];
  personelId: string;
}

const Retrait: React.FC = () => {
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
  const [pieces, setPieces] = useState<number>(1);
  const [formState, setFormState] = useState<FormState>({
    date: "",
    files: [],
    personelId: user.id,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
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
    if (files.length > pieces) {
      setSentStatus({
        success: false,
        inprogress: false,
        error: "",
        alert: `Max files allowed is ${pieces}`,
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
    try {
      setSentStatus({
        inprogress: true,
        success: false,
        error: "",
        alert: "",
      });
      const response = await axios.post(
        `http://localhost:${PORT}/retrait`,
        formState,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        },
      );
      if (response.status === 201) {
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
    const fetchSousActivitiePieces = async () => {
      try {
        const res = await axios.get(`http://localhost:${PORT}/sous-activite/4`);
        const data: SingleSousActivitiesWithpieces = res.data;
        setPieces(data.pieces.length);
      } catch (error) {
        console.log(error);
      }
    };
    fetchSousActivitiePieces();
  }, []);
  useEffect(() => {
    console.log(sentStatus);
  }, [sentStatus]);
  return (
    <div className="bg-landing h-screen">
      {<Navbar />}
      <Container maxWidth="sm">
        <CssBaseline />
        <Box
          sx={{
            mt: 5,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              background: "#1976d2",
            }}
            className="mr-auto rounded font-main flex gap-2 items-center text-white capitalize w-full p-4"
          >
            Demande de Retrait
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
                  name="date"
                  label="Date"
                  type="date"
                  placeholder="JJ/MM/AAAA"
                  value={formState.date}
                  onChange={handleChange}
                  inputProps={{ pattern: "\\d{1,2}/\\d{1,2}/\\d{4}" }}
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
                    Importer les Fichiers
                  </Button>
                </label>
                {formState.files.length > 0 ? (
                  <Typography>{formState.files.length} files chosen</Typography>
                ) : (
                  <Typography>No fichier selectioné</Typography>
                )}
                <Typography className="text-sm text-gray-500 mt-1">
                  Max {pieces} Fichiers
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
              {sentStatus.success && <Verified fontSize={"small"} />}
              {sentStatus.error && <ErrorOutlineRounded fontSize={"small"} />}
            </Button>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default Retrait;
