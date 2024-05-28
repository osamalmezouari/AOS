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
import { ErrorOutlineRounded, Verified } from "@mui/icons-material";
import axios from "axios";
import { PORT } from "../../../env.ts";
import Navbar from "../navbar.tsx";

const Zoo: React.FC = () => {
    const userDataString = JSON.parse(localStorage.getItem("user"));
    const user = userDataString;
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
        date: string;
        adulte: number;
        enfant: number;
        personelId: string;
    }>({
        description: "",
        date: "",
        adulte: 0,
        enfant: 0,
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

    const handleSubmit = async (e: React.FormEvent) => {
        console.log(formState)
        e.preventDefault();
        try {
            setSentStatus({
                inprogress: true,
                success: false,
                error: "",
                alert: "",
            });
            const response = await axios.post(
                `http://localhost:${PORT}/demande-zoo`,
                formState,
                {
                    headers: {
                        "Content-Type": "application/json",
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

    return (
        <div className="bg-landing h-screen">
            <Navbar />
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
                        Veuillez remplir le formulaire
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
                                    multiline
                                    rows={4}
                                    value={formState.description}
                                    onChange={handleChange}
                                    helperText={`Max caractères ${formState.description.length} / 100`}
                                    inputProps={{ maxLength: 100 }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="date"
                                    label="Date"
                                    type="date"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    value={formState.date}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    required
                                    fullWidth
                                    name="adulte"
                                    label="Nombre d'adultes"
                                    type="number"
                                    value={formState.adulte}
                                    onChange={handleChange}
                                    inputProps={{ min: 0 }}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    required
                                    fullWidth
                                    name="enfant"
                                    label="Nombre d'enfants"
                                    type="number"
                                    value={formState.enfant}
                                    onChange={handleChange}
                                    inputProps={{ min: 0 }}
                                />
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

export default Zoo;
