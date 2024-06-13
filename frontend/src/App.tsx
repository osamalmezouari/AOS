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
          <Route element={<UpdateExcursion />} path="AOS/SousActivitie/updateExcursion/:demandeId"/>
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
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
