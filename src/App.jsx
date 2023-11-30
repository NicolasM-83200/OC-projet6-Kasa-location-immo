import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Error from "./pages/Error";
import Accomodation from "./pages/Accomodation";

// Création du composant App
const App = () => {
  return (
    // On utilise le composant BrowserRouter de react-router-dom pour créer les routes de l'application
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* // On utilise le composant Route de react-router-dom pour créer une route vers la page de détail de chaque logement */}
        <Route
          path="/accomodation/:accomodationId"
          element={<Accomodation />}
        />
        <Route path="/about" element={<About />} />
        {/* // On utilise le composant Route de react-router-dom pour créer une route vers la page d'erreur */}
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
