import React, { useState } from "react";
import InputField from "../components/InputField";
import Button from "../components/Button";

const Pagamentos = () => {
  const [idCliente, setIdCliente] = useState("");
  const [valor, setValor] = useState("");
  const [tipoPagamento, setTipoPagamento] = useState("Cartão");
  const [dataPagamento, setDataPagamento] = useState(""); // Novo campo de data de pagamento

  const handleSubmit = () => {
    console.log("Pagamento registrado:", {
      idCliente,
      valor,
      tipoPagamento,
      dataPagamento,
    });
    // Aqui você faria a chamada para a API de pagamento, por exemplo:
    // registrarPagamento({ idCliente, valor, tipoPagamento, dataPagamento });
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl font-semibold">Registro de Pagamentos</h2>
      <form className="mt-6">
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
        {/* Novo campo de Data de Pagamento */}
        <InputField
          label="Data de Pagamento"
          type="date"
          value={dataPagamento}
          onChange={(e) => setDataPagamento(e.target.value)}
        />
        <Button
          label="Registrar Pagamento"
          onClick={handleSubmit}
          className="mt-4"
        />
      </form>
    </div>
  );
};

export default Pagamentos;
