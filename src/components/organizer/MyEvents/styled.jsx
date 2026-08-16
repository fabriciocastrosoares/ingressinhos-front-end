import styled from "styled-components";

export const Section = styled.section`
  width: 100%;

  padding: 25px;

  background-color: white;

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

  gap: 15px;

  margin-bottom: 25px;

  h2 {
    margin: 0;

    font-size: 22px;
  }

  @media (max-width: 480px) {
    h2 {
      font-size: 19px;
    }
  }
`;

export const RefreshButton = styled.button`
  flex-shrink: 0;

  min-height: 40px;

  padding: 8px 15px;

  border: none;

  border-radius: 8px;

  background-color: #eeeeee;

  cursor: pointer;

  font-weight: 600;
`;

export const EventCard = styled.article`
  padding: 20px;

  margin-bottom: 20px;

  border: 1px solid #e1e5eb;

  border-radius: 12px;

  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 480px) {
    padding: 15px;
  }
`;

export const EventTitle = styled.h3`
  margin: 0 0 12px;

  font-size: 20px;

  word-break: break-word;

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

export const EventDescription = styled.p`
  margin: 8px 0 15px;

  color: #555;

  line-height: 1.5;

  word-break: break-word;

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

export const EventInfo = styled.p`
  margin: 8px 0;

  color: #555;

  line-height: 1.5;

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;
