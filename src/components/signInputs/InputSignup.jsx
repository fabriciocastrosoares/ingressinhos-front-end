import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Container, InputWrapper, RoleLabel, RoleOptions } from "./style";
import apiAuth from "../../services/apiAuth";

export default function InputsSignUp() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("CLIENT");
  const [loading, setLoading] = useState(false);

  async function cadastro(e) {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("As senhas não são iguais.");
      return;
    }

    const user = {
      username: name,
      email,
      password,
      role,
    };

    try {
      setLoading(true);

      await apiAuth.signup(user);

      alert("Cadastro realizado com sucesso!");

      navigate("/");
    } catch (error) {
      console.error("Erro ao cadastrar:", error);

      alert(
        error.response?.data?.message ||
          "Não foi possível realizar o cadastro.",
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <Container>
      <form onSubmit={cadastro}>
        <InputWrapper>
          <input
            type="text"
            placeholder=" "
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <label>Nome</label>
        </InputWrapper>

        <InputWrapper>
          <input
            type="email"
            placeholder=" "
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label>E-mail</label>
        </InputWrapper>

        <InputWrapper>
          <input
            type="password"
            placeholder=" "
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <label>Senha</label>
        </InputWrapper>

        <InputWrapper>
          <input
            type="password"
            placeholder=" "
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <label>Confirme a senha</label>
        </InputWrapper>

        <RoleLabel>Tipo de conta</RoleLabel>

        <RoleOptions>
          <button
            type="button"
            className={role === "CLIENT" ? "active" : ""}
            onClick={() => setRole("CLIENT")}
          >
            Cliente
          </button>

          <button
            type="button"
            className={role === "ORGANIZER" ? "active" : ""}
            onClick={() => setRole("ORGANIZER")}
          >
            Organizador
          </button>

          <button
            type="button"
            className={role === "GATEKEEPER" ? "active" : ""}
            onClick={() => setRole("GATEKEEPER")}
          >
            Porteiro
          </button>
        </RoleOptions>

        <button type="submit" disabled={loading}>
          {loading ? "Cadastrando..." : "Cadastrar"}
        </button>
      </form>

      <Link to="/">Já tem uma conta? Entre agora!</Link>
    </Container>
  );
}
