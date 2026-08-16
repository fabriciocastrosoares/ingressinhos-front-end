import { useState } from "react";

import apiEvents from "../../../services/apiEvents";

import {
  Container,
  CreateButton,
  Form,
  Field,
  Actions,
  ConfirmButton,
  CancelButton,
} from "./styled";

export default function CreateEventModal({ event, onCreated }) {
  const [showForm, setShowForm] = useState(false);

  const [capacity, setCapacity] = useState("");
  const [price, setPrice] = useState("");

  const [loading, setLoading] = useState(false);

  async function handleCreateEvent(e) {
    e.preventDefault();

    try {
      setLoading(true);

      const token = localStorage.getItem("token");

      await apiEvents.createEvent(
        {
          externalId: event.externalId,
          capacity: Number(capacity),
          price: Number(price),
        },
        token,
      );

      alert("Evento criado com sucesso!");

      setShowForm(false);
      setCapacity("");
      setPrice("");

      onCreated();
    } catch (error) {
      console.error("Erro ao criar evento:", error);

      alert(
        error.response?.data?.message || "Não foi possível criar o evento.",
      );
    } finally {
      setLoading(false);
    }
  }

  function handleCancel() {
    setShowForm(false);
    setCapacity("");
    setPrice("");
  }

  return (
    <Container>
      {!showForm ? (
        <CreateButton onClick={() => setShowForm(true)}>
          Criar evento
        </CreateButton>
      ) : (
        <Form onSubmit={handleCreateEvent}>
          <Field>
            <label>Capacidade</label>

            <input
              type="number"
              min="1"
              value={capacity}
              onChange={(e) => setCapacity(e.target.value)}
              required
            />
          </Field>

          <Field>
            <label>Preço do ingresso</label>

            <input
              type="number"
              min="0"
              step="0.01"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </Field>

          <Actions>
            <ConfirmButton type="submit" disabled={loading}>
              {loading ? "Criando..." : "Confirmar criação"}
            </ConfirmButton>

            <CancelButton type="button" onClick={handleCancel}>
              Cancelar
            </CancelButton>
          </Actions>
        </Form>
      )}
    </Container>
  );
}
