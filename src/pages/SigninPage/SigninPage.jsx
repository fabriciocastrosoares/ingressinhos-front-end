import { Page, Left } from "./style";
import InputSignIn from "../../components/signInputs/InputSignIn";

export default function SignInPage() {
  return (
    <Page>
      <Left>
        <h1>Ingressinho</h1>
        <p>
          Crie seu evento, compre seu ingresso, valide o ingresso na portaria e
          festeje muito!
        </p>
      </Left>
      <InputSignIn />
    </Page>
  );
}
