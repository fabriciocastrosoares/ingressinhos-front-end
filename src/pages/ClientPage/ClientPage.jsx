import Header from "../../components/header/Header";
import { Container } from "./styled";
import ClientComponent from "../../components/client/ClientComponent/ClientComponents";

export default function ClientPage() {
  return (
    <Container>
      <Header showLogout />

      <ClientComponent />
    </Container>
  );
}
