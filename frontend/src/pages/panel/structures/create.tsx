import React, { useState } from "react";
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
} from "@mui/material";
import axios from "axios";
import { PORT } from "../../../../env.ts";
import Header from "../../../component/header.tsx";
import AdminSideBar from "../../../component/adminSidebar.tsx";

const AddAffectation: React.FC = () => {
    const [formState, setFormState] = useState({
        structureAr: "",
        StructureFr: "",
        abrviation: "",
        TypeStructure: "",
    });

    const [sentStatus, setSentStatus] = useState({
        success: false,
        inprogress: false,
        error: "",
    });

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
                `http://localhost:${PORT}/affectation`,
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
                        Ajouter une Structure
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
                                    name="structureAr"
                                    label="Nom de la structure en Arabe"
                                    value={formState.structureAr}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="StructureFr"
                                    label="Nom de la structure en Français"
                                    value={formState.StructureFr}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="abrviation"
                                    label="Abréviation"
                                    value={formState.abrviation}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="TypeStructure"
                                    label="Type de structure"
                                    value={formState.TypeStructure}
                                    onChange={handleChange}
                                />
                            </Grid>
                        </Grid>
                        {sentStatus.error && (
                            <Alert className="mt-4" severity="error">
                                {sentStatus.error}
                            </Alert>
                        )}
                        {sentStatus.success && (
                            <Alert className="mt-4" severity="success">
                                Strucutre ajoutée avec succès
                            </Alert>
                        )}
                        <Button
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            type="submit"
                            className="bg-mainBleu hover:bg-yellow transition-all duration-500 flex gap-x-4"
                        >
                            Ajouter un Strucutre
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

export default AddAffectation;
