import { Page, Left } from "./style";
import InputsSignUp from "../../components/signInputs/InputSignUp";

export default function SignUpPage() {
  return (
    <Page>
      <Left>
        <h1>Ingressinho</h1>
        <p>
          Crie seu evento, compre seu ingresso, valide o ingresso na portaria e
          festeje muito!
        </p>
      </Left>
      <InputsSignUp />
    </Page>
  );
}
