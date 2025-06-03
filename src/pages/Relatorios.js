import React, { useEffect, useState } from "react";
import { buscarVagas, buscarPagamentos, buscarClientes } from "../services/api"; // Importar as funções de API

const Relatorios = () => {
  const [vagas, setVagas] = useState([]);
  const [pagamentos, setPagamentos] = useState([]);
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    // Função para buscar os dados do backend
    const fetchData = async () => {
      try {
        const vagasData = await buscarVagas();
        setVagas(vagasData);

        const pagamentosData = await buscarPagamentos();
        setPagamentos(pagamentosData);

        const clientesData = await buscarClientes();
        setClientes(clientesData);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    };

    fetchData(); // Chama a função de busca ao carregar o componente
  }, []); // A dependência vazia garante que a busca seja feita apenas uma vez após o componente ser montado

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 p-8 space-y-6">
        <h2 className="text-3xl font-semibold text-center text-gray-900">
          Relatórios
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Relatório de Vagas */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
            <h3 className="text-xl font-medium text-gray-700">
              Relatório de Vagas
            </h3>
            <ul className="text-gray-600">
              {vagas.map((vaga) => (
                <li key={vaga.id}>
                  {vaga.tipo_vaga} - {vaga.status} - Capacidade:{" "}
                  {vaga.capacidade}
                </li>
              ))}
            </ul>
          </div>

          {/* Relatório de Pagamentos */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
            <h3 className="text-xl font-medium text-gray-700">
              Relatório de Pagamentos
            </h3>
            <ul className="text-gray-600">
              {pagamentos.map((pagamento) => (
                <li key={pagamento.id}>
                  Valor: {pagamento.valor} - {pagamento.tipo_pagamento} -
                  Status: {pagamento.status_pagamento}
                </li>
              ))}
            </ul>
          </div>

          {/* Relatório de Clientes */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
            <h3 className="text-xl font-medium text-gray-700">
              Relatório de Clientes
            </h3>
            <ul className="text-gray-600">
              {clientes.map((cliente) => (
                <li key={cliente.id}>
                  {cliente.nome} - {cliente.tipo_cliente} - {cliente.contato}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Relatorios;
