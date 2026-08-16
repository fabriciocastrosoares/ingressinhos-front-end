import styled from "styled-components";

export const Main = styled.main`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 0;

  h1 {
    margin: 0 0 10px;
    font-size: 32px;
  }

  > p {
    margin: 0;
    color: #666;
    font-size: 16px;
  }

  @media (max-width: 768px) {
    width: 94%;
    padding: 30px 0;

    h1 {
      font-size: 28px;
    }
  }

  @media (max-width: 480px) {
    width: 92%;
    padding: 20px 0;

    h1 {
      font-size: 24px;
    }

    > p {
      font-size: 14px;
      line-height: 1.5;
    }
  }
`;

export const Tabs = styled.div`
  display: flex;
  gap: 10px;

  margin: 30px 0;

  border-bottom: 1px solid #ddd;

  overflow-x: auto;

  &::-webkit-scrollbar {
    display: none;
  }

  scrollbar-width: none;

  @media (max-width: 480px) {
    margin: 20px 0;
    gap: 5px;
  }
`;

export const Tab = styled.button`
  flex-shrink: 0;

  border: none;
  background: transparent;

  padding: 15px 20px;

  cursor: pointer;

  color: ${(props) => (props.$active ? "#0864f7" : "#777")};

  border-bottom: 3px solid
    ${(props) => (props.$active ? "#0864f7" : "transparent")};

  font-size: 15px;
  font-weight: 600;

  transition: 0.2s;

  &:hover {
    color: #0864f7;
  }

  @media (max-width: 480px) {
    padding: 12px 15px;
    font-size: 13px;
  }
`;
