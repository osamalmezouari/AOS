import React, { useState } from "react";
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
import Navbar from "../component/navbar"; // Adjust the path if necessary
import axios from "axios";
import {
  AccountBox,
  DocumentScanner,
  ErrorOutlineRounded,
  Verified,
} from "@mui/icons-material";
interface FormState {
  email: string;
  password: string;
  file: File | null;
}

const Register: React.FC = () => {
  const [sentStatus, setSentStatus] = useState({
    success: false,
    inprogress: false,
    dejainscri: "",
    error: false,
  });
  const [formState, setFormState] = useState<FormState>({
    email: "",
    password: "",
    file: null,
  });

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(sentStatus);
    setSentStatus({
      inprogress: true,
      success: false,
      dejainscri: "",
      error: false,
    });
    const formData = new FormData();
    formData.append("email", formState.email);
    formData.append("password", formState.password);
    if (formState.file) {
      formData.append("file", formState.file);
    }
    try {
      const response = await axios.post(
        "http://localhost:3000/inscriptions",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        },
      );
      console.log("Response:", response.data);
      setSentStatus({
        inprogress: false,
        success: true,
        dejainscri: "",
        error: false,
      });
    } catch (error: any) {
      if (error.response.status === 401) {
        setSentStatus({
          inprogress: false,
          success: false,
          dejainscri: error.response.data.message,
          error: false,
        });
      } else {
        setSentStatus({
          inprogress: false,
          success: false,
          dejainscri: "",
          error: true,
        });
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    console.log(formState);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files as FileList;
    if (files.length > 0) {
      setFormState((prevState) => ({
        ...prevState,
        file: files[0],
      }));
    }
  };

  return (
    <div className="bg-landing h-screen">
      {<Navbar />}
      <Container maxWidth="xs">
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
            className="mr-auto rounded font-main flex gap-2 items-center text-white  w-full p-4 "
          >
            Inscreption
          </Typography>
          <Box component="form" sx={{ mt: 3 }} onSubmit={handleRegister}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="email"
                  label="Email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Mot de passe"
                  type="password"
                  value={formState.password}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <input
                  type="file"
                  id="file"
                  name="file"
                  required
                  onChange={handleFileChange}
                  style={{ display: "none" }}
                />
                <label htmlFor="file">
                  <Button
                    variant="contained"
                    component="span"
                    className="bg-mainBleu"
                    sx={{
                      color: "white",
                      mb: 2,
                    }}
                  >
                    Choisir un fichier
                  </Button>
                </label>
                {formState.file ? (
                  <Typography>
                    Fichier choisi : {formState.file.name}
                  </Typography>
                ) : (
                  <Typography>Aucun fichier choisi</Typography>
                )}
              </Grid>
            </Grid>
            {sentStatus.dejainscri && (
              <Alert className={"mt-4"} severity="info">
                {sentStatus.dejainscri}
              </Alert>
            )}
            {sentStatus.error && (
              <Alert className={"mt-4"} severity="warning">
                ton email ou ton mot de passe est pas corect
              </Alert>
            )}
            {sentStatus.success && (
              <Alert className={"mt-4"} severity="success">
                la demande d inscreption et enovoyee avec succes
              </Alert>
            )}
            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              type="submit"
              className="bg-mainBleu hover:bg-yellow transition-all duration-500 flex gap-x-4"
            >
              S'inscrire
              {sentStatus.inprogress && (
                <CircularProgress color="inherit" size={20} />
              )}
              {sentStatus.success && <Verified size={20} />}
              {sentStatus.error ||
                (sentStatus.dejainscri && <ErrorOutlineRounded size={20} />)}
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Typography>
                  Vous avez déjà un compte? Connexion on haut
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default Register;
