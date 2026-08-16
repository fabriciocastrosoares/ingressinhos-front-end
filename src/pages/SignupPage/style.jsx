import styled from "styled-components";

export const Page = styled.div`
  width: 100%;
  min-height: 100vh;

  display: flex;

  background-color: white;

  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

export const Left = styled.div`
  width: 70%;
  min-height: 100vh;

  padding: 40px;

  box-sizing: border-box;

  background-color: #c2d7f8;

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  text-align: center;

  h1 {
    margin: 0 0 20px;

    color: #0864f7;

    font-size: 48px;
    font-weight: 700;
  }

  p {
    width: 80%;
    max-width: 600px;

    margin: 0;

    color: #444;

    font-size: 18px;

    line-height: 1.6;
  }

  @media (max-width: 1024px) {
    width: 60%;

    h1 {
      font-size: 40px;
    }

    p {
      width: 90%;
      font-size: 16px;
    }
  }

  @media (max-width: 767px) {
    width: 100%;
    min-height: 35vh;

    padding: 30px 20px;

    h1 {
      font-size: 36px;

      margin-bottom: 15px;
    }

    p {
      width: 100%;

      font-size: 15px;
    }
  }

  @media (max-width: 480px) {
    min-height: 30vh;

    padding: 25px 20px;

    h1 {
      font-size: 30px;
    }

    p {
      font-size: 14px;
      line-height: 1.5;
    }
  }
`;
