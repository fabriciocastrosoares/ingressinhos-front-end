import { useEffect, useState } from "react";

import apiEvents from "../../../services/apiEvents";

import EventCard from "../EventCard/EventCard";

import { Section, SectionHeader } from "./styled";

export default function ClientEvents() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

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

  useEffect(() => {
    let active = true;

    async function fetchEvents() {
      try {
        const response = await apiEvents.getEvents();

        if (active) {
          setEvents(response.data);
          setLoading(false);
        }
      } catch (error) {
        console.error("Erro ao buscar eventos:", error);

        if (active) {
          alert("Não foi possível carregar os eventos.");
          setLoading(false);
        }
      }
    }

    fetchEvents();

    return () => {
      active = false;
    };
  }, []);

  return (
    <Section>
      <SectionHeader>
        <h2>Eventos disponíveis</h2>

        <button type="button" onClick={loadEvents}>
          Atualizar
        </button>
      </SectionHeader>

      {loading ? (
        <p>Carregando eventos...</p>
      ) : events.length === 0 ? (
        <p>Nenhum evento encontrado.</p>
      ) : (
        <div>
          {events.map((event) => (
            <EventCard
              key={event.id || event.externalId}
              event={event}
              onPurchase={loadEvents}
            />
          ))}
        </div>
      )}
    </Section>
  );
}
