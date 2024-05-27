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
import { se } from "date-fns/locale";

interface FormState {
  description: string;
  files: File[];
}

const Marriage: React.FC = () => {
  const userDataString = localStorage.getItem("user");
  const JSONDATA = userDataString ? JSON.parse(userDataString) : null;
  const [sentStatus, setSentStatus] = useState<{
    success: boolean;
    inprogress: boolean;
    error: string;
    alert: string;
    description: number;
  }>({
    success: false,
    inprogress: false,
    error: "",
    alert: "",
    description: 0,
  });
  const [pieces, setPieces] = useState<number>(1);
  const [formState, setFormState] = useState<FormState>({
    description: "",
    files: [],
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
      description: value.length,
    });
    if (name === "description" && value.length > 200) {
      setSentStatus({
        success: false,
        inprogress: false,
        error: "",
        alert: "",
        description: value.length,
      });
      return;
    }
    console.log(sentStatus);
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
        alert: "max fechier pour disponbile pour ce demande est 3",
        description: 0,
      });
      return;
    }
    setFormState((prevState) => ({
      ...prevState,
      files,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    const user = JSONDATA;
    e.preventDefault();
    try {
      setSentStatus({
        inprogress: true,
        success: false,
        error: "",
        alert: "",
        description: 0,
      });
      const response = await axios.post(
        `http://localhost:${PORT}/mariage`,
        {
          ...formState,
          personelId: user.id,
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        },
      );
      if (response.status === 201) {
        setSentStatus({
          success: true,
          error: "",
          inprogress: false,
          alert: "",
          description: 0,
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
          description: 0,
          error: error.response.data.message || "An error occurred",
        });
      } else {
        setSentStatus({
          success: false,
          inprogress: false,
          alert: "",
          description: 0,
          error: error.response.data.message || "An error occurred",
        });
      }
    }
  };

  useEffect(() => {
    const fetchSousActivitiePieces = async () => {
      try {
        const res = await axios.get(`http://localhost:${PORT}/sous-activite/1`);
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
            demande de marriage
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
                  inputProps={{ maxLength: 500 }}
                />
                <Typography className="text-sm text-gray-500 mt-1">
                  {`Maximum ${sentStatus.description || 0} / 200 characters`}
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
                    Importer les Fechiers
                  </Button>
                </label>
                {formState.files.length > 0 ? (
                  <Typography>{formState.files.length} files chosen</Typography>
                ) : (
                  <Typography>No fechier selectioner</Typography>
                )}
                <Typography className="text-sm text-gray-500 mt-1">
                  Max {pieces} Fechiers
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
                le form est envouyer avec succes
              </Alert>
            )}
            {sentStatus.description > 200 && (
              <Alert className="mt-4" severity="info">
                max charachters est 200
              </Alert>
            )}
            {sentStatus.alert && (
              <Alert className="mt-4" severity="info">
                {`max fechier est  ${pieces} pour ce demande`}
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
              {sentStatus.success && <Verified color="inherit" size={20} />}
              {sentStatus.error ||
              sentStatus.description > 200 ||
              sentStatus.alert ? (
                <ErrorOutlineRounded color="inherit" size={20} />
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

export default Marriage;
