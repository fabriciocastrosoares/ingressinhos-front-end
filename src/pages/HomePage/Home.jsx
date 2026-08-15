import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Page, InputWrapper, Left, ContanerLogin } from "./styled";

export default function SigninPage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(e) {
    e.preventDefault();

    console.log({
      email,
      password,
    });
  }

  return (
    <Page>
      <Left>melda</Left>

      <ContanerLogin>
        <form onSubmit={handleLogin}>
          <h2>Login</h2>

          <InputWrapper>
            <input
              type="email"
              placeholder=" "
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>E-mail:</label>
          </InputWrapper>

          <InputWrapper>
            <input
              type="password"
              placeholder=" "
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label>Senha:</label>
          </InputWrapper>

          <button type="submit">ENTRAR</button>

          <p onClick={() => navigate("/signup-page")}>
            Primeira vez? Clique aqui e crie uma conta!
          </p>
        </form>
      </ContanerLogin>
    </Page>
  );
}
