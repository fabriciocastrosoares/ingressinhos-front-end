import { useRef, useState } from "react";
import { Html5Qrcode } from "html5-qrcode";

import apiTickets from "../../../services/apiTickets";

import {
  Section,
  Header,
  EventInfo,
  Form,
  Result,
  BackButton,
  ValidateButton,
  CameraButton,
  ScannerContainer,
} from "./styled";

export default function TicketValidation({ event, onBack }) {
  const scannerRef = useRef(null);

  const [shareToken, setShareToken] = useState("");
  const [loading, setLoading] = useState(false);
  const [scanning, setScanning] = useState(false);
  const [result, setResult] = useState(null);

  async function handleValidate(token = shareToken) {
    const cleanToken = token.trim();

    if (!cleanToken) {
      alert("Informe ou leia o QR Code do ingresso.");
      return;
    }

    try {
      setLoading(true);
      setResult(null);

      const authToken = localStorage.getItem("token");

      const response = await apiTickets.validate(
        {
          shareToken: cleanToken,
          eventId: event.id,
        },
        authToken,
      );

      setResult({
        success: true,
        message: response.data.message || "Ingresso validado com sucesso!",
        data: response.data,
      });

      setShareToken("");
    } catch (error) {
      console.error("Erro ao validar ingresso:", error);

      setResult({
        success: false,
        message:
          error.response?.data?.message ||
          "Não foi possível validar o ingresso.",
      });
    } finally {
      setLoading(false);
    }
  }

  async function startScanner() {
    if (scannerRef.current) {
      return;
    }

    try {
      setResult(null);

      const scanner = new Html5Qrcode("qr-reader");

      scannerRef.current = scanner;

      setScanning(true);

      await scanner.start(
        {
          facingMode: "environment",
        },
        {
          fps: 10,
          qrbox: {
            width: 250,
            height: 250,
          },
        },
        async (decodedText) => {
          console.log("QR Code encontrado:", decodedText);

          let token = decodedText.trim();

          try {
            const url = new URL(decodedText);

            const parts = url.pathname.split("/").filter(Boolean);

            const ticketIndex = parts.indexOf("ticket");

            if (ticketIndex !== -1 && parts[ticketIndex + 1]) {
              token = parts[ticketIndex + 1];
            }
          } catch {
            // Se não for uma URL, considera o próprio conteúdo como shareToken.
          }

          console.log("ShareToken extraído:", token);

          await stopScanner();

          setShareToken(token);

          await handleValidate(token);
        },
        () => {},
      );
    } catch (error) {
      console.error("Erro ao abrir câmera:", error);

      scannerRef.current = null;
      setScanning(false);

      alert(
        "Não foi possível abrir a câmera. Verifique se o navegador possui permissão para utilizá-la.",
      );
    }
  }

  async function stopScanner() {
    const scanner = scannerRef.current;

    if (!scanner) {
      setScanning(false);
      return;
    }

    try {
      if (scanner.isScanning) {
        await scanner.stop();
      }

      scanner.clear();
    } catch (error) {
      console.error("Erro ao fechar câmera:", error);
    } finally {
      scannerRef.current = null;
      setScanning(false);
    }
  }

  async function handleBack() {
    await stopScanner();
    onBack();
  }

  return (
    <Section>
      <Header>
        <div>
          <h2>Validar ingresso</h2>

          <p>Evento selecionado:</p>

          <strong>{event.title}</strong>
        </div>

        <BackButton type="button" onClick={handleBack}>
          Voltar
        </BackButton>
      </Header>

      <EventInfo>
        <p>
          <strong>Data:</strong> {new Date(event.date).toLocaleString("pt-BR")}
        </p>

        <p>
          <strong>Local:</strong> {event.location || "Não informado"}
        </p>
      </EventInfo>

      <CameraButton
        type="button"
        onClick={scanning ? stopScanner : startScanner}
      >
        {scanning ? "Fechar câmera" : "📷 Ler QR Code"}
      </CameraButton>

      <ScannerContainer $visible={scanning}>
        <div id="qr-reader"></div>

        <p>Aponte a câmera para o QR Code do ingresso.</p>
      </ScannerContainer>

      <Form
        onSubmit={(e) => {
          e.preventDefault();

          handleValidate();
        }}
      >
        <label htmlFor="shareToken">Código do ingresso</label>

        <input
          id="shareToken"
          type="text"
          placeholder="Digite ou cole o código"
          value={shareToken}
          onChange={(e) => setShareToken(e.target.value)}
          autoComplete="off"
        />

        <ValidateButton type="submit" disabled={loading}>
          {loading ? "Validando..." : "Validar ingresso"}
        </ValidateButton>
      </Form>

      {result && (
        <Result $success={result.success}>
          <h3>
            {result.success ? "✓ Ingresso válido" : "✕ Ingresso inválido"}
          </h3>

          <p>{result.message}</p>

          {result.success && result.data && (
            <>
              <p>
                <strong>Evento:</strong> {result.data.event}
              </p>

              <p>
                <strong>Proprietário:</strong> {result.data.owner}
              </p>
            </>
          )}
        </Result>
      )}
    </Section>
  );
}
