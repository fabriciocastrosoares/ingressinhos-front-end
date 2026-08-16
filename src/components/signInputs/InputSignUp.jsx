import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Container, InputWrapper, RoleLabel, RoleOptions } from "./style";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import apiAuth from "../../services/apiAuth";

export default function InputsSignUp() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("CLIENT");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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
            type={showPassword ? "text" : "password"}
            placeholder=" "
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <label>Senha</label>

          <button
            type="button"
            className="password-toggle"
            onClick={() => setShowPassword(!showPassword)}
            aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
          >
            {showPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}
          </button>
        </InputWrapper>

        <InputWrapper>
          <input
            type={showConfirmPassword ? "text" : "password"}
            placeholder=" "
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />

          <label>Confirme a senha</label>

          <button
            type="button"
            className="password-toggle"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            aria-label={
              showConfirmPassword
                ? "Ocultar confirmação de senha"
                : "Mostrar confirmação de senha"
            }
          >
            {showConfirmPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}
          </button>
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
