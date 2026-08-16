# Ingressinho — Frontend

<p align="center">
  <strong>Uma plataforma completa para gerenciamento, compra e validação de ingressos.</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black" />
  <img src="https://img.shields.io/badge/Vite-7-646CFF?style=for-the-badge&logo=vite&logoColor=white" />
  <img src="https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
  <img src="https://img.shields.io/badge/Styled--Components-6-DB7093?style=for-the-badge&logo=styled-components&logoColor=white" />
  <img src="https://img.shields.io/badge/Axios-API-5A29E4?style=for-the-badge&logo=axios&logoColor=white" />
</p>

---

## Sobre o projeto

O **Ingressinho** é uma aplicação web desenvolvida para gerenciar o fluxo completo de eventos e ingressos.

A plataforma possui três perfis de usuários:

- **Cliente**
- **Organizador**
- **Porteiro**

O frontend é responsável pela interface da aplicação e pela comunicação com uma API desenvolvida em NestJS.

O projeto também possui integração com a **Ticketmaster Discovery API**, permitindo que organizadores visualizem eventos disponíveis e escolham quais desejam cadastrar na plataforma.

---

## Objetivo

O objetivo do Ingressinho é permitir que todo o fluxo de um evento seja realizado através de uma única aplicação:

```text
                    Ticketmaster
                         │
                         ▼
                  ┌──────────────┐
                  │ Organizador  │
                  └──────┬───────┘
                         │
                    cria evento
                         │
                         ▼
                  ┌──────────────┐
                  │    Evento    │
                  └──────┬───────┘
                         │
                         ▼
                  ┌──────────────┐
                  │   Cliente    │
                  └──────┬───────┘
                         │
                  compra ingresso
                         │
                         ▼
                  ┌──────────────┐
                  │   Ingresso   │
                  │   QR Code    │
                  └──────┬───────┘
                         │
                         ▼
                  ┌──────────────┐
                  │   Porteiro   │
                  └──────┬───────┘
                         │
                  valida ingresso
                         │
                         ▼
                  ┌──────────────┐
                  │   Entrada    │
                  │  autorizada  │
                  └──────────────┘
```

---

## Funcionalidades

### Autenticação

- Login de usuários.
- Cadastro de usuários.
- Seleção do tipo de conta durante o cadastro.
- Autenticação utilizando token JWT.
- Persistência do usuário e token no `localStorage`.
- Logout integrado à API.
- Redirecionamento conforme o perfil.

Perfis disponíveis:

```text
CLIENT
ORGANIZER
GATEKEEPER
```

### Área do Cliente

O cliente pode:

- Visualizar eventos disponíveis.
- Consultar data, local, preço e disponibilidade.
- Comprar ingressos.
- Escolher a quantidade de ingressos.
- Visualizar seus ingressos.
- Visualizar o QR Code.
- Compartilhar o ingresso.
- Exportar/imprimir o ingresso.
- Consultar o status do ingresso.

### Área do Organizador

O organizador pode:

- Visualizar eventos disponibilizados pela Ticketmaster.
- Consultar informações dos eventos.
- Escolher um evento para cadastrar no Ingressinho.
- Definir capacidade.
- Definir preço.
- Visualizar seus eventos.
- Acompanhar capacidade.
- Acompanhar ingressos vendidos.
- Acompanhar ingressos disponíveis.

### Área da Portaria

O porteiro pode:

- Visualizar eventos cadastrados.
- Selecionar o evento.
- Abrir a câmera do dispositivo.
- Ler QR Codes.
- Validar ingressos pela API.
- Utilizar validação manual.
- Visualizar o resultado da validação.

A leitura utiliza `html5-qrcode`.

---

## Fluxo do ingresso

```text
Cliente
   │
   ▼
Seleciona evento
   │
   ▼
Escolhe quantidade
   │
   ▼
Compra ingresso
   │
   ▼
Backend cria reserva
   │
   ▼
Backend cria pagamento
   │
   ▼
Backend cria ingresso
   │
   ▼
shareToken
   │
   ▼
QR Code
   │
   ▼
Cliente apresenta na portaria
   │
   ▼
Porteiro lê QR Code
   │
   ▼
Backend valida ingresso
   │
   ├── válido ──────► entrada autorizada
   │
   └── utilizado ───► entrada recusada
```

---

## 🔗 Integração com o Backend

A comunicação com a API é feita utilizando Axios.

A URL base é configurada através de:

```env
VITE_API_URL=http://localhost:3000
```

Os serviços são separados por responsabilidade:

