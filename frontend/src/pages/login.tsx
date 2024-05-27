import {
  Container,
  CssBaseline,
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  Alert, CircularProgress,
} from "@mui/material";
import React, { FormEvent, useState } from "react";
import Navbar from "../component/navbar";
import axios from "axios";
import {NavLink, useNavigate} from "react-router-dom";
import { PORT } from "../../env.ts";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Status, SetStatus] = useState<{
    success: boolean;
    error: string;
  }>({
    success: false,
    error: "",
  });
  const navigate = useNavigate();
  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post(`http://localhost:${PORT}/auth`, {
        email,
        password,
      });
      console.log(response.data);
      if (response.data.status === 200) {
        SetStatus({
          error: false,
          success: true,
        });
        localStorage.setItem("user", JSON.stringify(response.data));
        setTimeout(() => {
          navigate("/AOS", { replace: true }); // Access response data using response.data
        }, 3000);
      }
    } catch (error) {
      if (error.response.status === 400) {
        SetStatus({
          success: false,
          error: error.response.data.message,
        });
      }
    }
  };

  return (
    <>
      <body className={"bg-landing h-screen"}>
        <Navbar />
        <Container maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              mt: 10,
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
              Se conecter
            </Typography>
            <Box
              sx={{ mt: 1 }}
              component={"form"}
              onSubmit={(e) => handleLogin(e)}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoFocus
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="password"
                name="password"
                label="Password"
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              {Status.success && (
                <Alert severity="success">
                  Vous avez conecter avec success
                </Alert>
              )}
              {Status.error && <Alert severity="warning">{Status.error}</Alert>}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Se conecter
              </Button>
              <Grid container justifyContent={"flex-end"}>
                <Grid item>
                  <Typography>Pas de compte ? <NavLink to={'/AOS/Inscreption'} className={'underline'}>Inscrivez-vous.</NavLink></Typography>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </body>
    </>
  );
};

export default Login;
