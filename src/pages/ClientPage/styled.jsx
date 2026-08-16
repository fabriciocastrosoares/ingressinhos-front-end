import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;

  background-color: #f5f7fb;

  header {
    height: 70px;

    padding: 0 40px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    background-color: #0864f7;
    color: white;
  }

  header button {
    border: none;
    border-radius: 8px;

    padding: 10px 20px;

    cursor: pointer;
  }

  main {
    padding: 40px;
  }

  .options {
    display: flex;
    gap: 20px;

    margin-top: 30px;
  }

  .options button {
    padding: 15px 25px;

    border: none;
    border-radius: 10px;

    background-color: #0864f7;
    color: white;

    cursor: pointer;
  }
`;
