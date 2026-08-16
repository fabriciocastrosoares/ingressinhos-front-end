import { useState } from "react";

import apiTickets from "../../../services/apiTickets";

import { Card, EventInfo, BuyArea } from "./styled";

export default function EventCard({ event, onPurchase }) {
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(false);

  const hasLocalEvent = event.id !== null && event.id !== undefined;

  const available =
    event.capacity !== null && event.soldCount !== null
      ? event.capacity - event.soldCount
      : null;

  async function handleBuy() {
    if (!hasLocalEvent) {
      alert(
        "Este evento ainda não foi cadastrado no Ingressinho por um organizador.",
      );

      return;
    }

    if (available !== null && available <= 0) {
      alert("Este evento está esgotado.");

      return;
    }

    if (available !== null && quantity > available) {
      alert("A quantidade escolhida não está disponível.");

      return;
    }

    try {
      setLoading(true);

      const token = localStorage.getItem("token");

      await apiTickets.buy(
        {
          eventId: event.id,
          quantity: Number(quantity),
        },
        token,
      );

      alert("Ingresso comprado com sucesso!");

      setQuantity(1);

      if (onPurchase) {
        onPurchase();
      }
    } catch (error) {
      console.error("Erro ao comprar ingresso:", error);

      alert(
        error.response?.data?.message || "Não foi possível realizar a compra.",
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <Card>
      <EventInfo>
        <h3>{event.title}</h3>

        {event.description && <p>{event.description}</p>}

        <p>
          <strong>Data:</strong>{" "}
          {event.date
            ? new Date(event.date).toLocaleString("pt-BR")
            : "Não informado"}
        </p>

        <p>
          <strong>Local:</strong> {event.location || "Não informado"}
        </p>

        {event.price !== null && event.price !== undefined && (
          <p>
            <strong>Preço:</strong>{" "}
            {Number(event.price).toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </p>
        )}

        {available !== null && (
          <p>
            <strong>Ingressos disponíveis:</strong> {available}
          </p>
        )}
      </EventInfo>

      <BuyArea>
        {!hasLocalEvent ? (
          <p className="unavailable">Aguardando cadastro pelo organizador.</p>
        ) : available === 0 ? (
          <p className="unavailable">Evento esgotado.</p>
        ) : (
          <>
            <label htmlFor={`quantity-${event.id}`}>Quantidade</label>

            <input
              id={`quantity-${event.id}`}
              type="number"
              min="1"
              max={available ?? undefined}
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
            />

            <button type="button" onClick={handleBuy} disabled={loading}>
              {loading ? "Comprando..." : "Comprar ingresso"}
            </button>
          </>
        )}
      </BuyArea>
    </Card>
  );
}
