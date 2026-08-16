import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  max-width: 900px;

  margin: 0 auto;

  padding: 30px;

  background-color: #ffffff;

  border-radius: 12px;

  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);

  box-sizing: border-box;

  .back {
    border: none;
    background: transparent;

    color: #0864f7;

    font-size: 15px;
    font-weight: 600;

    cursor: pointer;

    margin-bottom: 20px;
  }

  h2 {
    margin: 0 0 15px;

    font-size: 28px;
  }

  > p {
    color: #555;
    line-height: 1.6;
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

    padding: 20px;

    border-radius: 10px;

    background-color: #f5f7fb;

    display: flex;
    flex-direction: column;

    gap: 10px;

    label {
      font-weight: 600;
    }

    input {
      width: 100%;

      max-width: 200px;

      padding: 12px;

      border: 1px solid #ccc;
      border-radius: 8px;

      box-sizing: border-box;

      font-size: 15px;
    }

    p {
      margin: 5px 0;
    }

    button {
      width: fit-content;

      min-height: 44px;

      padding: 12px 20px;

      border: none;
      border-radius: 8px;

      background-color: #0864f7;

      color: white;

      font-weight: 600;

      cursor: pointer;

      &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
      }
    }
  }

  @media (max-width: 768px) {
    padding: 25px;

    h2 {
      font-size: 24px;
    }
  }

  @media (max-width: 480px) {
    padding: 18px;

    h2 {
      font-size: 21px;
    }

    .reservation {
      padding: 15px;

      input {
        max-width: none;
      }

      button {
        width: 100%;
      }
    }
  }
`;
