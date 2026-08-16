import styled from "styled-components";

export const Card = styled.article`
  display: flex;

  justify-content: space-between;

  gap: 30px;

  border: 1px solid #e1e5eb;

  border-radius: 12px;

  padding: 20px;

  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

export const EventInfo = styled.div`
  flex: 1;

  h3 {
    margin-bottom: 15px;

    font-size: 20px;

    color: #222;
  }

  p {
    margin: 8px 0;

    color: #555;

    line-height: 1.5;
  }
`;

export const BuyArea = styled.div`
  width: 200px;

  display: flex;

  flex-direction: column;

  justify-content: center;

  gap: 10px;

  label {
    font-size: 14px;

    font-weight: 600;
  }

  input {
    width: 100%;

    box-sizing: border-box;

    padding: 10px;

    border: 1px solid #ccc;

    border-radius: 8px;

    font-size: 15px;
  }

  button {
    width: 100%;

    padding: 12px;

    border: none;

    border-radius: 8px;

    background-color: #0864f7;

    color: white;

    cursor: pointer;

    font-weight: 600;

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

    line-height: 1.4;
  }

  @media (max-width: 700px) {
    width: 100%;
  }
`;
