import { useContext } from "react";
import { User } from "../../../contexts/UserContext";
import { Main, Options } from "./styled";

export default function ClientComponent() {
  const { user } = useContext(User);

  return (
    <Main>
      <h2>Olá, {user?.username}!</h2>

      <p>Encontre eventos e compre seus ingressos.</p>

      <Options>
        <button>Ver eventos</button>

        <button>Meus ingressos</button>
      </Options>
    </Main>
  );
}
