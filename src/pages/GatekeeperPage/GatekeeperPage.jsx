import Header from "../../components/header/Header";

import GatekeeperComponent from "../../components/gatekeeper/GatekeeperComponent/GatekeeperComponent";

import { Container } from "./styled";

export default function GatekeeperPage() {
  return (
    <Container>
      <Header showLogout />

      <GatekeeperComponent />
    </Container>
  );
}
