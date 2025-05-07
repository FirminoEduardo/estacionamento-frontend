// Página principal com visão geral do estacionamento
import React from "react";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 p-8 space-y-6">
        <h2 className="text-3xl font-semibold text-center text-gray-900">
          Visão Geral
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
            <h3 className="text-xl font-medium text-gray-700">Clientes</h3>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
            <h3 className="text-xl font-medium text-gray-700">Vagas</h3>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
            <h3 className="text-xl font-medium text-gray-700">Pagamentos</h3>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
