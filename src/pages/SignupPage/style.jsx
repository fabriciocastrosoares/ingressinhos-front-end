import styled from "styled-components";

export const Page = styled.div`
  background-color: white;

  display: flex;
  flex-direction: column;

  min-height: 100vh;
  width: 100%;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const Left = styled.div`
  background-color: #c2d7f8ff;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  min-height: 50vh;

  padding: 20px;

  box-sizing: border-box;

  font-size: 30px;
  font-weight: 600;

  @media (min-width: 768px) {
    width: 70%;
    min-height: 100vh;
  }
`;
