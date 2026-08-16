import styled from "styled-components";

export const Section = styled.section`
  background-color: white;
  padding: 25px;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
`;

export const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  margin-bottom: 25px;

  h2 {
    margin-bottom: 5px;
  }

  p {
    color: #777;
  }

  button {
    border: none;
    background-color: #eee;
    padding: 8px 15px;
    border-radius: 8px;
    cursor: pointer;
  }

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const TicketsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 20px;
`;

export const TicketCard = styled.article`
  border: 1px solid #e1e5eb;
  border-radius: 16px;
  padding: 25px;
  background-color: #fff;

  box-shadow: 0 3px 12px rgba(0, 0, 0, 0.06);
`;

export const TicketHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 15px;

  span {
    font-size: 11px;
    font-weight: 700;
    color: #0864f7;
  }

  h3 {
    margin-top: 6px;
    font-size: 20px;
  }
`;

export const Status = styled.span`
  padding: 6px 10px;
  border-radius: 20px;

  font-size: 12px;
  font-weight: 700;

  background-color: ${(props) =>
    props.$status === "VALID"
      ? "#d1fae5"
      : props.$status === "USED"
        ? "#e5e7eb"
        : "#fee2e2"};

  color: ${(props) =>
    props.$status === "VALID"
      ? "#047857"
      : props.$status === "USED"
        ? "#555"
        : "#b91c1c"};
`;

export const TicketInfo = styled.div`
  margin-top: 20px;

  p {
    margin: 8px 0;
    color: #555;
  }
`;

export const QRCodeContainer = styled.div`
  margin: 25px 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  canvas {
    max-width: 100%;
    height: auto;
  }

  small {
    color: #777;
    text-align: center;
  }
`;

export const TicketActions = styled.div`
  display: flex;
  gap: 10px;

  button {
    flex: 1;

    padding: 11px 15px;

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

  @media (max-width: 500px) {
    flex-direction: column;
  }
`;
