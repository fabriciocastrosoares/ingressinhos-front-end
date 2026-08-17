import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import apiTickets from "../../../services/apiTickets";

import {
  Container,
  Card,
  Header,
  EventInfo,
  Status,
  Loading,
  ErrorMessage,
} from "./styled";

export default function PublicTicket() {
  const { shareToken } = useParams();

  const [ticket, setTicket] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let active = true;

    async function fetchTicket() {
      try {
        const response = await apiTickets.getPublicTicket(shareToken);

        if (active) {
          setTicket(response.data);
          setError("");
          setLoading(false);
        }
      } catch (error) {
        console.error("Erro ao buscar ingresso:", error);

        if (active) {
          setError(
            error.response?.data?.message ||
              "Não foi possível encontrar este ingresso.",
          );

          setLoading(false);
        }
      }
    }

    if (shareToken) {
      fetchTicket();
    }

    return () => {
      active = false;
    };
  }, [shareToken]);

  if (loading) {
    return (
      <Container>
        <Loading>Carregando ingresso...</Loading>
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <Card>
          <ErrorMessage>
            <h2>Ingresso não encontrado</h2>

            <p>{error}</p>
          </ErrorMessage>
        </Card>
      </Container>
    );
  }

  return (
    <Container>
      <Card>
        <Header>
          <h1>Ingressinho</h1>

          <p>Ingresso digital</p>
        </Header>

        <EventInfo>
          <h2>{ticket.event.title}</h2>

          <p>
            <strong>Data:</strong>{" "}
            {new Date(ticket.event.date).toLocaleString("pt-BR")}
          </p>

          <p>
            <strong>Local:</strong> {ticket.event.location || "Não informado"}
          </p>
        </EventInfo>

        <Status $status={ticket.status}>
          {ticket.status === "VALID" && "Ingresso válido"}

          {ticket.status === "USED" && "Ingresso já utilizado"}

          {ticket.status === "CANCELLED" && "Ingresso cancelado"}
        </Status>
      </Card>
    </Container>
  );
}
