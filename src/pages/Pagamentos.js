import React, { useState } from "react";
import InputField from "../components/InputField";
import Button from "../components/Button";
import { registrarPagamento } from "../services/api"; // Função para registrar o pagamento

const Pagamentos = () => {
  const [idCliente, setIdCliente] = useState("");
  const [valor, setValor] = useState("");
  const [tipoPagamento, setTipoPagamento] = useState("Cartão");
  const [dataPagamento, setDataPagamento] = useState(""); // Novo campo de data de pagamento

  const handleSubmit = async (e) => {
    e.preventDefault(); // Previne o comportamento padrão de envio de formulário

    const pagamento = {
      valor,
      tipo_pagamento: tipoPagamento, // Correção aqui, conforme esperado no backend
      status_pagamento: "Pago", // Definindo um status fixo por enquanto
      data_pagamento: dataPagamento,
      id_cliente: idCliente, // ID do cliente
    };

    try {
      // Chama a função que envia os dados para o backend
      const response = await registrarPagamento(pagamento);

      // Exibe a resposta no console (opcional)
      console.log("Pagamento registrado:", response);

      // Limpa os campos ou exibe uma mensagem de sucesso
      setValor("");
      setTipoPagamento("Cartão");
      setDataPagamento("");
      setIdCliente("");
    } catch (error) {
      console.error("Erro ao registrar pagamento:", error);
    }
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl font-semibold">Registro de Pagamentos</h2>
      <form className="mt-6" onSubmit={handleSubmit}>
        <InputField
          label="ID do Cliente"
          type="text"
          value={idCliente}
          onChange={(e) => setIdCliente(e.target.value)}
        />
        <InputField
          label="Valor"
          type="number"
          value={valor}
          onChange={(e) => setValor(e.target.value)}
        />
        <div className="mb-4">
          <label className="block mb-2">Tipo de Pagamento</label>
          <select
            className="w-full p-2 border border-gray-300 rounded-md"
            value={tipoPagamento}
            onChange={(e) => setTipoPagamento(e.target.value)}
          >
            <option value="Cartão">Cartão</option>
            <option value="Dinheiro">Dinheiro</option>
            <option value="Pix">Pix</option>
          </select>
        </div>
        <InputField
          label="Data de Pagamento"
          type="date"
          value={dataPagamento}
          onChange={(e) => setDataPagamento(e.target.value)}
        />
        <Button
          label="Registrar Pagamento"
          type="submit" // Usando type="submit" ao invés de onClick para enviar o formulário
          className="mt-4"
        />
      </form>
    </div>
  );
};

export default Pagamentos;
