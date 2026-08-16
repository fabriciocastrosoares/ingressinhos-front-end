import { useEffect, useState } from "react";
import { QRCodeCanvas } from "qrcode.react";

import apiTickets from "../../../services/apiTickets";

import {
  Section,
  SectionHeader,
  TicketsGrid,
  TicketCard,
  TicketHeader,
  TicketInfo,
  QRCodeContainer,
  TicketActions,
  Status,
} from "./styled";

export default function MyTickets() {
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);

  async function loadTickets() {
    try {
      setLoading(true);

      const token = localStorage.getItem("token");

      const response = await apiTickets.getMyTickets(token);

      setTickets(response.data);
    } catch (error) {
      console.error("Erro ao buscar ingressos:", error);

      alert(
        error.response?.data?.message ||
          "Não foi possível carregar seus ingressos.",
      );
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadTickets();
  }, []);

  function getTicketLink(ticket) {
    return `${window.location.origin}/ticket/${ticket.shareToken}`;
  }

  async function handleShare(ticket) {
    const link = getTicketLink(ticket);

    try {
      if (navigator.share) {
        await navigator.share({
          title: `Ingresso - ${ticket.event.title}`,
          text: `Meu ingresso para ${ticket.event.title}`,
          url: link,
        });

        return;
      }

      await navigator.clipboard.writeText(link);

      alert("Link do ingresso copiado!");
    } catch (error) {
      console.error("Erro ao compartilhar ingresso:", error);
    }
  }

  function handleExport(ticket) {
    const ticketElement = document.getElementById(`ticket-${ticket.id}`);

    if (!ticketElement) {
      return;
    }

    const printWindow = window.open("", "_blank");

    printWindow.document.write(`
      <html>
        <head>
          <title>Ingresso - ${ticket.event.title}</title>

          <style>
            body {
              font-family: Arial, sans-serif;
              padding: 40px;
              text-align: center;
            }

            .ticket {
              max-width: 500px;
              margin: 0 auto;
              padding: 30px;
              border: 1px solid #ddd;
              border-radius: 16px;
            }

            h2 {
              margin-bottom: 20px;
            }

            p {
              margin: 8px 0;
            }

            img {
              margin-top: 20px;
              width: 220px;
            }
          </style>
        </head>

        <body>
          ${ticketElement.innerHTML}
        </body>
      </html>
    `);

    printWindow.document.close();

    printWindow.onload = () => {
      printWindow.print();
    };
  }

  if (loading) {
    return (
      <Section>
        <p>Carregando seus ingressos...</p>
      </Section>
    );
  }

  return (
    <Section>
      <SectionHeader>
        <div>
          <h2>Meus ingressos</h2>

          <p>Aqui estão os ingressos das suas compras.</p>
        </div>

        <button type="button" onClick={loadTickets}>
          Atualizar
        </button>
      </SectionHeader>

      {tickets.length === 0 ? (
        <p>Você ainda não possui ingressos.</p>
      ) : (
        <TicketsGrid>
          {tickets.map((ticket) => (
            <TicketCard key={ticket.id} id={`ticket-${ticket.id}`}>
              <TicketHeader>
                <div>
                  <span>INGRESSO</span>

                  <h3>{ticket.event.title}</h3>
                </div>

                <Status $status={ticket.status}>
                  {ticket.status === "VALID"
                    ? "Válido"
                    : ticket.status === "USED"
                      ? "Utilizado"
                      : "Cancelado"}
                </Status>
              </TicketHeader>

              <TicketInfo>
                <p>
                  <strong>Data:</strong>{" "}
                  {new Date(ticket.event.date).toLocaleString("pt-BR")}
                </p>

                <p>
                  <strong>Local:</strong>{" "}
                  {ticket.event.location || "Não informado"}
                </p>
              </TicketInfo>

              <QRCodeContainer>
                <QRCodeCanvas
                  value={ticket.shareToken}
                  size={220}
                  level="H"
                  includeMargin
                />

                <small>Apresente este QR Code na entrada</small>
              </QRCodeContainer>

              <TicketActions>
                <button type="button" onClick={() => handleShare(ticket)}>
                  Compartilhar ingresso
                </button>

                <button type="button" onClick={() => handleExport(ticket)}>
                  Exportar ingresso
                </button>
              </TicketActions>
            </TicketCard>
          ))}
        </TicketsGrid>
      )}
    </Section>
  );
}
