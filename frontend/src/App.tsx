import "./styles/App.css";
import Landing from "./pages/Landing.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./pages/register.tsx";
import Login from "./pages/login.tsx";
import SousActivitieDetails from "./pages/SousActivitieDetails.tsx";
import Marriage from "./component/Createforms/marriage.tsx";
import Retrait from "./component/Createforms/retrait.tsx";
import Naissance from "./component/Createforms/naissance.tsx";
import Pelerinage from "./component/Createforms/pelerinage.tsx";
import Condoleance from "./component/Createforms/condoleance.tsx";
import Maladies from "./component/Createforms/Maladies.tsx";
import Prets from "./component/Createforms/Prets.tsx";
import RentreeScolaire from "./component/Createforms/rentreeScolaire.tsx";
import Lang from "./component/Createforms/lang.tsx";
import Zoo from "./component/Createforms/zoo.tsx";
import Esstivage from "./component/Createforms/Esstivage.tsx";
import Excursion from "./component/Createforms/Excursion.tsx";
import Profile from "./pages/profile/Dashboard.tsx";
import Activitie from "./pages/profile/Activitie.tsx";
import SousActivitieDatatable from "./pages/profile/SousActivitie.tsx";
import ViewCard from "./pages/profile/ObsrvCard.tsx";
import UpdateMarriage from "./component/Updateforms/updatemarriage.tsx";
import UpdatePelerinage from "./component/Updateforms/updatepelerinage.tsx";
import UpdatePrets from "./component/Updateforms/updatePrets.tsx";
import UpdateRetrait from "./component/Updateforms/updateRetrait.tsx";
import UpdateMaladie from "./component/Updateforms/updateMaladie.tsx";
import UpdateCondoleance from "./component/Updateforms/updatecondoleance.tsx";
import UpdateNaissance from "./component/Updateforms/updatenaissance.tsx";
import UpdateRentreeScolaire from "./component/Updateforms/updaterentreeScolaire.tsx";
import UpdateLang from "./component/Updateforms/updatelang.tsx";
import UpdateZoo from "./component/Updateforms/updateZoo.tsx";
import UpdateEstivage from "./component/Updateforms/updateEsstivage.tsx";
import UpdateExcursion from "./component/Updateforms/updateExcursion.tsx";
import AdminDashboard from "./pages/admin/admindashboard.tsx";
import AdminDemandeTable from "./pages/admin/DemandetableAdmin.tsx";
import MariageView from "./pages/admin/View/mariageView.tsx";
import EstivageView from "./pages/admin/View/EstivageView.tsx";
import CondoleanceView from "./pages/admin/View/condoleanceView.tsx";
import PelerinageView from "./pages/admin/View/pelerinageView.tsx";
import PretsView from "./pages/admin/View/pretView.tsx";
import RetraitView from "./pages/admin/View/retraitView.tsx";
import MaladieView from "./pages/admin/View/MaladieView.tsx";
import ZooView from "./pages/admin/View/zooView.tsx";
import RentreScolaireView from "./pages/admin/View/rentreScolaireView.tsx";
import NaissanceView from "./pages/admin/View/naissanceView.tsx";
import SoutienLangView from "./pages/admin/View/soutienlangView.tsx";
import ExcursionView from "./pages/admin/View/ExcurssionView.tsx";
import FormOne from "./pages/admin/update/FormOne.tsx";
import FormTwo from "./pages/admin/update/FormTwo.tsx";
import FormThree from "./pages/admin/update/FormThree.tsx";
import InscreptionTable from "./pages/panel/inscreption/table.tsx";
import SousActivtiesTable from "./pages/panel/sousActivities/table.tsx";
import CentreTable from "./pages/panel/centresEsstivage/table.tsx";
import AddCentre from "./pages/panel/centresEsstivage/create.tsx";
import AppartementsTable from "./pages/panel/appartemnts/table.tsx";
import AddAppartement from "./pages/panel/appartemnts/create.tsx";
import StructureTable from "./pages/panel/structures/table.tsx";
import AddAffectation from "./pages/panel/structures/create.tsx";
import PersonesTable from "./pages/panel/perssones/table.tsx";
import AddPersonel from "./pages/panel/perssones/create.tsx";
import ExcursionTable from "./pages/panel/excursion/table.tsx";
import AddExcursion from "./pages/panel/excursion/create.tsx";
import Handicape from "./component/Createforms/handicape.tsx";
import UpdateHandicape from "./component/Updateforms/updateHandicape.tsx";
import Sport from "./component/Createforms/sport.tsx";
import UpdateSport from "./component/Updateforms/updateSport.tsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Landing />} path="AOS" />
          <Route element={<Login />} path="AOS/SeConecter" />
          <Route element={<Register />} path="AOS/Inscreption" />
          <Route
            element={<SousActivitieDetails />}
            path="AOS/SousActivitie/:id"
          />
          <Route
            element={<Marriage />}
            path="AOS/SousActivitie/DemandeMriage"
          />
          <Route
            element={<UpdateMarriage />}
            path="AOS/SousActivitie/updateMriage/:demandeId"
          />
          <Route
            element={<Retrait />}
            path="AOS/SousActivitie/DemandeRetrait"
          />
          <Route
            element={<Naissance />}
            path={"AOS/SousActivitie/DemandeNaissance"}
          />
          <Route
            element={<UpdateNaissance />}
            path="AOS/SousActivitie/updateNaissance/:demandeId"
          />
          <Route
            element={<UpdateRentreeScolaire />}
            path="AOS/SousActivitie/updaterentree-scolaire/:demandeId"
          />
          <Route element={<Pelerinage />} path="AOS/SousActivitie/Pelerinage" />
          <Route
            element={<UpdatePelerinage />}
            path="AOS/SousActivitie/updatePelerinage/:demandeId"
          />

          <Route
            element={<Condoleance />}
            path={"AOS/SousActivitie/Condoleance"}
          />
          <Route path={'/AOS/SousActivitie/Handicape'} element={<Handicape />}/>
          <Route path={'/AOS/SousActivitie/Sport'} element={<Sport />}/>
          <Route element={<Maladies />} path={"AOS/SousActivitie/Maladies"} />
          <Route
            element={<UpdateCondoleance />}
            path={"/AOS/SousActivitie/updateCondoleance/:demandeId"}
          />
          <Route
            element={<UpdateLang />}
            path={"/AOS/SousActivitie/updatelang/:demandeId"}
          />
          <Route
            element={<UpdateZoo />}
            path="/AOS/SousActivitie/updateZoo/:demandeId"
          />
          <Route element={<UpdateHandicape />} path={'AOS/SousActivitie/updateHandicape/:demandeId'} />
          <Route element={<UpdateSport />} path={'AOS/SousActivitie/updateSport/:demandeId'} />

          <Route
            element={<UpdateEstivage />}
            path={"/AOS/SousActivitie/updateEsstivage/:demandeId"}
          />
          <Route
            element={<RentreeScolaire />}
            path={"/AOS/SousActivitie/rentree-scolaire"}
          />
          <Route element={<Prets />} path={"/AOS/SousActivitie/Prets"} />
          <Route
            element={<UpdatePrets />}
            path={"AOS/SousActivitie/updatePrets/:demandeId"}
          />
          <Route
            element={<UpdateMaladie />}
            path={"AOS/SousActivitie/updateMaladies/:demandeId"}
          />
          <Route
            element={<UpdateExcursion />}
            path="AOS/SousActivitie/updateExcursion/:demandeId"
          />
          <Route element={<Lang />} path={"/AOS/SousActivitie/Lang"} />
          <Route element={<Zoo />} path={"/AOS/SousActivitie/Zoo"} />
          <Route
            element={<Esstivage />}
            path={"/AOS/SousActivitie/Esstivage"}
          />
          <Route
            element={<Excursion />}
            path="AOS/SousActivitie/Excursion"
          ></Route>
          <Route element={<Profile />} path="/AOS/Profile/dashboard" />
          <Route
            element={<Activitie />}
            path="/AOS/Profile/Activitie/:id"
          ></Route>

          <Route
            element={<SousActivitieDatatable />}
            path="/AOS/Profile/Activitie/Gererdemandes/:id"
          ></Route>
          <Route
            element={<ViewCard />}
            path="/AOS/Profile/Activitie/Gererdemandes/demandeObservation/:observInfo/:Status"
          ></Route>
          <Route
            element={<UpdateRetrait />}
            path="AOS/SousActivitie/updateRetrait/:demandeId"
          />
          <Route element={<AdminDashboard />} path={"/AOS/Admin/Dashbaord"} />
          <Route element={<h1>Not found</h1>} path={"*"} />
          <Route
            path={"/AOS/Admin/Dashboard/demande/:id"}
            element={<AdminDemandeTable />}
          />
          <Route
            path={"/AOS/Admin/Dashboard/demande/1/view/:demandeId"}
            element={<MariageView />}
          />

          <Route
            path="/AOS/Admin/Dashboard/demande/2/view/:demandeId"
            element={<PelerinageView />}
          />
          <Route
            path="/AOS/Admin/Dashboard/demande/3/view/:demandeId"
            element={<PretsView />}
          />
          <Route
            path="/AOS/Admin/Dashboard/demande/4/view/:demandeId"
            element={<RetraitView />}
          />
          <Route
            path="/AOS/Admin/Dashboard/demande/5/view/:demandeId"
            element={<MaladieView />}
          />
          <Route
            path="/AOS/Admin/Dashboard/demande/6/view/:demandeId"
            element={<CondoleanceView />}
          />
          <Route
            path="/AOS/Admin/Dashboard/demande/10/view/:demandeId"
            element={<EstivageView />}
          />
          <Route
            path="/AOS/Admin/Dashboard/demande/11/view/:demandeId"
            element={<ZooView />}
          />
          <Route
            path="/AOS/Admin/Dashboard/demande/13/view/:demandeId"
            element={<NaissanceView />}
          />
          <Route
            path="/AOS/Admin/Dashboard/demande/14/view/:demandeId"
            element={<RentreScolaireView />}
          />
          <Route
            path="/AOS/Admin/Dashboard/demande/15/view/:demandeId"
            element={<SoutienLangView />}
          />
          <Route
            path="/AOS/Admin/Dashboard/demande/12/view/:demandeId"
            element={<ExcursionView />}
          />
          <Route
            path="/AOS/Admin/Dashboard/demande/:sousActivitieId/FormOne/:demandeId/:personelId/:sousActivitieId"
            element={<FormOne />}
          />
          <Route
            path="/AOS/Admin/Dashboard/demande/:sousActivitieId/FormTwo/:demandeId/:personelId/:sousActivitieId"
            element={<FormTwo />}
          />
          <Route
            path="/AOS/Admin/Dashboard/demande/:sousActivitieId/FormFour/:demandeId/:personelId/:sousActivitieId"
            element={<FormThree />}
          />
          <Route
              path="/AOS/Admin/Dashboard/demande/inscriptions"
              element={<InscreptionTable />}
          />
          <Route
              path="/AOS/Admin/Dashboard/demande/sousActivities"
              element={<SousActivtiesTable />}
          />
          <Route
              path="/AOS/Admin/Dashboard/demande/CentresEstivage"
              element={<CentreTable />}
          />
          <Route
              path="/AOS/Admin/Dashboard/demande/CentresEstivage/Ajoute"
              element={<AddCentre />}
          />
          <Route
              path="/AOS/Admin/Dashboard/demande/Appartements"
              element={<AppartementsTable/>}
          />
          <Route
              path="/AOS/Admin/Dashboard/demande/Appartements/Ajoute"
              element={<AddAppartement/>}
          />
          <Route
              path="/AOS/Admin/Dashboard/demande/Structures"
              element={<StructureTable />}
          />
          <Route
              path="/AOS/Admin/Dashboard/demande/Structures/Ajoute"
              element={<AddAffectation />}
          />
          <Route
              path="/AOS/Admin/Dashboard/demande/Persones"
              element={<PersonesTable />}
          />
          <Route
              path="/AOS/Admin/Dashboard/demande/Persones/Ajoute"
              element={<AddPersonel />}
          />
          <Route
              path="/AOS/Admin/Dashboard/demande/Excursion"
              element={<ExcursionTable />}
          />
          <Route
              path="/AOS/Admin/Dashboard/demande/Excursion/Ajoute"
              element={<AddExcursion />}
          />

        </Routes>

      </BrowserRouter>
    </>
  );
}
export default App;
