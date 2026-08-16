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
    margin-bottom: 6px;
  }

  p {
    color: #777;
    font-size: 14px;
  }

  button {
    border: none;
    background-color: #eee;
    padding: 9px 15px;
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

export const EventsGrid = styled.div`
  display: grid;

  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));

  gap: 20px;
`;

export const EventCard = styled.article`
  border: 1px solid #e1e5eb;
  border-radius: 12px;

  padding: 20px;

  h3 {
    margin-bottom: 15px;
    color: #222;
  }

  p {
    margin: 8px 0;
    color: #555;
    font-size: 14px;
  }
`;

export const SelectButton = styled.button`
  width: 100%;

  margin-top: 15px;

  padding: 12px;

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
