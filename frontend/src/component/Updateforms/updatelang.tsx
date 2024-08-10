import React, { useEffect, useState } from "react";
import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Container,
  CssBaseline, FormControl,
  Grid, InputLabel, MenuItem, Select,
  TextField,
  Typography,
} from "@mui/material";
import { ErrorOutlineRounded, Verified } from "@mui/icons-material";
import axios from "axios";
import { SingleSousActivitiesWithpieces } from "../../interfaces/types.tsx";
import { PORT } from "../../../env.ts";
import { useParams } from "react-router-dom";
import Header from "../header.tsx";
import SideBar from "../sidebar.tsx";

const UpdateLang: React.FC = () => {
  const userDataString = localStorage.getItem("user");
  const JSONDATA = userDataString ? JSON.parse(userDataString) : null;
  const user = JSONDATA;
  const [enfants, setenfants] = useState([]);
  const getCurrentTrimester = () => {
    const month = new Date().getMonth();
    if (month >= 1 && month < 3) return "tri1";
    if (month >= 4 && month < 6) return "tri2";
    if (month >= 7 && month < 9) return "tri3";

    return;
  };
  const CurrentTrimester = getCurrentTrimester();
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
  const [MaxFiles, setMaxFiles] = useState<number>(1);
  const [formState, setFormState] = useState< {
    files: File[];
    enfant: string;
    montant: number;
    personelId: string;
    periode: string;
  }>({
    files: [],
    enfant: "",
    montant: 0,
    personelId: user.id,
    periode: "",
  });
  const { demandeId } = useParams();
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
    console.log(sentStatus);
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
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
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (files.length > MaxFiles) {
      setSentStatus({
        success: false,
        inprogress: false,
        error: "",
        alert: "max fechier pour disponbile pour ce demande est 3",
      });
      return;
    }
    setFormState((prevState) => ({
      ...prevState,
      files,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    if (formState.files.length < MaxFiles) {
      setSentStatus({
        success: false,
        inprogress: false,
        error: "",
        alert: `Min files allowed is ${MaxFiles}`,
      });
      return;
    }
    e.preventDefault();
    try {
      setSentStatus({
        inprogress: true,
        success: false,
        error: "",
        alert: "",
      });
      const response = await axios.patch(
        `http://localhost:${PORT}/demande-lang/${demandeId}`,
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
          alert: "",
          error: error.response.data.message || "An error occurred",
        });
      } else {
        setSentStatus({
          success: false,
          inprogress: false,
          alert: "",
          error: error.response.data.message || "An error occurred",
        });
      }
    }
  };

  useEffect(() => {
    const fetchSousActivitiePieces = async () => {
      try {
        const res = await axios.get(
          `http://localhost:${PORT}/sous-activite/15`
        );
        const data: SingleSousActivitiesWithpieces = res.data;
        setMaxFiles(data.pieces.length);
      } catch (error) {
        console.log(error);
      }
    };
    fetchSousActivitiePieces();
  }, []);

  useEffect(() => {
    const fetchtargetdemande = async () => {
      try {
        const res = await axios.get(
          `http://localhost:${PORT}/demande-lang/${demandeId}`
        );
        const data = await res.data;
        setFormState((prevState) => ({
          ...prevState,
          enfant : data.enfant,
          periode : data.periode,
          montant : data.montant
        }));
      } catch (error) {
        console.log(error);
      }
    };
    fetchtargetdemande();
  }, []);
  useEffect(() => {
    console.log(sentStatus);
  }, [sentStatus]);
  return (
    <div className="bg-landing h-screen">
      <Header />
      <SideBar />
      <Container
          maxWidth="sm"
          className="w-full flex items-center justify-center h-screen"
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
            demande de language
          </Typography>
          <Box
              component="form"
              sx={{ mt: 3 }}
              onSubmit={handleSubmit}
              className={"w-full"}
          >
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField
                    required
                    fullWidth
                    name="montant"
                    label="montant"
                    type="text"
                    value={formState.montant}
                    onChange={handleChange}
                    multiline
                    rows={1}
                />
              </Grid>
              <Grid item xs={6}>
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
                <FormControl fullWidth required>
                  <InputLabel id="select-enfant">
                    Choisissez la periode
                  </InputLabel>
                  <Select
                      labelId="select-periode"
                      id="select-periode"
                      name="periode"
                      value={formState.periode}
                      onChange={handleChange}
                      label="periode"
                  >
                    {CurrentTrimester === "tri1" && (
                        <MenuItem value={"tri1"}>Trimistre 1</MenuItem>
                    )}
                    {CurrentTrimester === "tri2" && (
                        <MenuItem value={"tri2"}>Trimistre 2</MenuItem>
                    )}
                    {CurrentTrimester === "tri3" && (
                        <MenuItem value={"tri3"}>Trimistre 3</MenuItem>
                    )}
                    <MenuItem value={"anuelle"}>Anuelle</MenuItem>
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
                    Importer les Fechiers
                  </Button>
                </label>
                {formState.files.length > 0 ? (
                    <Typography>{formState.files.length} files chosen</Typography>
                ) : (
                    <Typography>No fechier selectioner</Typography>
                )}
                <Typography className="text-sm text-gray-500 mt-1">
                  Max {MaxFiles} Fechiers
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
            {sentStatus.alert && (
                <Alert className="mt-4" severity="info">
                  {`max fechier est  ${MaxFiles} pour ce demande`}
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

export default UpdateLang;
