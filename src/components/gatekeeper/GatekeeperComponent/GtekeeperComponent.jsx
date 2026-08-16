import { useContext } from "react";
import { User } from "../../../contexts/UserContext";
import { Main, Options } from "./styled";

export default function GatekeeperComponent() {
  const { user } = useContext(User);

  return (
    <Main>
      <h2>Olá, {user?.username}!</h2>

      <p>Valide os ingressos dos eventos.</p>

      <Options>
        <button>Validar ingresso</button>
      </Options>
    </Main>
  );
}
