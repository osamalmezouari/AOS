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
import {CondoleanceTypes} from "../../interfaces/types.tsx";
import {useParams} from "react-router-dom";

const UpdateHandicape: React.FC = () => {
    const userDataString = localStorage.getItem("user");
    const JSONDATA = userDataString ? JSON.parse(userDataString) : null;
    const user = JSONDATA;
    const { demandeId } = useParams();
    const [sentStatus, setSentStatus] = useState<{
        success: boolean;
        inprogress: boolean;
        error: string;
        alert: string;
        descriptionLength: number;
    }>({
        success: false,
        inprogress: false,
        error: "",
        alert: "",
        descriptionLength: 0,
    });

    const [maxFiles, setMaxFiles] = useState<number>(0);
    const [enfants, setenfants] = useState<CondoleanceTypes[]>([]);
    const [formState, setFormState] = useState<{
        description: string;
        enfant: string;
        files: File[];
        personelId: string;
    }>({
        description: "",
        enfant: "",
        files: [],
        personelId: user.id,
    });

    useEffect(() => {
        const fetchMaxFiles = async () => {
            try {
                const res = await axios.get(
                    `http://localhost:${PORT}/sous-activite/19`,
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
    useEffect(() => {
        const fetchtargetdemande = async () => {
            try {
                const res = await axios.get(
                    `http://localhost:${PORT}/demande-Handicape/${demandeId}`
                );
                const data = await res.data;
                setFormState((prevState) => ({
                    ...prevState,
                    description: data.description,
                    enfant: data.enfant,
                }));
            } catch (error) {
                console.log(error);
            }
        };
        fetchtargetdemande();
    }, []);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | React.ChangeEvent<{ name?: string; value: unknown }>,
    ) => {
        const { name, value } = e.target;
        if (name === "description" && typeof value === "string" && value.length > 100) {
            setSentStatus((prevStatus) => ({
                ...prevStatus,
                alert: "Maximum characters allowed is 100",
                descriptionLength: value.length,
            }));
            return;
        }

        setSentStatus((prevStatus) => ({
            ...prevStatus,
            alert: "",
            descriptionLength: name === "description" ? value.length : prevStatus.descriptionLength,
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
                descriptionLength: 0,
            });
            const response = await axios.patch(
                `http://localhost:${PORT}/demande-handicape/${demandeId}`,
                formState,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                },
            );

            if (response.status === 200) {
                setSentStatus({
                    success: true,
                    error: "",
                    inprogress: false,
                    alert: "",
                    descriptionLength: 0,
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
                    descriptionLength: 0,
                });
            } else {
                setSentStatus({
                    success: false,
                    inprogress: false,
                    error: "An error occurred",
                    alert: "",
                    descriptionLength: 0,
                });
            }
        }
    };
    return (
        <div className="bg-landing h-screen">
            <Navbar />
            <Container maxWidth="sm" className={"w-full flex items-center justify-center h-[80vh]"}>
                <CssBaseline />
                <Box
                    sx={{
                        mt: 5,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                    className= {'w-full'}
                >
                    <Typography
                        variant="h5"
                        sx={{
                            background: "#1976d2",
                        }}
                        className="mr-auto rounded font-main flex gap-2 items-center text-white capitalize w-full p-4"
                    >
                        Modification de la demande de handicap
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
                                    inputProps={{ maxLength: 100 }}
                                />
                                <Typography className="text-sm text-gray-500 mt-1">
                                    {`Maximum ${sentStatus.descriptionLength} / 100 characters`}
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <FormControl fullWidth required>
                                    <InputLabel id="select-enfant">Choisissez l'enfant</InputLabel>
                                    <Select
                                        labelId="select-enfant"
                                        id="select-enfant"
                                        name="enfant"
                                        value={formState.enfant}
                                        onChange={handleChange}
                                        label="l'enfant"
                                    >
                                        {enfants && enfants.map((nom) => (
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

export default UpdateHandicape;
