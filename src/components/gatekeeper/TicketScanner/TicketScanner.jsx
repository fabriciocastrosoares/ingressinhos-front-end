import { useEffect, useRef, useState } from "react";
import { Html5Qrcode } from "html5-qrcode";

import apiTickets from "../../../services/apiTickets";

import {
  Container,
  ScannerContainer,
  Result,
  SuccessResult,
  ErrorResult,
  Button,
  ManualForm,
  Divider,
} from "./styled";

export default function TicketScanner() {
  const scannerRef = useRef(null);

  const [scanning, setScanning] = useState(false);
  const [shareToken, setShareToken] = useState("");

  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

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

      await scanner.clear();
    } catch (error) {
      console.error("Erro ao parar scanner:", error);
    } finally {
      scannerRef.current = null;
      setScanning(false);
    }
  }

  async function validateTicket(token) {
    if (!token) {
      return;
    }

    try {
      setError("");
      setResult(null);

      const authToken = localStorage.getItem("token");

      const response = await apiTickets.validate(
        {
          shareToken: token,
        },
        authToken,
      );

      setResult(response.data);

      setShareToken("");

      await stopScanner();
    } catch (error) {
      console.error("Erro ao validar ingresso:", error);

      setResult(null);

      setError(
        error.response?.data?.message || "Não foi possível validar o ingresso.",
      );

      await stopScanner();
    }
  }

  async function startScanner() {
    setError("");
    setResult(null);

    if (scannerRef.current) {
      return;
    }

    try {
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
          let token = decodedText;

          try {
            const url = new URL(decodedText);

            const parts = url.pathname.split("/");

            const ticketIndex = parts.indexOf("ticket");

            if (ticketIndex !== -1 && parts[ticketIndex + 1]) {
              token = parts[ticketIndex + 1];
            }
          } catch {
            // O QR Code pode conter diretamente o shareToken.
          }

          await validateTicket(token);
        },

        () => {},
      );
    } catch (error) {
      console.error("Erro ao iniciar câmera:", error);

      scannerRef.current = null;

      setScanning(false);

      setError(
        "Não foi possível acessar a câmera. Verifique se o navegador possui permissão para utilizá-la.",
      );
    }
  }

  async function handleManualSubmit(event) {
    event.preventDefault();

    const token = shareToken.trim();

    if (!token) {
      setError("Informe o código do ingresso.");

      return;
    }

    await validateTicket(token);
  }

  function handleNewScan() {
    setResult(null);
    setError("");
    setShareToken("");

    startScanner();
  }

  function handleTryAgain() {
    setError("");
    setResult(null);
    setShareToken("");
  }

  useEffect(() => {
    return () => {
      const scanner = scannerRef.current;

      if (scanner) {
        scanner
          .stop()
          .catch(() => {})
          .finally(() => {
            scannerRef.current = null;
          });
      }
    };
  }, []);

  return (
    <Container>
      {!result && !error && (
        <>
          <h2>Validar ingresso</h2>

          <p>Aponte a câmera para o QR Code apresentado pelo cliente.</p>

          {!scanning && (
            <Button type="button" onClick={startScanner}>
              📷 Abrir câmera
            </Button>
          )}

          <ScannerContainer id="qr-reader" $active={scanning} />

          {scanning && (
            <Button type="button" $secondary onClick={stopScanner}>
              Fechar câmera
            </Button>
          )}

          <Divider />

          <ManualForm onSubmit={handleManualSubmit}>
            <h3>Validação manual</h3>

            <p>
              Caso não seja possível utilizar a câmera, informe o código do
              ingresso.
            </p>

            <input
              type="text"
              placeholder="Código do ingresso"
              value={shareToken}
              onChange={(event) => setShareToken(event.target.value)}
              autoComplete="off"
            />

            <Button type="submit">Validar ingresso</Button>
          </ManualForm>
        </>
      )}

      {result && (
        <SuccessResult>
          <Result>
            <span>✓</span>

            <h2>Ingresso válido!</h2>

            <p>O ingresso foi validado com sucesso.</p>

            <div>
              <strong>Evento:</strong>

              <p>{result.event}</p>
            </div>

            <div>
              <strong>Cliente:</strong>

              <p>{result.owner}</p>
            </div>

            <div>
              <strong>ID do ingresso:</strong>

              <p>{result.ticketId}</p>
            </div>
          </Result>

          <Button type="button" onClick={handleNewScan}>
            Validar outro ingresso
          </Button>
        </SuccessResult>
      )}

      {error && (
        <ErrorResult>
          <Result>
            <span>✕</span>

            <h2>Ingresso não válido</h2>

            <p>{error}</p>
          </Result>

          <Button type="button" onClick={handleTryAgain}>
            Tentar novamente
          </Button>
        </ErrorResult>
      )}
    </Container>
  );
}
