import {
  Section,
  SectionHeader,
  RefreshButton,
  EventCard,
  EventTitle,
  EventDescription,
  EventInfo,
} from "./styled";

import { formatCurrency, formatDate } from "../../../utils/formatters";

export default function MyEvents({ events, loading, onRefresh }) {
  return (
    <Section>
      <SectionHeader>
        <h2>Meus eventos</h2>

        <RefreshButton onClick={onRefresh}>Atualizar</RefreshButton>
      </SectionHeader>

      {loading ? (
        <p>Carregando seus eventos...</p>
      ) : events.length === 0 ? (
        <p>Você ainda não criou nenhum evento.</p>
      ) : (
        events.map((event) => {
          const available = event.capacity - event.soldCount;

          return (
            <EventCard key={event.id}>
              <EventTitle>{event.title}</EventTitle>

              {event.description && (
                <EventDescription>{event.description}</EventDescription>
              )}

              <EventInfo>
                <strong>Data:</strong> {formatDate(event.date)}
              </EventInfo>

              <EventInfo>
                <strong>Local:</strong> {event.location}
              </EventInfo>

              <EventInfo>
                <strong>Capacidade:</strong> {event.capacity}
              </EventInfo>

              <EventInfo>
                <strong>Ingressos vendidos:</strong> {event.soldCount}
              </EventInfo>

              <EventInfo>
                <strong>Ingressos disponíveis:</strong> {available}
              </EventInfo>

              <EventInfo>
                <strong>Preço:</strong> {formatCurrency(event.price)}
              </EventInfo>
            </EventCard>
          );
        })
      )}
    </Section>
  );
}
