import Header from "../../components/header/Header";
import { Container } from "./styled";
import GatekeeperComponent from "../../components/gatekeeper/GatekeeperComponent/GtekeeperComponent";

export default function GatekeeperPage() {
  return (
    <Container>
      <Header showLogout />

      <GatekeeperComponent />
    </Container>
  );
}
