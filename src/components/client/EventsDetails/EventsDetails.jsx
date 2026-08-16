import { useState } from "react";

import apiEvents from "../../../services/apiEvents";

import { Container } from "./styled";

export default function EventDetails({ event, onBack }) {
  const [quantity, setQuantity] = useState(1);

  const [loading, setLoading] = useState(false);

  const available = event.capacity - event.soldCount;

  async function handleReserve() {
    try {
      setLoading(true);

      const token = localStorage.getItem("token");

      await apiEvents.reserveEvent(
        event.id,
        {
          quantity: Number(quantity),
        },
        token,
      );

      alert("Ingressos reservados com sucesso!");

      onBack();
    } catch (error) {
      console.error("Erro ao reservar ingresso:", error);

      alert(
        error.response?.data?.message ||
          "Não foi possível reservar os ingressos.",
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <Container>
      <button className="back" onClick={onBack}>
        ← Voltar
      </button>

      <h2>{event.title}</h2>

      {event.description && <p>{event.description}</p>}

      <div className="info">
        <p>
          <strong>Data:</strong> {new Date(event.date).toLocaleString("pt-BR")}
        </p>

        <p>
          <strong>Local:</strong> {event.location}
        </p>

        <p>
          <strong>Preço:</strong>{" "}
          {Number(event.price).toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </p>

        <p>
          <strong>Ingressos disponíveis:</strong> {available}
        </p>
      </div>

      <div className="reservation">
        <label htmlFor="quantity">Quantidade de ingressos</label>

        <input
          id="quantity"
          type="number"
          min="1"
          max={available}
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />

        <p>
          Total:{" "}
          <strong>
            {(Number(event.price) * Number(quantity)).toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </strong>
        </p>

        <button onClick={handleReserve} disabled={loading || available <= 0}>
          {loading ? "Reservando..." : "Reservar ingressos"}
        </button>
      </div>
    </Container>
  );
}
