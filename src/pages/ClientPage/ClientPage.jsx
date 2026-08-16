import { useContext } from "react";

import { User } from "../../contexts/UserContext";

import { Container } from "./styled";

export default function ClientPage() {
  const { user, logout } = useContext(User);

  return (
    <Container>
      <header>
        <h1>Ingressinho</h1>

        <button onClick={logout}>Sair</button>
      </header>

      <main>
        <h2>Olá, {user?.username}!</h2>

        <p>Encontre eventos e compre seus ingressos.</p>

        <div className="options">
          <button>Ver eventos</button>

          <button>Meus ingressos</button>
        </div>
      </main>
    </Container>
  );
}
