import { useState } from "react";

import ClientEvents from "../ClientEvents/ClientEvents";
import MyTickets from "../MyTickets/MyTickets";

import { Main, Tabs, Tab } from "./styled";

export default function ClientComponent() {
  const [activeTab, setActiveTab] = useState("events");

  return (
    <Main>
      <h1>Área do Cliente</h1>

      <p>Encontre eventos e gerencie seus ingressos.</p>

      <Tabs>
        <Tab
          $active={activeTab === "events"}
          onClick={() => setActiveTab("events")}
        >
          Eventos
        </Tab>

        <Tab
          $active={activeTab === "tickets"}
          onClick={() => setActiveTab("tickets")}
        >
          Meus ingressos
        </Tab>
      </Tabs>

      {activeTab === "events" && <ClientEvents />}

      {activeTab === "tickets" && <MyTickets />}
    </Main>
  );
}
