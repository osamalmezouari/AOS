import "./styles/App.css";
import Landing from "./pages/Landing.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./pages/register.tsx";
import Login from "./pages/login.tsx";
import SousActivitieDetails from "./pages/SousActivitieDetails.tsx";
import Marriage from "./component/forms/marriage.tsx";
import Retrait from "./component/forms/retrait.tsx";
import Naissance from "./component/forms/naissance.tsx";

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
            element={<Retrait />}
            path="AOS/SousActivitie/DemandeRetrait"
          />
          <Route
            element={<Naissance />}
            path={"AOS/SousActivitie/DemandeNaissance"}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