```text
src/services/
├── apiAuth.js
├── apiEvents.js
├── apiTickets.js
└── createConfig.js
```

As requisições autenticadas utilizam:

```http
Authorization: Bearer TOKEN
```

---

## Principais endpoints

### Autenticação

```http
POST /auth/sign-in
POST /auth/sign-up
POST /auth/logout
```

### Eventos

```http
GET /events
GET /events/my
GET /events/gatekeeper
GET /events/:id
POST /events
POST /events/:id/reserve
```

### Ingressos

```http
POST /tickets/buy
GET /tickets/my
GET /tickets/:code
POST /tickets/validate
```

---

## Arquitetura do frontend

O projeto separa **Pages** e **Components**.

As páginas ficam responsáveis principalmente pela composição das telas, enquanto os componentes concentram a implementação das funcionalidades.

```text
src/
│
├── components/
│   ├── client/
│   │   ├── ClientComponent/
│   │   ├── ClientEvents/
│   │   ├── EventCard/
│   │   ├── EventDetails/
│   │   └── MyTickets/
│   │
│   ├── gatekeeper/
│   │   ├── GatekeeperComponent/
│   │   ├── GateKeeperEvents/
│   │   ├── TicketScanner/
│   │   └── TicketValidadtion/
│   │
│   ├── organizer/
│   │   ├── OrganizerComponent/
│   │   ├── CreateEventModal/
│   │   ├── MyEvents/
│   │   └── TicketsmasterEvents/
│   │
│   ├── signInputs/
│   │   ├── InputSignIn/
│   │   └── InputSignUp/
│   │
│   ├── ticket/
│   │   └── PublicTicket/
│   │
│   └── header/
│
├── contexts/
│   └── UserContext.jsx
│
├── pages/
│   ├── SigninPage/
│   ├── SignupPage/
│   ├── ClientPage/
│   ├── OrganizerPage/
│   ├── GatekeeperPage/
│   └── PublicTicketPage/
│
├── services/
│   ├── apiAuth.js
│   ├── apiEvents.js
│   ├── apiTickets.js
│   └── createConfig.js
│
├── styles/
│   └── ResetStyle.js
│
├── utils/
│   └── formatters.js
│
├── App.jsx
└── main.jsx
```

---

## Context API

O estado de autenticação é centralizado no `UserContext`.

O contexto disponibiliza:

```javascript
user;
setUser;
login;
logout;
```

O método `login` salva o usuário e o token no `localStorage` e redireciona conforme o perfil.

```text
CLIENT       → /client
ORGANIZER    → /organizer
GATEKEEPER   → /gatekeeper
```

O `logout` remove os dados armazenados e retorna para a tela inicial.

---

## Rotas

```text
/                    → Login
/signup-page         → Cadastro
/client              → Área do cliente
/organizer           → Área do organizador
/gatekeeper          → Área da portaria
/ticket/:shareToken  → Visualização pública do ingresso
```

---

## 🎨 Estilização

A aplicação utiliza:

- Styled Components.
- CSS responsivo.
- Componentes de estilo separados da lógica sempre que possível.
- React Icons.

Estrutura utilizada:

```text
Component/
├── Component.jsx
└── styled.js
```

---

## 📱 Responsividade

A aplicação foi preparada para:

- 🖥️ Desktop
- 💻 Notebook
- 📱 Tablet
- 📱 Smartphone

São utilizadas media queries do `styled-components`, principalmente nos breakpoints de `768px` e `480px`.

A responsividade é especialmente importante na área da portaria, onde o porteiro pode utilizar um smartphone para acessar a câmera e validar os ingressos.

---

## Tecnologias

### Core

- React
- JavaScript
- Vite

### Interface

- Styled Components
- React Icons

### Comunicação

- Axios

### QR Code

- qrcode.react
- html5-qrcode

### Roteamento

- React Router DOM

---

## Instalação

### 1. Clone o projeto

