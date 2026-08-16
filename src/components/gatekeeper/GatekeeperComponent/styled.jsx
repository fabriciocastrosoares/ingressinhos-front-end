import styled from "styled-components";

export const Main = styled.main`
  width: 90%;
  max-width: 1200px;

  margin: 0 auto;

  padding: 40px 0;

  @media (max-width: 768px) {
    width: 94%;
    padding: 30px 0;
  }

  @media (max-width: 480px) {
    width: 92%;
    padding: 20px 0;
  }
`;

export const Welcome = styled.div`
  margin-bottom: 30px;

  h1 {
    margin: 0 0 10px;

    font-size: 30px;
  }

  p {
    margin: 0 0 8px;

    color: #555;
  }

  span {
    color: #777;

    font-size: 14px;
  }

  @media (max-width: 480px) {
    h1 {
      font-size: 24px;
    }

    p {
      font-size: 14px;
    }

    span {
      line-height: 1.5;
    }
  }
`;
