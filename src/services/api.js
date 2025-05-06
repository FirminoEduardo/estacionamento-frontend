// Funções para interagir com a API

import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api", // URL do seu backend
  timeout: 1000,
});

// Função para cadastrar um cliente
export const cadastrarCliente = async (cliente) => {
  try {
    const response = await api.post("/clientes", cliente);
    return response.data;
  } catch (error) {
    console.error("Erro ao cadastrar cliente:", error);
  }
};

// Função para cadastrar uma vaga
export const cadastrarVaga = async (vaga) => {
  try {
    const response = await api.post("/vagas", vaga);
    return response.data;
  } catch (error) {
    console.error("Erro ao cadastrar vaga:", error);
  }
};

// Função para registrar um pagamento
export const registrarPagamento = async (pagamento) => {
  try {
    const response = await api.post("/pagamentos", pagamento);
    return response.data;
  } catch (error) {
    console.error("Erro ao registrar pagamento:", error);
  }
};
