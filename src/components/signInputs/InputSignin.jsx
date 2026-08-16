import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { InputWrapper, Container } from "./style";
import apiAuth from "../../services/apiAuth";
import { User } from "../../contexts/UserContext";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";

export default function InputSignIn() {
  const navigate = useNavigate();

  const { login } = useContext(User);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleLogin(e) {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await apiAuth.signin({
        email,
        password,
      });

      const { token, user } = response.data;

      login(user, token);
    } catch (error) {
      console.error(error);

      alert(
        error.response?.data?.message || "Não foi possível realizar o login.",
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <Container>
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
            type={showPassword ? "text" : "password"}
            placeholder=" "
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label>Senha:</label>
          <button
            type="button"
            className="password-toggle"
            onClick={() => setShowPassword(!showPassword)}
            aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
          >
            {showPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}
          </button>
        </InputWrapper>

        <button type="submit" disabled={loading}>
          {loading ? "Entrando..." : "ENTRAR"}
        </button>

        <p onClick={() => navigate("/signup-page")}>
          Primeira vez? Clique aqui e crie uma conta!
        </p>
      </form>
    </Container>
  );
}
