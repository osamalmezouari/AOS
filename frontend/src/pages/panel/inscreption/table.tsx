import {useEffect, useState} from "react";
import axios from "axios";
import {PORT} from "../../../../env.ts";
import Header from "../../../component/header.tsx";
import AdminSideBar from "../../../component/adminSidebar.tsx";
import {Box, Container} from "@mui/material";
import {PiCopy} from "react-icons/pi";
import {CheckCircleOutline,VerifiedRounded} from "@mui/icons-material";

const InscreptionTable = () => {
    const [DataTable, setDatatable] = useState([]);
    const [toogleCopy, setToogleCopy] = useState({});
    const Accepted = async (demandeId) => {
        try {
            const res = await axios.patch(
                `http://localhost:${PORT}/inscriptions/${demandeId}`
            );
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    }
    const handleCopy = async (demandeId: string) => {
        console.log(demandeId);
        try {
            await navigator.clipboard.writeText(demandeId);
            if (toogleCopy.demandeId) {
                setToogleCopy({
                    ...toogleCopy,
                    [demandeId]: false,
                });
            } else {
                setToogleCopy({
                    [demandeId]: true,
                });
            }
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        const inscreptionData = async () => {
            try {
                const res = await axios.get(
                    `http://localhost:${PORT}/inscriptions`
                );
                const data = await res.data;
                setDatatable(data);
            } catch (error) {
                console.log(error);
            }
        };
        inscreptionData();
    }, []);
    useEffect(() => {
        console.log(DataTable);
    }, [DataTable]);
    return <>
        <Header />
        <AdminSideBar />
        <div className=" overflow-x-auto shadow-md sm:rounded-lg pt-[150px]  ">
            <Container maxWidth={"lg"}>
                <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 h-16">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Code
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Status
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Annee
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Matricule
                        </th>

                        <th scope="col" className="px-6 py-3">
                            Actions
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {DataTable &&
                        DataTable.map((demande) => {
                            return (
                                <tr className="bg-white border-b hover:bg-gray-50">
                                    <th
                                        scope="row"
                                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap flex items-center gap-2"
                                    >
                                        #{demande.id.slice(0, 5)}...{" "}
                                        {!toogleCopy[demande.id] ? (
                                            <PiCopy
                                                className={
                                                    toogleCopy[demande.id]
                                                        ? `text-bleu-500 cursor-pointer text-[14px]`
                                                        : `cursor-pointer`
                                                }
                                                onClick={() => handleCopy(demande.id)}
                                            />
                                        ) : (
                                            <CheckCircleOutline
                                                className={
                                                    toogleCopy[demande.id]
                                                        ? `text-green-500 cursor-pointer text-[14px] `
                                                        : ``
                                                }
                                                onClick={() => handleCopy(demande.id)}
                                            />
                                        )}
                                    </th>
                                    {demande.status ? (
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-2 font-secend">
                                                <div className="w-2 h-2 rounded-full bg-green-400"></div>
                                                <p>Approuvée</p>
                                            </div>
                                        </td>
                                    ) : (
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-2 font-secend">
                                                <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                                                <p>En attend</p>
                                            </div>
                                        </td>
                                    )}

                                    <td className="px-6 py-4">
                                        {demande.annee}
                                    </td>
                                    <td className="px-6 py-4">
                                        {demande.Personel.matricule}
                                    </td>
                                    <td>
                                        {   !demande.status ?
                                            <Box
                                                className="flex gap-1 items-center justify-start"
                                                component={"div"}
                                            >
                                                <VerifiedRounded
                                                    onClick={()=>Accepted(demande.id)}
                                                    fontSize="large"
                                                    className="hover:bg-blue-400 w-12 p-2 rounded hover:text-white cursor-pointer duration-500 transition-all"
                                                />
                                            </Box> : ""
                                        }

                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </Container>
        </div>
    </>
}
export default InscreptionTable