```bash
git clone URL_DO_REPOSITORIO
cd nome-do-projeto
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Configure o ambiente

Crie um arquivo `.env`:

```env
VITE_API_URL=http://localhost:3000
```

Altere a URL caso o backend esteja hospedado em outro endereço.

### 4. Execute

```bash
npm run dev
```

O Vite disponibilizará a aplicação no endereço indicado pelo terminal, normalmente:

```text
http://localhost:5173
```

---

## Permissão da câmera

A funcionalidade de leitura de QR Code depende da permissão da câmera.

Caso o navegador bloqueie:

1. Abra as configurações de permissão do site.
2. Localize **Câmera**.
3. Permita o acesso.
4. Recarregue a página.
5. Clique em **Abrir câmera** ou **Ler QR Code**.

Em ambientes reais, recomenda-se utilizar HTTPS.

---

## Segurança

O frontend não armazena senhas.

O token de autenticação é enviado nas requisições protegidas:

```http
Authorization: Bearer <token>
```

O controle definitivo de autorização é realizado pelo backend através dos papéis:

```text
CLIENT
ORGANIZER
GATEKEEPER
```

---

## Integração com Ticketmaster

O organizador pode visualizar eventos provenientes da Ticketmaster.

Fluxo:

```text
Ticketmaster API
       │
       ▼
Backend
       │
       ▼
Frontend
       │
       ▼
Organizador escolhe evento
       │
       ▼
Informa capacidade e preço
       │
       ▼
Backend cria evento local
```

O identificador externo é mantido através de:

```text
externalId
```

Isso permite relacionar o evento externo ao evento cadastrado no Ingressinho.

---

## Fluxo de testes

### Cliente

1. Criar conta como `CLIENT`.
2. Fazer login.
3. Visualizar eventos.
4. Escolher um evento cadastrado.
5. Informar a quantidade.
6. Comprar.
7. Acessar **Meus ingressos**.
8. Conferir o QR Code.
9. Testar compartilhamento.
10. Testar exportação.

### Organizador

1. Criar conta como `ORGANIZER`.
2. Fazer login.
3. Acessar **Eventos disponíveis**.
4. Escolher um evento.
5. Informar capacidade.
6. Informar preço.
7. Criar o evento.
8. Acessar **Meus eventos**.
9. Conferir os dados.

### Porteiro

1. Criar conta como `GATEKEEPER`.
2. Fazer login.
3. Selecionar um evento.
4. Abrir a câmera.
5. Apontar para o QR Code.
6. Conferir o resultado.

Também existe a opção de validação manual.

---

## Responsabilidade das pastas

### `components`

Componentes reutilizáveis e funcionalidades específicas dos perfis.

### `pages`

Composição das páginas e integração com as rotas.

### `contexts`

Estados globais da aplicação.

### `services`

Comunicação com o backend.

### `utils`

Funções auxiliares, como formatação de datas e valores.

### `styles`

Estilos globais e reset.

---

## Atualização dos dados

A aplicação possui ações para atualizar:

- Eventos disponíveis.
- Meus eventos.
- Meus ingressos.
- Eventos da portaria.

Após ações como criação de evento ou compra de ingresso, os dados também podem ser atualizados para refletir o estado atual da API.

---

## Possíveis melhorias futuras

- [ ] Proteção de rotas por perfil no frontend.
- [ ] Toasts em vez de `alert`.
- [ ] Modal de confirmação de compra.
- [ ] Pagamento real.
- [ ] Cancelamento de ingressos.
- [ ] Dashboard do organizador.
- [ ] Relatórios de vendas.
- [ ] Gráficos de ocupação.
- [ ] Histórico de validações.
- [ ] Melhorias na leitura do QR Code.
- [ ] PWA para utilização na portaria.
- [ ] Testes automatizados.
- [ ] Deploy automatizado.
- [ ] Tratamento global de erros da API.

---

## Arquitetura geral

```text
┌───────────────────────────────────────────────┐
│                  INGRESSINHO                  │
└───────────────────────┬───────────────────────┘
                        │
             ┌──────────┴──────────┐
             │                     │
             ▼                     ▼
        React/Vite             Backend API
                                  NestJS
             │                     │
      ┌──────┼──────┐              │
      │      │      │              ▼
      ▼      ▼      ▼           Prisma
   Cliente  Org.  Portaria         │
                                   ▼
                              PostgreSQL

             Organizador
                  │
                  ▼
             Ticketmaster

             Cliente
                  │
                  ▼
               QR Code
                  │
                  ▼
             Portaria
```

---

## Projeto

O **Ingressinho** é um projeto full stack que reúne:

- React.
- Vite.
- NestJS.
- Prisma.
- PostgreSQL.
- Autenticação e autorização por perfil.
- Integração com Ticketmaster.
- Compra e gerenciamento de ingressos.
- QR Code.
- Leitura e validação de ingressos.

Este repositório contém a aplicação frontend.

---

## Licença

Projeto desenvolvido para fins educacionais e de portfólio.

---

<p align="center">
  🎟️ <strong>Ingressinho</strong>
  <br />
  Crie. Compre. Valide. Festeje. 🎉
</p>
