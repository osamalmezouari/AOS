import "./styles/App.css";
import Landing from "./pages/Landing.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./pages/register.tsx";
import Login from "./pages/login.tsx";
import SousActivitieDetails from "./pages/SousActivitieDetails.tsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Landing />} path="AOS" />
          <Route element={<Login />} path="AOS/SeConecter" />
          <Route element={<Register />} path="AOS/Inscreption" />
          <Route element={<SousActivitieDetails />} path="AOS/SousActivitie/:id" />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
