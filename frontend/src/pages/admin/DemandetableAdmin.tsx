import { CheckCircleOutline, Edit, Visibility } from "@mui/icons-material";
import { PiCopy } from "react-icons/pi";
import { Box, Container } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Header from "../../component/header";
import AdminSideBar from "../../component/adminSidebar";
import { PORT } from "../../../env";

const AdminDemandeTable = () => {
  const { id } = useParams();
  const [DataTable, setDatatable] = useState([]);
  const navigate = useNavigate();
  const [toogleCopy, setToogleCopy] = useState({});
  const handleUpdate = (
    targetSousActivitie: string,
    targetDemandeId: string,
    targetpersonelId: string
  ) => {
    if (
      targetSousActivitie === "1" ||
      targetSousActivitie === "4" ||
      targetSousActivitie === "5" ||
      targetSousActivitie === "6" ||
      targetSousActivitie === "13" ||
      targetSousActivitie === "14" ||
      targetSousActivitie === "15"
    ) {
      navigate(`FormOne/${targetDemandeId}/${targetpersonelId}/${targetSousActivitie}`);
    } else if (
      targetSousActivitie === "2" ||
      targetSousActivitie === "11" ||
      targetSousActivitie === "12"
    ) {
      navigate(`FormTwo/${targetDemandeId}/${targetpersonelId}/${targetSousActivitie}`);
    } else if (targetSousActivitie === "17") {
      navigate(`FormThree/${targetDemandeId}/${targetpersonelId}/${targetSousActivitie}`);
    } else if (targetSousActivitie === "10") {
      navigate(`FormFour/${targetDemandeId}/${targetpersonelId}/${targetSousActivitie}`);
    }
  };
  const HandleView = (demande) => {
    navigate(`view/${demande.id}`);
  };
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
    const personeldemandesDetails = async () => {
      try {
        const res = await axios.get(
          `http://localhost:${PORT}/personel/AdminSingleSousActivitiesdemandesWithDetails/${id}`
        );
        const data = await res.data;
        setDatatable(data);
      } catch (error) {
        console.log(error);
      }
    };
    personeldemandesDetails();
  }, [id]);
  useEffect(() => {
    console.log(DataTable);
  }, [DataTable]);
  return (
    <>
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
                  Date
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
                      {demande.Status === null ? (
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2 font-secend">
                            <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                            <p>Pas encore Vue</p>
                          </div>
                        </td>
                      ) : (
                        ""
                      )}
                      {demande.Status === "Documents requis" ? (
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2 font-secend">
                            <div className="w-2 h-2 rounded-full bg-yellow"></div>
                            <p>Documents requis</p>
                          </div>
                        </td>
                      ) : (
                        ""
                      )}
                      {demande.Status === "Refusée" ? (
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2 font-secend">
                            <div className="w-2 h-2 rounded-full bg-red-400"></div>
                            <p>Refusée</p>
                          </div>
                        </td>
                      ) : (
                        ""
                      )}
                      {demande.Status === "En traitement" ? (
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2 font-secend">
                            <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                            <p>En traitement</p>
                          </div>
                        </td>
                      ) : (
                        ""
                      )}
                      {demande.Status === "Approuvée" ? (
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2 font-secend">
                            <div className="w-2 h-2 rounded-full bg-green-400"></div>
                            <p>Approuvée</p>
                          </div>
                        </td>
                      ) : (
                        ""
                      )}

                      <td className="px-6 py-4">
                        {demande.effet.slice(0, 10)}
                      </td>
                      <td>
                        <Box
                          className="flex gap-1 items-center justify-start"
                          component={"div"}
                        >
                          <Visibility
                            onClick={() => HandleView(demande)}
                            fontSize="large"
                            className="hover:bg-green-400 w-12 p-2 rounded hover:text-white cursor-pointer duration-500 transition-all"
                          />
                          <Edit
                            onClick={() =>
                              handleUpdate(
                                demande.SousActivite.id,
                                demande.id,
                                demande.personelId
                              )
                            }
                            fontSize="large"
                            className="hover:bg-blue-400 w-12 p-2 rounded hover:text-white cursor-pointer duration-500 transition-all"
                          />
                        </Box>
                      </td>
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
export default AdminDemandeTable;
