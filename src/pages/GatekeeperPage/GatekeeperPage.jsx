import { useContext } from "react";

import { User } from "../../contexts/UserContext";

import { Container } from "./styled";

export default function GatekeeperPage() {
  const { user, logout } = useContext(User);

  return (
    <Container>
      <header>
        <h1>Ingressinho</h1>

        <button onClick={logout}>Sair</button>
      </header>

      <main>
        <h2>Olá, {user?.username}!</h2>

        <p>Valide os ingressos dos eventos.</p>

        <div className="options">
          <button>Validar ingresso</button>
        </div>
      </main>
    </Container>
  );
}
