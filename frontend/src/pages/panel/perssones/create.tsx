import React, { useState, useEffect } from "react";
import {
    Box,
    Button,
    Container,
    CssBaseline,
    Grid,
    TextField,
    Typography,
    Alert,
    CircularProgress,
    MenuItem,
} from "@mui/material";
import axios from "axios";
import { PORT } from "../../../../env.ts";
import Header from "../../../component/header.tsx";
import AdminSideBar from "../../../component/adminSidebar.tsx";

const AddPersonel: React.FC = () => {
    const [formState, setFormState] = useState({
        matricule: "",
        nom_fr: "",
        nom_ar: "",
        prenom_ar: "",
        prenom_fr: "",
        password: "",
        naissance: "",
        email: "",
        echelle: "",
        isAdmin: false,
        AffectationId: "",
    });

    const [affectationList, setAffectationList] = useState([]);
    const [sentStatus, setSentStatus] = useState({
        success: false,
        inprogress: false,
        error: "",
    });

    useEffect(() => {
        const fetchAffectations = async () => {
            try {
                const res = await axios.get(`http://localhost:${PORT}/affectation`);
                setAffectationList(res.data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchAffectations();
    }, []);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setSentStatus({
            success: false,
            inprogress: false,
            error: "",
        });
        setFormState((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            setSentStatus({
                inprogress: true,
                success: false,
                error: "",
            });

            const response = await axios.post(
                `http://localhost:${PORT}/personel`,
                formState
            );

            if (response.status === 201) {
                setSentStatus({
                    success: true,
                    error: "",
                    inprogress: false,
                });
            }
        } catch (error) {
            setSentStatus({
                success: false,
                error: "An error occurred",
                inprogress: false,
            });
        }
    };

    return (
        <div className="bg-landing h-screen">
            <Header />
            <AdminSideBar />
            <Container maxWidth="sm" className="flex items-center justify-center pt-32">
                <CssBaseline />
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        mt: 5,
                    }}
                    component={"div"}
                    className={"w-full"}
                >
                    <Typography
                        variant="h5"
                        sx={{
                            background: "#1976d2",
                        }}
                        className="mr-auto rounded font-main flex gap-2 items-center text-white capitalize w-full p-4"
                    >
                        Ajouter un Personnel
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
                                    name="matricule"
                                    label="Matricule"
                                    type="number"
                                    value={formState.matricule}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="nom_fr"
                                    label="Nom en Français"
                                    value={formState.nom_fr}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="nom_ar"
                                    label="Nom en Arabe"
                                    value={formState.nom_ar}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="prenom_fr"
                                    label="Prénom en Français"
                                    value={formState.prenom_fr}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="prenom_ar"
                                    label="Prénom en Arabe"
                                    value={formState.prenom_ar}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="password"
                                    label="Mot de Passe"
                                    type="password"
                                    value={formState.password}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="naissance"
                                    label="Date de Naissance"
                                    type="date"
                                    value={formState.naissance}
                                    onChange={handleChange}
                                    InputLabelProps={{ shrink: true }}
                                />
                            </Grid>
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
                                    name="echelle"
                                    label="Echelle"
                                    type="number"
                                    value={formState.echelle}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    select
                                    required
                                    fullWidth
                                    name="AffectationId"
                                    label="Affectation"
                                    value={formState.AffectationId}
                                    onChange={handleChange}
                                >
                                    {affectationList.map((affectation) => (
                                        <MenuItem key={affectation.id} value={affectation.id}>
                                            {affectation.StructureFr}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </Grid>
                        </Grid>
                        {sentStatus.error && (
                            <Alert className="mt-4" severity="error">
                                {sentStatus.error}
                            </Alert>
                        )}
                        {sentStatus.success && (
                            <Alert className="mt-4" severity="success">
                                Personnel ajouté avec succès
                            </Alert>
                        )}
                        <Button
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            type="submit"
                            className="bg-mainBleu hover:bg-yellow transition-all duration-500 flex gap-x-4"
                        >
                            Ajouter Personnel
                            {sentStatus.inprogress && (
                                <CircularProgress color="inherit" size={20} />
                            )}
                        </Button>
                    </Box>
                </Box>
            </Container>
        </div>
    );
};

export default AddPersonel;
