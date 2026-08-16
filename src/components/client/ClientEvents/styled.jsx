import styled from "styled-components";

export const Section = styled.section`
  width: 100%;

  background-color: #ffffff;

  padding: 25px;

  border-radius: 12px;

  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);

  box-sizing: border-box;

  > p {
    color: #666;
  }

  @media (max-width: 768px) {
    padding: 20px;
  }

  @media (max-width: 480px) {
    padding: 15px;
    border-radius: 10px;
  }
`;

export const SectionHeader = styled.div`
  display: flex;

  justify-content: space-between;
  align-items: center;

  gap: 20px;

  margin-bottom: 25px;

  h2 {
    margin: 0;
    font-size: 22px;
  }

  button {
    flex-shrink: 0;

    border: none;
    border-radius: 8px;

    padding: 9px 16px;

    background-color: #eeeeee;

    cursor: pointer;

    font-weight: 600;

    &:hover {
      background-color: #dddddd;
    }
  }

  @media (max-width: 600px) {
    align-items: flex-start;

    h2 {
      font-size: 19px;
    }
  }

  @media (max-width: 480px) {
    flex-direction: column;

    button {
      width: 100%;
      min-height: 44px;
    }
  }
`;
