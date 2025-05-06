import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api", // URL do seu backend
  timeout: 1000,
});

export const cadastrarCliente = async (cliente) => {
  try {
    const response = await api.post("/clientes", cliente);
    return response.data;
  } catch (error) {
    console.error("Erro ao cadastrar cliente:", error);
  }
};
