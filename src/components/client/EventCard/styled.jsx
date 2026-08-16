import styled from "styled-components";

export const Card = styled.article`
  width: 100%;

  display: flex;
  justify-content: space-between;
  gap: 30px;

  padding: 22px;

  margin-bottom: 20px;

  border: 1px solid #e1e5eb;
  border-radius: 12px;

  box-sizing: border-box;

  background-color: #ffffff;

  overflow-wrap: anywhere;

  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;

    padding: 20px;
  }

  @media (max-width: 480px) {
    padding: 15px;
    gap: 15px;
  }
`;

export const EventInfo = styled.div`
  flex: 1;
  min-width: 0;

  h3 {
    margin: 0 0 15px;

    font-size: 20px;

    color: #222;
  }

  p {
    margin: 8px 0;

    color: #555;

    line-height: 1.5;

    word-break: break-word;
  }

  @media (max-width: 480px) {
    h3 {
      font-size: 18px;
    }

    p {
      font-size: 14px;
    }
  }
`;

export const BuyArea = styled.div`
  width: 220px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  gap: 8px;

  flex-shrink: 0;

  label {
    font-size: 14px;
    font-weight: 600;
  }

  input {
    width: 100%;

    padding: 12px;

    border: 1px solid #ccc;
    border-radius: 8px;

    box-sizing: border-box;

    font-size: 15px;

    outline: none;

    &:focus {
      border-color: #0864f7;
    }
  }

  button {
    width: 100%;

    min-height: 44px;

    margin-top: 5px;

    padding: 10px 15px;

    border: none;
    border-radius: 8px;

    background-color: #0864f7;

    color: white;

    font-weight: 600;

    cursor: pointer;

    &:hover {
      background-color: #0053d6;
    }

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
  }

  .unavailable {
    color: #777;

    font-size: 14px;

    line-height: 1.5;

    margin: 0;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;
