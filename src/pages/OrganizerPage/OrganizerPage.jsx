import { useContext } from "react";

import { User } from "../../contexts/UserContext";

import { Container } from "./styled";

export default function OrganizerPage() {
  const { user, logout } = useContext(User);

  return (
    <Container>
      <header>
        <h1>Ingressinho</h1>

        <button onClick={logout}>Sair</button>
      </header>

      <main>
        <h2>Olá, {user?.username}!</h2>

        <p>Gerencie seus eventos.</p>

        <div className="options">
          <button>Criar evento</button>

          <button>Meus eventos</button>
        </div>
      </main>
    </Container>
  );
}
