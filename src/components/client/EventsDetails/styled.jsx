import styled from "styled-components";

export const Container = styled.section`
  background-color: white;

  padding: 30px;

  border-radius: 12px;

  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);

  .back {
    border: none;

    background: transparent;

    color: #0864f7;

    cursor: pointer;

    font-size: 15px;

    margin-bottom: 25px;
  }

  h2 {
    margin-bottom: 20px;
  }

  .info {
    margin-top: 25px;

    p {
      margin: 10px 0;

      color: #555;
    }
  }

  .reservation {
    margin-top: 30px;

    padding-top: 25px;

    border-top: 1px solid #ddd;

    display: flex;

    flex-direction: column;

    gap: 12px;

    max-width: 400px;
  }

  .reservation label {
    font-weight: 600;
  }

  .reservation input {
    padding: 12px;

    border: 1px solid #ccc;

    border-radius: 8px;

    font-size: 16px;
  }

  .reservation button {
    padding: 12px;

    border: none;

    border-radius: 8px;

    background-color: #0864f7;

    color: white;

    cursor: pointer;

    font-weight: 600;

    &:disabled {
      opacity: 0.5;

      cursor: not-allowed;
    }
  }
`;
