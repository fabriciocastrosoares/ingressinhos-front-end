import styled from "styled-components";

export const Section = styled.section`
  width: 100%;

  padding: 25px;

  background-color: #ffffff;

  border-radius: 12px;

  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);

  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 20px;
  }

  @media (max-width: 480px) {
    padding: 15px;
  }
`;

export const SectionHeader = styled.div`
  display: flex;

  justify-content: space-between;
  align-items: center;

  gap: 20px;

  margin-bottom: 25px;

  h2 {
    margin: 0 0 5px;
    font-size: 22px;
  }

  p {
    margin: 0;
    color: #666;
  }

  > button {
    flex-shrink: 0;

    padding: 9px 16px;

    border: none;
    border-radius: 8px;

    background-color: #eeeeee;

    cursor: pointer;

    font-weight: 600;
  }

  @media (max-width: 600px) {
    align-items: flex-start;

    h2 {
      font-size: 19px;
    }

    p {
      font-size: 14px;
    }
  }

  @media (max-width: 480px) {
    flex-direction: column;

    > button {
      width: 100%;
      min-height: 44px;
    }
  }
`;

export const EventsGrid = styled.div`
  display: grid;

  grid-template-columns: repeat(2, minmax(0, 1fr));

  gap: 20px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const EventCard = styled.article`
  padding: 20px;

  border: 1px solid #e1e5eb;

  border-radius: 12px;

  overflow-wrap: anywhere;

  h3 {
    margin: 0 0 15px;

    font-size: 19px;
  }

  p {
    margin: 8px 0;

    color: #555;

    line-height: 1.5;
  }

  @media (max-width: 480px) {
    padding: 15px;

    h3 {
      font-size: 17px;
    }

    p {
      font-size: 14px;
    }
  }
`;

export const SelectButton = styled.button`
  width: 100%;

  min-height: 44px;

  margin-top: 15px;

  padding: 10px;

  border: none;

  border-radius: 8px;

  background-color: #0864f7;

  color: white;

  font-weight: 600;

  cursor: pointer;

  &:hover {
    background-color: #0053d6;
  }
`;
