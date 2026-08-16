import CreateEventModal from "../CreateEventModal/CreateEventModal";

import {
  Section,
  SectionHeader,
  EventCard,
  EventTitle,
  EventDescription,
  EventInfo,
  RefreshButton,
} from "./styled";

import { formatCurrency, formatDate } from "../../../utils/formatters";

export default function TicketmasterEvents({
  events,
  loading,
  onRefresh,
  onCreated,
}) {
  return (
    <Section>
      <SectionHeader>
        <h2>Eventos disponíveis</h2>

        <RefreshButton onClick={onRefresh}>Atualizar</RefreshButton>
      </SectionHeader>

      {loading ? (
        <p>Carregando eventos...</p>
      ) : events.length === 0 ? (
        <p>Nenhum evento encontrado.</p>
      ) : (
        events.map((event) => (
          <EventCard key={event.externalId}>
            <EventTitle>{event.title}</EventTitle>

            {event.description && (
              <EventDescription>{event.description}</EventDescription>
            )}

            <EventInfo>
              <strong>Data:</strong> {formatDate(event.date)}
            </EventInfo>

            <EventInfo>
              <strong>Local:</strong> {event.location || "Não informado"}
            </EventInfo>

            {event.price !== null && (
              <EventInfo>
                <strong>Preço original:</strong> {formatCurrency(event.price)}
              </EventInfo>
            )}

            {event.source === "local" ? (
              <EventInfo>✓ Evento já cadastrado</EventInfo>
            ) : (
              <CreateEventModal event={event} onCreated={onCreated} />
            )}
          </EventCard>
        ))
      )}
    </Section>
  );
}
