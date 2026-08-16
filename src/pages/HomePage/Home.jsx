import { ContainerMain } from "./styled";
import Header from "../../components/header/Header";
import ContentAccessed from "../../components/main/Content";

export default function HomePage() {
  return (
    <ContainerMain>
      <Header />
      <ContentAccessed />
    </ContainerMain>
  );
}
