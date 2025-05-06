// Cabeçalho da aplicação
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-blue-500 p-4 text-white">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">Estacionamento</h1>
        <nav>
          <Link to="/" className="mx-4">
            Home
          </Link>
          <Link to="/clientes" className="mx-4">
            Clientes
          </Link>
          <Link to="/vagas" className="mx-4">
            Vagas
          </Link>
          <Link to="/pagamentos" className="mx-4">
            Pagamentos
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
