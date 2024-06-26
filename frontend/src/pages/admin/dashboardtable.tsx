import { CheckCircleOutline } from "@mui/icons-material";
import { useState } from "react";
import { PiCopy } from "react-icons/pi";

const AdminDashboardTale = ({ data }) => {
  const [toogleCopy, setToogleCopy] = useState({});
  const handleCopy = async (demandeId: string) => {
    console.log(demandeId);
    try {
      await navigator.clipboard.writeText(demandeId);
      if (toogleCopy?.demandeId) {
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
    <div className=" shadow-md sm:rounded-lg  ">
      <table className="text-sm text-left rtl:text-right text-gray-500 block h-[220px] overflow-y-scroll">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 h-16 sticky top-0">
          <tr>
            <th scope="col" className="px-6 py-3 ">
              Code
            </th>
            <th scope="col" className="px-6 py-3">
              Status
            </th>
            <th scope="col" className="px-6 py-3">
              Date
            </th>
            <th scope="col" className="px-6 py-3">
              demande
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((demande) => {
            return (
              <tr className="bg-white border-b hover:bg-gray-50">
                <th
                  scope="row"
                  className=" px-6 py-4 font-medium text-gray-900 whitespace-nowrap flex items-center gap-2"
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
                  <td className="px-6 py-4 w-1/4">
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
                  <td className="px-6 py-4 w-1/4">
                    <div className="flex items-center gap-2 font-secend">
                      <div className="w-2 h-2 rounded-full bg-red-400"></div>
                      <p>Refusée</p>
                    </div>
                  </td>
                ) : (
                  ""
                )}
                {demande.Status === "En traitement" ? (
                  <td className="px-6 py-4 w-1/4">
                    <div className="flex items-center gap-2 font-secend">
                      <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                      <p>En traitement</p>
                    </div>
                  </td>
                ) : (
                  ""
                )}
                {demande.Status === "Approuvée" ? (
                  <td className="px-6 py-4 w-1/4">
                    <div className="flex items-center gap-2 font-secend">
                      <div className="w-2 h-2 rounded-full bg-green-400"></div>
                      <p>Approuvée</p>
                    </div>
                  </td>
                ) : (
                  ""
                )}
                <td className="px-6 py-4 w-1/4">
                  {demande.effet.slice(0, 10)}
                </td>
                <td className="px-6 py-4 w-1/4">
                  {demande.SousActivite.nomFr}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default AdminDashboardTale;
