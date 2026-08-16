import styled from "styled-components";

export const Main = styled.main`
  padding: 40px;
`;

export const Options = styled.div`
  display: flex;
  gap: 20px;

  margin-top: 30px;

  button {
    padding: 15px 25px;

    border: none;
    border-radius: 10px;

    background-color: #0864f7;
    color: white;

    cursor: pointer;

    font-size: 15px;
    font-weight: 600;

    &:hover {
      background-color: #0053d6;
    }
  }

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;
