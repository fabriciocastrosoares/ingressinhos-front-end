import { useContext, useState } from "react";

import { User } from "../../../contexts/UserContext";

import GatekeeperEvents from "../GateKeeperEvents/GateKeeperEvents";
import TicketValidation from "../TicketValidadtion/TicketValidation";

import { Main, Welcome } from "./styled";

export default function GatekeeperComponent() {
  const { user } = useContext(User);

  const [selectedEvent, setSelectedEvent] = useState(null);

  return (
    <Main>
      <Welcome>
        <h1>Área da Portaria</h1>

        <p>
          Olá, <strong>{user?.username}</strong>!
        </p>

        <span>Selecione um evento para começar a validar os ingressos.</span>
      </Welcome>

      {selectedEvent ? (
        <TicketValidation
          event={selectedEvent}
          onBack={() => setSelectedEvent(null)}
        />
      ) : (
        <GatekeeperEvents onSelectEvent={setSelectedEvent} />
      )}
    </Main>
  );
}
