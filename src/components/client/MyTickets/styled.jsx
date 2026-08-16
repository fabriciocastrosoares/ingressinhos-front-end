import styled from "styled-components";

export const Section = styled.section`
  width: 100%;

  padding: 25px;

  background-color: #ffffff;

  border-radius: 12px;

  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);

  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 20px;
  }

  @media (max-width: 480px) {
    padding: 15px;
  }
`;

export const SectionHeader = styled.div`
  display: flex;

  justify-content: space-between;
  align-items: center;

  gap: 20px;

  margin-bottom: 25px;

  h2 {
    margin: 0 0 5px;
    font-size: 22px;
  }

  p {
    margin: 0;
    color: #666;
  }

  button {
    flex-shrink: 0;

    border: none;
    border-radius: 8px;

    padding: 9px 16px;

    background-color: #eeeeee;

    cursor: pointer;

    font-weight: 600;
  }

  @media (max-width: 600px) {
    align-items: flex-start;

    h2 {
      font-size: 19px;
    }

    p {
      font-size: 14px;
    }
  }

  @media (max-width: 480px) {
    flex-direction: column;

    button {
      width: 100%;
      min-height: 44px;
    }
  }
`;

export const TicketsGrid = styled.div`
  display: grid;

  grid-template-columns: repeat(2, minmax(0, 1fr));

  gap: 20px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const TicketCard = styled.article`
  width: 100%;

  padding: 22px;

  border: 1px solid #e1e5eb;

  border-radius: 14px;

  box-sizing: border-box;

  background-color: #ffffff;

  overflow: hidden;

  @media (max-width: 480px) {
    padding: 15px;
  }
`;

export const TicketHeader = styled.div`
  display: flex;

  justify-content: space-between;
  align-items: flex-start;

  gap: 15px;

  padding-bottom: 15px;

  border-bottom: 1px dashed #ddd;

  span {
    font-size: 11px;

    color: #777;

    font-weight: 700;

    letter-spacing: 1px;
  }

  h3 {
    margin: 6px 0 0;

    font-size: 19px;

    word-break: break-word;
  }

  @media (max-width: 480px) {
    h3 {
      font-size: 17px;
    }
  }
`;

export const TicketInfo = styled.div`
  padding: 15px 0;

  p {
    margin: 8px 0;

    color: #555;

    line-height: 1.5;

    word-break: break-word;
  }

  @media (max-width: 480px) {
    p {
      font-size: 14px;
    }
  }
`;

export const QRCodeContainer = styled.div`
  display: flex;

  flex-direction: column;

  align-items: center;

  justify-content: center;

  padding: 15px 0;

  border-top: 1px dashed #ddd;
  border-bottom: 1px dashed #ddd;

  canvas {
    max-width: 100%;
    height: auto !important;
  }

  small {
    margin-top: 10px;

    color: #666;

    text-align: center;

    font-size: 12px;
  }

  @media (max-width: 480px) {
    canvas {
      width: 180px !important;
      height: 180px !important;
    }
  }
`;

export const TicketActions = styled.div`
  display: flex;

  gap: 10px;

  margin-top: 20px;

  button {
    flex: 1;

    min-height: 44px;

    padding: 10px;

    border: none;

    border-radius: 8px;

    background-color: #0864f7;

    color: white;

    font-weight: 600;

    cursor: pointer;

    &:hover {
      background-color: #0053d6;
    }
  }

  @media (max-width: 480px) {
    flex-direction: column;

    button {
      width: 100%;
    }
  }
`;

export const Status = styled.span`
  flex-shrink: 0;

  padding: 6px 10px;

  border-radius: 20px;

  font-size: 12px;

  font-weight: 700;

  background-color: ${(props) =>
    props.$status === "VALID"
      ? "#d1fae5"
      : props.$status === "USED"
        ? "#fef3c7"
        : "#fee2e2"};

  color: ${(props) =>
    props.$status === "VALID"
      ? "#065f46"
      : props.$status === "USED"
        ? "#92400e"
        : "#991b1b"};

  @media (max-width: 480px) {
    font-size: 11px;
    padding: 5px 8px;
  }
`;
