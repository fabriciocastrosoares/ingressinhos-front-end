import { useEffect, useState } from "react";

import apiEvents from "../../../services/apiEvents";

import {
  Section,
  SectionHeader,
  EventsGrid,
  EventCard,
  SelectButton,
} from "./styled";

export default function GatekeeperEvents({ onSelectEvent }) {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  async function loadEvents() {
    try {
      setLoading(true);

      const token = localStorage.getItem("token");

      const response = await apiEvents.getGatekeeperEvents(token);

      setEvents(response.data);
    } catch (error) {
      console.error("Erro ao buscar eventos da portaria:", error);

      alert(
        error.response?.data?.message ||
          "Não foi possível carregar os eventos.",
      );
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadEvents();
  }, []);

  return (
    <Section>
      <SectionHeader>
        <div>
          <h2>Eventos</h2>

          <p>Selecione o evento em que deseja validar ingressos.</p>
        </div>

        <button type="button" onClick={loadEvents}>
          Atualizar
        </button>
      </SectionHeader>

      {loading ? (
        <p>Carregando eventos...</p>
      ) : events.length === 0 ? (
        <p>Nenhum evento disponível.</p>
      ) : (
        <EventsGrid>
          {events.map((event) => (
            <EventCard key={event.id}>
              <h3>{event.title}</h3>

              <p>
                <strong>Data:</strong>{" "}
                {new Date(event.date).toLocaleString("pt-BR")}
              </p>

              <p>
                <strong>Local:</strong> {event.location || "Não informado"}
              </p>

              <p>
                <strong>Ingressos vendidos:</strong> {event.soldCount}
              </p>

              <p>
                <strong>Capacidade:</strong> {event.capacity}
              </p>

              <SelectButton type="button" onClick={() => onSelectEvent(event)}>
                Validar ingressos
              </SelectButton>
            </EventCard>
          ))}
        </EventsGrid>
      )}
    </Section>
  );
}
