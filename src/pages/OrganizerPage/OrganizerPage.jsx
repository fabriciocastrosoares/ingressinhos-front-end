import Header from "../../components/header/Header";
import OrganizerComponent from "../../components/organizer/OrganizerComponent/OrganizerComponent";

import { Container } from "./styled";

export default function OrganizerPage() {
  return (
    <Container>
      <Header showLogout />

      <OrganizerComponent />
    </Container>
  );
}
