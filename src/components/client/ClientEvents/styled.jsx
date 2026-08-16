import styled from "styled-components";

export const Section = styled.section`
  background-color: white;

  padding: 25px;

  border-radius: 12px;

  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
`;

export const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 25px;

  h2 {
    margin: 0;
  }

  button {
    border: none;

    background-color: #eee;

    padding: 8px 15px;

    border-radius: 8px;

    cursor: pointer;

    &:hover {
      background-color: #ddd;
    }
  }

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;
  }
`;
