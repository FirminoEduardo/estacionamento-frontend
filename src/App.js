import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Clientes from "./pages/Clientes";
import Vagas from "./pages/Vagas";
import Pagamentos from "./pages/Pagamentos";
import Relatorios from "./pages/Relatorios";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/clientes" element={<Clientes />} />
        <Route path="/vagas" element={<Vagas />} />
        <Route path="/pagamentos" element={<Pagamentos />} />
        <Route path="/relatorios" element={<Relatorios />} />
      </Routes>
    </Router>
  );
};

export default App;
