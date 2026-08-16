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
      alert("Não foi possível encontrar o ingresso.");
      return;
    }

    const printWindow = window.open("", "_blank");

    if (!printWindow) {
      alert(
        "Não foi possível abrir a janela de exportação. Verifique se o navegador bloqueou o pop-up.",
      );
      return;
    }

    const canvas = ticketElement.querySelector("canvas");

    if (!canvas) {
      alert("QR Code não encontrado.");
      printWindow.close();
      return;
    }

    const qrCodeImage = canvas.toDataURL("image/png");

    const statusText =
      ticket.status === "VALID"
        ? "Válido"
        : ticket.status === "USED"
          ? "Utilizado"
          : "Cancelado";

    printWindow.document.write(`
      <!DOCTYPE html>
      <html lang="pt-BR">
        <head>
          <meta charset="UTF-8" />

          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />

          <title>Ingresso - ${ticket.event.title}</title>

          <style>
            * {
              box-sizing: border-box;
            }

            body {
              margin: 0;
              padding: 40px;

              font-family: Arial, sans-serif;

              background-color: #ffffff;

              display: flex;
              justify-content: center;
            }

            .ticket {
              width: 100%;
              max-width: 500px;

              padding: 30px;

              border: 1px solid #ddd;
              border-radius: 16px;

              text-align: center;

              background-color: #ffffff;
            }

            .header {
              padding-bottom: 20px;

              border-bottom: 1px solid #eeeeee;
            }

            .header span {
              display: block;

              margin-bottom: 10px;

              font-size: 14px;

              color: #777777;
            }

            .header h2 {
              margin: 0;

              font-size: 24px;

              color: #222222;
            }

            .status {
              margin-top: 15px;

              font-size: 16px;

              font-weight: bold;

              color: ${
                ticket.status === "VALID"
                  ? "#065f46"
                  : ticket.status === "USED"
                    ? "#92400e"
                    : "#991b1b"
              };
            }

            .info {
              padding: 25px 0;
            }

            .info p {
              margin: 10px 0;

              font-size: 15px;

              color: #555555;
            }

            .qr-code {
              padding-top: 10px;
            }

            .qr-code img {
              display: block;

              width: 220px;
              height: 220px;

              margin: 0 auto;
            }

            .qr-code small {
              display: block;

              margin-top: 12px;

              font-size: 13px;

              color: #666666;
            }

            .footer {
              margin-top: 25px;

              padding-top: 15px;

              border-top: 1px solid #eeeeee;

              font-size: 12px;

              color: #999999;
            }

            @media print {
              body {
                padding: 0;
              }

              .ticket {
                border: none;
                box-shadow: none;
              }
            }
          </style>
        </head>

        <body>

          <div class="ticket">

            <div class="header">

              <span>INGRESSO</span>

              <h2>
                ${ticket.event.title}
              </h2>

              <div class="status">
                ${statusText}
              </div>

            </div>

            <div class="info">

              <p>
                <strong>Data:</strong>
                ${new Date(ticket.event.date).toLocaleString("pt-BR")}
              </p>

              <p>
                <strong>Local:</strong>
                ${ticket.event.location || "Não informado"}
              </p>

            </div>

            <div class="qr-code">

              <img
                src="${qrCodeImage}"
                alt="QR Code do ingresso"
              />

              <small>
                Apresente este QR Code na entrada
              </small>

            </div>

            <div class="footer">
              Ingressinho
            </div>

          </div>

        </body>
      </html>
    `);

    printWindow.document.close();

    printWindow.onload = () => {
      printWindow.focus();

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
                  value={getTicketLink(ticket)}
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
