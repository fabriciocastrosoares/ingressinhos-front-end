import { useState } from "react";
import { useNavigate } from "react-router-dom";

import apiAuth from "../services/apiAuth";
import { User } from "./UserContext";

export default function UserProvider({ children }) {
  const navigate = useNavigate();

  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");

    return savedUser ? JSON.parse(savedUser) : null;
  });

  function login(userData, token) {
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(userData));

    setUser(userData);

    switch (userData.role) {
      case "CLIENT":
        navigate("/client");
        break;

      case "ORGANIZER":
        navigate("/organizer");
        break;

      case "GATEKEEPER":
        navigate("/gatekeeper");
        break;

      default:
        navigate("/");
    }
  }

  async function logout() {
    const token = localStorage.getItem("token");

    try {
      if (token) {
        await apiAuth.logout(token);
      }
    } catch (error) {
      console.error("Erro ao fazer logout:", error);
    } finally {
      localStorage.removeItem("token");
      localStorage.removeItem("user");

      setUser(null);

      navigate("/");
    }
  }

  return (
    <User.Provider
      value={{
        user,
        setUser,
        login,
        logout,
      }}
    >
      {children}
    </User.Provider>
  );
}
