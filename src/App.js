import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Clientes from "./pages/Clientes";
import Vagas from "./pages/Vagas";
import Pagamentos from "./pages/Pagamentos";
import Relatorios from "./pages/Relatorios";
import Header from "./components/Header"; // Certifique-se de que o Header foi importado corretamente

const App = () => {
  return (
    <Router>
      <Header /> {/* O Header é renderizado aqui */}
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
