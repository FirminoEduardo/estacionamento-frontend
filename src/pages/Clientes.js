import React, { useState } from "react";
import InputField from "../components/InputField";
import Button from "../components/Button";
import { cadastrarCliente } from "../services/api"; // Importe a função que interage com a API

const Clientes = () => {
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [tipo_cliente, setTipoCliente] = useState("Horista"); // Alterado para tipo_cliente (campo esperado pelo backend)
  const [contato, setContato] = useState(""); // Novo campo de contato

  const handleSubmit = async (e) => {
    e.preventDefault(); // Previne o comportamento padrão de envio de formulário
    const cliente = { nome, cpf, tipo_cliente, contato };

    try {
      // Chama a função que envia os dados para o backend
      const response = await cadastrarCliente(cliente);

      // Exibe a resposta no console (opcional)
      console.log("Cliente cadastrado:", response);

      // Aqui você pode limpar os campos ou exibir uma mensagem de sucesso
      setNome("");
      setCpf("");
      setTipoCliente("Horista");
      setContato("");
    } catch (error) {
      console.error("Erro ao cadastrar cliente:", error);
    }
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl font-semibold">Cadastro de Clientes</h2>
      <form className="mt-6" onSubmit={handleSubmit}>
        {" "}
        {/* Chama handleSubmit ao enviar o formulário */}
        <InputField
          label="Nome"
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <InputField
          label="CPF"
          type="text"
          value={cpf}
          onChange={(e) => setCpf(e.target.value)}
        />
        <div className="mb-4">
          <label className="block mb-2">Tipo de Cliente</label>
          <select
            className="w-full p-2 border border-gray-300 rounded-md"
            value={tipo_cliente} // Usando tipo_cliente
            onChange={(e) => setTipoCliente(e.target.value)} // Atualizando tipo_cliente
          >
            <option value="Horista">Horista</option>
            <option value="Mensalista">Mensalista</option>
          </select>
        </div>
        {/* Novo campo de Contato */}
        <InputField
          label="Contato"
          type="text"
          value={contato}
          onChange={(e) => setContato(e.target.value)}
        />
        <Button
          label="Cadastrar Cliente"
          type="submit" // Usando type="submit" ao invés de onClick para seguir as boas práticas
          className="mt-4"
        />
      </form>
    </div>
  );
};

export default Clientes;
