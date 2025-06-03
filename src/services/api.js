// Função para cadastrar um cliente usando fetch
// Função para cadastrar um cliente usando fetch
export const cadastrarCliente = async (cliente) => {
  try {
    console.log("Enviando dados para o backend:", cliente); // Verificando os dados que estão sendo enviados

    const response = await fetch("http://localhost:3000/api/clientes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Garantindo que o backend espera JSON
      },
      body: JSON.stringify(cliente), // Convertendo o objeto 'cliente' para JSON
    });

    if (!response.ok) {
      const errorData = await response.json(); // Pegando a resposta de erro do servidor
      throw new Error(`Erro ao cadastrar cliente: ${errorData.message}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erro ao cadastrar cliente:", error);
  }
};

// Função para cadastrar uma vaga usando fetch
export const cadastrarVaga = async (vaga) => {
  try {
    const response = await fetch("http://localhost:3000/api/vagas", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Certificando-se de que o backend espera JSON
      },
      body: JSON.stringify(vaga), // Convertendo o objeto 'vaga' em JSON
    });

    if (!response.ok) {
      throw new Error(`Erro ao cadastrar vaga: ${response.statusText}`);
    }

    const data = await response.json(); // Para pegar a resposta JSON do servidor
    return data;
  } catch (error) {
    console.error("Erro ao cadastrar vaga:", error);
  }
};

// Função para registrar um pagamento usando fetch
export const registrarPagamento = async (pagamento) => {
  try {
    const response = await fetch("http://localhost:3000/api/pagamentos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Certificando-se de que o backend espera JSON
      },
      body: JSON.stringify(pagamento), // Convertendo o objeto 'pagamento' em JSON
    });

    if (!response.ok) {
      throw new Error(`Erro ao registrar pagamento: ${response.statusText}`);
    }

    const data = await response.json(); // Para pegar a resposta JSON do servidor
    return data;
  } catch (error) {
    console.error("Erro ao registrar pagamento:", error);
  }
};

// Função para buscar todas as vagas
export const buscarVagas = async () => {
  try {
    const response = await fetch("http://localhost:3000/api/vagas");
    if (!response.ok) {
      throw new Error("Erro ao buscar vagas");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erro ao buscar vagas:", error);
  }
};

// Função para buscar todos os pagamentos
export const buscarPagamentos = async () => {
  try {
    const response = await fetch("http://localhost:3000/api/pagamentos");
    if (!response.ok) {
      throw new Error("Erro ao buscar pagamentos");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erro ao buscar pagamentos:", error);
  }
};

// Função para buscar todos os clientes
export const buscarClientes = async () => {
  try {
    const response = await fetch("http://localhost:3000/api/clientes");
    if (!response.ok) {
      throw new Error("Erro ao buscar clientes");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erro ao buscar clientes:", error);
  }
};
