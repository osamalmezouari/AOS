import { CheckCircleOutline, Edit, Visibility } from "@mui/icons-material";
import { PiCopy } from "react-icons/pi";
import { Box } from "@mui/material";
import { useState } from "react";
import { DemadesDataType } from "../../interfaces/types";
import { useNavigate } from "react-router-dom";

interface Props {
  DataTable: DemadesDataType;
  loading: boolean;
}
const DemandesManageTable = ({ data }: Props) => {
  const navigate = useNavigate();
  const [toogleCopy, setToogleCopy] = useState({});
  const handleUpdate = (targetUpdateFormId: string , targetDemandeId : string) => {
    if (targetUpdateFormId === "1") {
      navigate(`/AOS/SousActivitie/updateMriage/${targetDemandeId}`, { replace: true });
    } else if (targetUpdateFormId === "4") {
      navigate(`/AOS/SousActivitie/updateRetrait/${targetDemandeId}`, { replace: true });
    } else if (targetUpdateFormId === "13") {
      navigate(`/AOS/SousActivitie/updateNaissance/${targetDemandeId}`, { replace: true });
    } else if (targetUpdateFormId === "2") {
      navigate(`/AOS/SousActivitie/updatePelerinage/${targetDemandeId}`, { replace: true });
    } else if (targetUpdateFormId === "6") {
      navigate(`/AOS/SousActivitie/updateCondoleance/${targetDemandeId}`, { replace: true });
    } else if (targetUpdateFormId === "5") {
      navigate(`/AOS/SousActivitie/updateMaladies/${targetDemandeId}`, { replace: true });
    } else if (targetUpdateFormId === "3") {
      navigate(`/AOS/SousActivitie/updatePrets/${targetDemandeId}`, { replace: true });
    } else if (targetUpdateFormId === "14") {
      navigate(`/AOS/SousActivitie/updaterentree-scolaire/${targetDemandeId}`, { replace: true });
    } else if (targetUpdateFormId === "15") {
      navigate(`/AOS/SousActivitie/updatelang/${targetDemandeId}`, { replace: true });
    } else if (targetUpdateFormId === "11") {
      navigate(`/AOS/SousActivitie/updateZoo/${targetDemandeId}`, { replace: true });
    } else if (targetUpdateFormId === "10") {
      navigate(`/AOS/SousActivitie/updateEsstivage/${targetDemandeId}`, { replace: true });
    } else if (targetUpdateFormId === "12") {
      navigate(`/AOS/SousActivitie/updateExcursion/${targetDemandeId}`, { replace: true });
    }
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
  return (
    <div className=" overflow-x-auto shadow-md sm:rounded-lg  ">
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
          {data &&
            data.map((demande) => {
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

                  <td className="px-6 py-4">{demande.effet.slice(0, 10)}</td>
                  <td>
                    <Box
                      className="flex gap-1 items-center justify-start"
                      component={"div"}
                    >
                      {demande.Status === null ||
                      demande.Status === "En traitement" ? (
                        ""
                      ) : (
                        <Visibility
                          onClick={() =>
                            navigate(
                              `/AOS/Profile/Activitie/Gererdemandes/demandeObservation/${demande.Observation}/${demande.Status}`
                            )
                          }
                          fontSize="large"
                          className="hover:bg-green-400 w-12 p-2 rounded hover:text-white cursor-pointer duration-500 transition-all"
                        />
                      )}
                      {demande.Status !== "Approuvée" && (
                        <Edit
                          onClick={() => handleUpdate(demande.SousActivite.id , demande.id)}
                          fontSize="large"
                          className="hover:bg-blue-400 w-12 p-2 rounded hover:text-white cursor-pointer duration-500 transition-all"
                        />
                      )}
                    </Box>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};
export default DemandesManageTable;
