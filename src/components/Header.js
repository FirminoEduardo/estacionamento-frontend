// Cabeçalho da aplicação
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white text-gray-800 p-4 shadow-sm">
      <nav>
        <ul className="flex justify-center space-x-6">
          <li>
            <Link to="/" className="text-lg font-medium hover:text-blue-500">
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/clientes"
              className="text-lg font-medium hover:text-blue-500"
            >
              Clientes
            </Link>
          </li>
          <li>
            <Link
              to="/vagas"
              className="text-lg font-medium hover:text-blue-500"
            >
              Vagas
            </Link>
          </li>
          <li>
            <Link
              to="/pagamentos"
              className="text-lg font-medium hover:text-blue-500"
            >
              Pagamentos
            </Link>
          </li>
          <li>
            <Link
              to="/relatorios"
              className="text-lg font-medium hover:text-blue-500"
            >
              Relatórios
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
