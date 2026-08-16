import { useEffect, useState } from "react";

import apiEvents from "../../../services/apiEvents";

import TicketmasterEvents from "../TicketsmasterEvents/TicketmasterEvents";
import MyEvents from "../MyEvents/MyEvents";

import { Content, PageHeader, Tabs, Tab } from "./styled";

export default function OrganizerComponent() {
  const [activeTab, setActiveTab] = useState("available");

  const [events, setEvents] = useState([]);
  const [myEvents, setMyEvents] = useState([]);

  const [loading, setLoading] = useState(true);
  const [loadingMyEvents, setLoadingMyEvents] = useState(false);

  async function loadEvents() {
    try {
      setLoading(true);

      const response = await apiEvents.getEvents();

      setEvents(response.data);
    } catch (error) {
      console.error("Erro ao buscar eventos:", error);

      alert("Não foi possível carregar os eventos.");
    } finally {
      setLoading(false);
    }
  }

  async function loadMyEvents() {
    try {
      setLoadingMyEvents(true);

      const token = localStorage.getItem("token");

      const response = await apiEvents.getMyEvents(token);

      setMyEvents(response.data);
    } catch (error) {
      console.error("Erro ao buscar meus eventos:", error);

      alert("Não foi possível carregar seus eventos.");
    } finally {
      setLoadingMyEvents(false);
    }
  }

  async function reloadEvents() {
    await Promise.all([loadEvents(), loadMyEvents()]);
  }

  useEffect(() => {
    reloadEvents();
  }, []);

  return (
    <Content>
      <PageHeader>
        <div>
          <h1>Área do Organizador</h1>

          <p>Gerencie seus eventos e crie novos eventos.</p>
        </div>
      </PageHeader>

      <Tabs>
        <Tab
          $active={activeTab === "available"}
          onClick={() => setActiveTab("available")}
        >
          Eventos disponíveis
        </Tab>

        <Tab
          $active={activeTab === "mine"}
          onClick={() => setActiveTab("mine")}
        >
          Meus eventos
        </Tab>
      </Tabs>

      {activeTab === "available" && (
        <TicketmasterEvents
          events={events}
          loading={loading}
          onRefresh={loadEvents}
          onCreated={reloadEvents}
        />
      )}

      {activeTab === "mine" && (
        <MyEvents
          events={myEvents}
          loading={loadingMyEvents}
          onRefresh={loadMyEvents}
        />
      )}
    </Content>
  );
}
