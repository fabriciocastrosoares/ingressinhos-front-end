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
    if (!scannerRef.current) {
      return;
    }

    try {
      await scannerRef.current.stop();
      await scannerRef.current.clear();
    } catch (error) {
      console.error("Erro ao parar scanner:", error);
    }

    scannerRef.current = null;

    setScanning(false);
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

          /*
           * Se o QR Code contiver a URL:
           *
           * http://localhost:5173/ticket/abc123
           *
           * pegamos somente o shareToken.
           */

          try {
            const url = new URL(decodedText);

            const parts = url.pathname.split("/");

            const ticketIndex = parts.indexOf("ticket");

            if (ticketIndex !== -1 && parts[ticketIndex + 1]) {
              token = parts[ticketIndex + 1];
            }
          } catch {
            /*
             * Caso o QR contenha diretamente o shareToken,
             * usamos o valor original.
             */
          }

          await validateTicket(token);
        },
        () => {
          // Erros de leitura são ignorados enquanto a câmera continua.
        },
      );
    } catch (error) {
      console.error("Erro ao iniciar câmera:", error);

      setScanning(false);

      setError(
        "Não foi possível acessar a câmera. Verifique a permissão do navegador.",
      );

      scannerRef.current = null;
    }
  }

  async function handleManualSubmit(event) {
    event.preventDefault();

    if (!shareToken.trim()) {
      setError("Informe o código do ingresso.");

      return;
    }

    await validateTicket(shareToken.trim());
  }

  function handleNewScan() {
    setResult(null);
    setError("");
    setShareToken("");

    startScanner();
  }

  useEffect(() => {
    return () => {
      if (scannerRef.current) {
        scannerRef.current
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
              Abrir câmera
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

          <Button
            type="button"
            onClick={() => {
              setError("");
              setShareToken("");
            }}
          >
            Tentar novamente
          </Button>
        </ErrorResult>
      )}
    </Container>
  );
}
