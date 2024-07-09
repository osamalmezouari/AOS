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

const AddExcursion: React.FC = () => {
    const [formState, setFormState] = useState({
        nom: "",
        Description: "",
        imgUrl: "",
        Date: "",
        montant: "",
        nombre: "",
        vileStartId: "",
        vileEndId: "",
    });

    const [vileList, setVileList] = useState([]);
    const [sentStatus, setSentStatus] = useState({
        success: false,
        inprogress: false,
        error: "",
    });

    useEffect(() => {
        const fetchViles = async () => {
            try {
                const res = await axios.get(`http://localhost:${PORT}/viles`);
                setVileList(res.data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchViles();
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
            const dateParts = formState.Date.split("-");
            const year = parseInt(dateParts[0], 10);
            const month = parseInt(dateParts[1], 10) - 1; // Months are zero-indexed
            const day = parseInt(dateParts[2], 10);
            
            const formattedDate = new Date(year, month, day).getTime();
            console.log(formattedDate);
            console.log(formattedDate)
            const response = await axios.post(
                `http://localhost:${PORT}/excursion`,
                { ...formState, Date: formattedDate }
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
                        Ajouter une Excursion
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
                                    name="nom"
                                    label="Nom"
                                    value={formState.nom}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="Description"
                                    label="Description"
                                    value={formState.Description}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="imgUrl"
                                    label="Image URL"
                                    value={formState.imgUrl}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="Date"
                                    label="Date"
                                    type="date"
                                    value={formState.Date}
                                    onChange={handleChange}
                                    InputLabelProps={{ shrink: true }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    name="montant"
                                    label="Montant"
                                    type="number"
                                    value={formState.montant}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="nombre"
                                    label="Nombre"
                                    type="number"
                                    value={formState.nombre}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    select
                                    required
                                    fullWidth
                                    name="vileStartId"
                                    label="Ville de Départ"
                                    value={formState.vileStartId}
                                    onChange={handleChange}
                                >
                                    {vileList.map((vile) => (
                                        <MenuItem key={vile.id} value={vile.id}>
                                            {vile.vileAr}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    select
                                    required
                                    fullWidth
                                    name="vileEndId"
                                    label="Ville d'Arrivée"
                                    value={formState.vileEndId}
                                    onChange={handleChange}
                                >
                                    {vileList.map((vile) => (
                                        <MenuItem key={vile.id} value={vile.id}>
                                            {vile.vileAr}
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
                                Excursion ajoutée avec succès
                            </Alert>
                        )}
                        <Button
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            type="submit"
                            className="bg-mainBleu hover:bg-yellow transition-all duration-500 flex gap-x-4"
                        >
                            Ajouter Excursion
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

export default AddExcursion;
