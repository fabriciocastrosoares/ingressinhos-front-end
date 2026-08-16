import styled from "styled-components";

export const Main = styled.div`
  background-color: yellow;
`;

export const Content = styled.main`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 0;

  .page-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
  }

  h1 {
    margin-bottom: 10px;
  }

  @media (max-width: 600px) {
    .page-header {
      flex-direction: column;
      align-items: flex-start;
      gap: 20px;
    }
  }
`;
