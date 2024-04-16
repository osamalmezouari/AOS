import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FooterAR } from "../components/Footer/FooterAR";
import { FooterFR } from "../components/Footer/FooterFR";
import { NavbareAR } from "../components/Navbar/NavbarAR";
import { FinanciereAR } from "../components/Aide-financiere/FinanciereAR";
import { FinanciereFR } from "../components/Aide-financiere/FinanciereFR";

import { PartnershipsAR } from "../components/partnerships/PartnershipsAR";
import { PartnershipsFR } from "../components/partnerships/PartnershipsFR";
import { FunAR } from "../components/Fun/FunAR";
import { FunFR } from "../components/Fun/FunFR";
import { Login } from "../components/Login/Login";
import { HomepageAR } from "./HomepageAR";
import { HomepageFR } from "./HomepageFR";

import { AssistanceAR } from "../components/assistance-medicale/AssistanceAR";
import { AssistanceFR } from "../components/assistance-medicale/AssistanceFR.jsx";
import { Dashboard } from "./Dashboard";
import { Option1AR } from "../components/Activities/option1AR";
import { Option1FR } from "../components/Activities/option1FR";
import { Option2AR } from "../components/Activities/option2AR";
import { Option2FR } from "../components/Activities/option2FR";
import { NavbarFR } from "../components/Navbar/NavbarFR";

function App() {
  const [language, setLanguage] = useState(() => {
    const storedLanguage = localStorage.getItem("language");
    return storedLanguage || "AR";
  });

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  const switchLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === "AR" ? "FR" : "AR"));
  };

  return (
    <div>
      <div style={{ textAlign: "right" }}>
        <center>
          <button
            onClick={switchLanguage}
            style={{
              color: "white",
              backgroundColor: "black",
              borderRadius: "20px",
              width: "20%",
            }}
          >
            {language === "AR" ? " Français " : "   العربية"}
          </button>
        </center>
        
      </div>
      {language === "AR" ? <NavbareAR /> : <NavbarFR/>}
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={language === "AR" ? <HomepageAR /> : <HomepageFR />}
          />

          <Route
            path="/Financiere"
            element={language === "AR" ? <FinanciereAR /> : <FinanciereFR />}
          />
          <Route
            path="/Assistance"
            element={language === "AR" ? <AssistanceAR /> : <AssistanceFR />}
          />
          <Route
            path="/Option1"
            element={language === "AR" ? <Option1AR /> : <Option1FR />}
          />
                    <Route
            path="/Option2"
            element={language === "AR" ? <Option2AR /> : <Option2FR />}
          />
          <Route
            path="/Partnerships"
            element={
              language === "AR" ? <PartnershipsAR /> : <PartnershipsFR />
            }
          />
          <Route
            path="/Fun"
            element={language === "AR" ? <FunAR /> : <FunFR />}
          />
          <Route path="/Login" element={<Login />} />
          <Route path="/Dashboard" element={<Dashboard />} />
        </Routes>
        {language === "AR" ? <FooterAR /> : <FooterFR />}
      </BrowserRouter>
    </div>
  );
}

export default App;
