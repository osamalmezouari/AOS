import { useEffect, useState } from "react";
import axios from "axios";
import { PORT } from "../../../../env.ts";
import Header from "../../../component/header.tsx";
import AdminSideBar from "../../../component/adminSidebar.tsx";
import { Box, Button, Container } from "@mui/material";
import { Edit } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const PersonesTable = () => {
  const [DataTable, setDatatable] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const persones = async () => {
      try {
        const res = await axios.get(`http://localhost:${PORT}/personel`);
        const data = await res.data;
        setDatatable(data);
      } catch (error) {
        console.log(error);
      }
    };
    persones();
  }, []);
  useEffect(() => {
    console.log(DataTable);
  }, [DataTable]);
  return (
    <>
      <Header />
      <AdminSideBar />
      <div className={" overflow-x-auto shadow-md sm:rounded-lg pt-[150px]"}>
        <Container maxWidth={"lg"}>
          <Button
            className={"bg-blue-500  text-white"}
            onClick={() =>
              navigate("/AOS/Admin/Dashboard/demande/persones/Ajoute", {
                replace: true,
              })
            }
          >
            {" "}
            Ajoute un Personne
          </Button>
          <table className="w-full text-sm text-left rtl:text-right text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 h-16">
              <tr>
                <th scope="col" className="px-6 py-3">
                  matricule
                </th>
                <th scope="col" className="px-6 py-3">
                nom_fr
                </th>
                <th scope="col" className="px-6 py-3">
                nom_ar
                </th>
                <th scope="col" className="px-6 py-3">
                prenom_ar
                </th>
                <th scope="col" className="px-6 py-3">
                prenom_fr
                </th>
                <th scope="col" className="px-6 py-3">
                naissance
                </th>
                <th scope="col" className="px-6 py-3">
                email
                </th>
                <th scope="col" className="px-6 py-3">
                echelle
                </th>
                <th scope="col" className="px-6 py-3">
                isAdmin
                </th>
                <th scope="col" className="px-6 py-3">
                Structure
                </th>
                <th scope="col" className="px-6 py-3">
                password
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
                        {demande.matricule}
                      </th>
                      <td className="px-6 py-4">{demande.nom_fr}</td>
                      <td className="px-6 py-4">{demande.nom_ar}</td>
                      <td className="px-6 py-4">{demande.prenom_fr}</td>
                      <td className="px-6 py-4">{demande.prenom_ar}</td>
                      <td className="px-6 py-4">{demande.naissance}</td>
                      <td className="px-6 py-4">{demande.email}</td>
                      <td className="px-6 py-4">{demande.echelle}</td>
                      <td className="px-6 py-4">{demande.isAdmin ? "Yes" : "No"}</td>
                      <td className="px-6 py-4">{demande.Affectation?.abrviation}</td>
                      <td className="px-6 py-4">{demande.password}</td>
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
  );
};
export default PersonesTable;
