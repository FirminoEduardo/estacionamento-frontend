// Página principal com visão geral do estacionamento
import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const Home = () => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-8">
        <Header />
        <h2 className="text-2xl font-semibold">Visão Geral</h2>
        <div className="grid grid-cols-3 gap-4 mt-4">
          <div className="bg-white p-4 border rounded-md shadow-md">
            Clientes
          </div>
          <div className="bg-white p-4 border rounded-md shadow-md">Vagas</div>
          <div className="bg-white p-4 border rounded-md shadow-md">
            Pagamentos
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
