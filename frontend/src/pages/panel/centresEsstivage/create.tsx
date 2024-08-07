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

const AddCentre: React.FC = () => {
    const [formState, setFormState] = useState({
        centreAr: "",
        centreFr: "",
        imgUrl: "",
        vileId: "",
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

            const response = await axios.post(
                `http://localhost:${PORT}/centres`,
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
            <AdminSideBar/>
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
                        Ajoute un centre
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
                                    name="centreAr"
                                    label="Centre nom Arabe"
                                    value={formState.centreAr}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="centreFr"
                                    label="Centre nom Francais"
                                    value={formState.centreFr}
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
                                    select
                                    required
                                    fullWidth
                                    name="vileId"
                                    label="Vile"
                                    value={formState.vileId}
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
                                Centre ajoute avec succes
                            </Alert>
                        )}
                        <Button
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            type="submit"
                            className="bg-mainBleu hover:bg-yellow transition-all duration-500 flex gap-x-4"
                        >
                            ajoute centre
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

export default AddCentre;
