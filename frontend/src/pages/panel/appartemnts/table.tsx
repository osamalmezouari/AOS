import {useEffect, useState} from "react";
import axios from "axios";
import {PORT} from "../../../../env.ts";
import Header from "../../../component/header.tsx";
import AdminSideBar from "../../../component/adminSidebar.tsx";
import {Box, Button, Container} from "@mui/material";
import {Edit} from "@mui/icons-material";
import {useNavigate} from "react-router-dom";

const AppartementsTable = () => {
    const [DataTable, setDatatable] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        const centres = async () => {
            try {
                const res = await axios.get(
                    `http://localhost:${PORT}/appartements`
                );
                const data = await res.data;
                setDatatable(data);
            } catch (error) {
                console.log(error);
            }
        };
        centres();
    }, []);
    useEffect(() => {
        console.log(DataTable);
    }, [DataTable]);
    return <>
        <Header />
        <AdminSideBar />
        <div className={" overflow-x-auto shadow-md sm:rounded-lg pt-[150px]"}>
            <Container maxWidth={"lg"}>
                <Button className={'bg-blue-500  text-white'} onClick={()=>navigate("/AOS/Admin/Dashboard/demande/Appartements/Ajoute" , {replace : true})}> Ajoute un Appartement</Button>
                <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 h-16">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            numero
                        </th>
                        <th scope="col" className="px-6 py-3">
                            centre
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
                                        className="px-6 py-4 w-max font-medium text-gray-900 whitespace-nowrap flex items-center gap-2"
                                    >
                                        {demande.numero}
                                    </th>
                                    <td className="px-6 py-4">
                                        {demande.centre.centreAr}
                                    </td>
                                    {/*<td>*/}
                                    {/*    <Box*/}
                                    {/*        className="flex gap-1 items-center justify-start"*/}
                                    {/*        component={"div"}*/}
                                    {/*    >*/}
                                    {/*        <Edit*/}
                                    {/*            // onClick={() =>}*/}
                                    {/*            fontSize="large"*/}
                                    {/*            className="hover:bg-blue-400 w-12 p-2 rounded hover:text-white cursor-pointer duration-500 transition-all"*/}
                                    {/*        />*/}
                                    {/*    </Box>*/}
                                    {/*</td>*/}
                                </tr>
                            );
                        })}
                    </tbody>
                </table>

            </Container>
        </div>
    </>
}
export default AppartementsTable