// src/pages/Relatorios.js
import React from "react";

const Relatorios = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 p-8 space-y-6">
        <h2 className="text-3xl font-semibold text-center text-gray-900">
          Relatórios
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Exemplo de cartões de relatório */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
            <h3 className="text-xl font-medium text-gray-700">
              Relatório de Vagas
            </h3>
            <p className="text-gray-600">
              Aqui você pode ver a ocupação das vagas.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
            <h3 className="text-xl font-medium text-gray-700">
              Relatório de Pagamentos
            </h3>
            <p className="text-gray-600">
              Veja os pagamentos realizados pelos clientes.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
            <h3 className="text-xl font-medium text-gray-700">
              Relatório de Clientes
            </h3>
            <p className="text-gray-600">
              Aqui você encontra os dados dos clientes.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Relatorios;
