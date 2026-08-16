import { useContext } from "react";
import { User } from "../../contexts/UserContext";
import { ContainerHeader, Text, LogoutButton } from "./style";

export default function Header({ showLogout = false }) {
  const { logout } = useContext(User);

  return (
    <ContainerHeader>
      <Text>Ingressinho</Text>

      {showLogout && <LogoutButton onClick={logout}>Sair</LogoutButton>}
    </ContainerHeader>
  );
}
