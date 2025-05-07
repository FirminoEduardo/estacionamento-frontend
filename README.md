
# **Estacionamento - Sistema de Gestão de Vagas e Clientes**

Este projeto é um sistema de gestão de estacionamento, desenvolvido com o objetivo de facilitar o controle de vagas, clientes e pagamentos em um ambiente de estacionamento. Ele oferece funcionalidades como cadastro de clientes (horistas e mensalistas), controle de entrada e saída de veículos, geração de relatórios, e muito mais.

## **Tecnologias Utilizadas**

- **Frontend:**
  - **React.js**: Biblioteca JavaScript para construção da interface de usuário.
  - **Tailwind CSS**: Framework CSS utilitário para design responsivo e minimalista.
  - **React Router**: Para navegação entre as páginas do sistema.
  - **Node.js e Express** (Planejado para o backend futuramente)

## **Funcionalidades Principais**

### **1. Gestão de Vagas**
- Cadastro de vagas.
- Controle de status e limite de capacidade das vagas.

### **2. Gestão de Clientes**
- Cadastro de clientes, com dados pessoais e veículos.
- Identificação de clientes como horistas ou mensalistas.

### **3. Controle de Entrada/Saída**
- Registro de entrada e saída de veículos.
- Cálculo do valor a pagar para horistas com base no tempo de uso da vaga.

### **4. Reserva de Vagas**
- Funcionalidade de reserva de vagas para mensalistas e horistas.
- Cancelamento automático de reservas não utilizadas.

### **5. Gestão de Pagamentos**
- Registro de pagamentos de horistas e mensalistas.
- Geração de recibos e alertas de renovação para mensalistas.

### **6. Relatórios**
- Geração de relatórios sobre ocupação, faturamento e histórico de uso.

### **7. Funcionalidades para Mensalistas**
- Garantia de vaga fixa.
- Renovação de contratos e notificações sobre vencimento.

### **8. Funcionalidades para Horistas**
- Pagamento conforme tempo de uso, com diversas opções de pagamento.

### **9. Tabela de Preços**
- Configuração e atualização dos preços para horistas e mensalistas.

### **10. Notificações e Alertas**
- Envio de alertas para mensalistas e horistas sobre prazos e disponibilidade de vagas.

### **11. Controle de Acesso e Segurança**
- Sistema de autenticação de usuários com registro de logs de alterações.

### **12. Backup e Restauração**
- Implementação de backups automáticos e possibilidade de restauração em caso de falhas.

## **Estrutura do Projeto**

A estrutura do projeto está organizada da seguinte forma:

```
estacionamento/
├── public/
│   ├── favicon.ico           # Ícone da aplicação
│   ├── index.html            # Arquivo HTML principal
│   ├── logo192.png           # Imagem de logo para dispositivos móveis
│   ├── logo512.png           # Imagem de logo para dispositivos maiores
│   ├── manifest.json         # Manifesto do aplicativo web
│   └── robots.txt            # Arquivo de diretivas para robôs de busca
├── src/
│   ├── components/           # Componentes reutilizáveis (Botões, Header, etc.)
│   ├── pages/                # Páginas (Home, Relatórios, etc.)
│   ├── App.js                # Componente principal que configura as rotas
│   ├── index.js              # Ponto de entrada do React
│   ├── index.css             # Estilos globais e Tailwind CSS
│   └── services/             # Serviços (API, etc.)
├── package.json              # Dependências e scripts do projeto
└── tailwind.config.js        # Configuração do Tailwind CSS
```

### **Componentes Reutilizáveis**
- **`Button.js`**: Componente de botão reutilizável com diferentes estilos.
- **`Header.js`**: Barra de navegação do sistema, presente em todas as páginas.

### **Páginas**
- **`Home.js`**: Página principal com visão geral das vagas, clientes e pagamentos.
- **`Relatorios.js`**: Página de relatórios com informações sobre o estacionamento.
- **`Clientes.js`**, **`Vagas.js`**, **`Pagamentos.js`**: Páginas com funcionalidades específicas de gestão.

### **Funções de API**
- **`api.js`**: Conexão com a API para comunicação com o backend.

## **Instalação e Execução**

### **Pré-requisitos**
- **Node.js** (versão 14 ou superior) deve estar instalado no seu ambiente de desenvolvimento.

### **1. Clonando o Repositório**
Clone o repositório para a sua máquina local:

```bash
git clone https://github.com/seu-usuario/estacionamento.git
cd estacionamento
```

### **2. Instalando as Dependências**
Instale as dependências do projeto:

```bash
npm install
```

### **3. Executando o Projeto**
Para rodar o projeto no modo de desenvolvimento, use o seguinte comando:

```bash
npm start
```

Isso vai iniciar o servidor de desenvolvimento, e você poderá acessar o sistema no navegador, geralmente em **http://localhost:3000**.

### **4. Build para Produção**
Para gerar a versão otimizada para produção, use:

```bash
npm run build
```

Isso criará uma pasta **`build`** com todos os arquivos otimizados para produção.

## **Licença**

Este projeto está licenciado sob a **MIT License**.

---

Este **README** agora está alinhado com a estrutura do seu projeto e fornece uma visão clara sobre como configurar, executar e entender o sistema de estacionamento. Se você precisar de mais alguma coisa ou ajustes, é só avisar! 😊
