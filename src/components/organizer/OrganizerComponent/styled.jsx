import styled from "styled-components";

export const Content = styled.main`
  width: 90%;

  max-width: 1200px;

  margin: 0 auto;

  padding: 40px 0;

  box-sizing: border-box;

  @media (max-width: 768px) {
    width: 94%;
    padding: 30px 0;
  }

  @media (max-width: 480px) {
    width: 92%;
    padding: 20px 0;
  }
`;

export const PageHeader = styled.div`
  margin-bottom: 25px;

  h1 {
    margin: 0 0 8px;

    font-size: 30px;
  }

  p {
    margin: 0;

    color: #666;
  }

  @media (max-width: 480px) {
    h1 {
      font-size: 24px;
    }

    p {
      font-size: 14px;

      line-height: 1.5;
    }
  }
`;

export const Tabs = styled.div`
  display: flex;

  gap: 10px;

  margin: 25px 0 30px;

  border-bottom: 1px solid #ddd;

  overflow-x: auto;

  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Tab = styled.button`
  flex-shrink: 0;

  padding: 15px 20px;

  border: none;

  background: transparent;

  color: ${(props) => (props.$active ? "#0864f7" : "#777")};

  border-bottom: 3px solid
    ${(props) => (props.$active ? "#0864f7" : "transparent")};

  font-size: 15px;

  font-weight: 600;

  cursor: pointer;

  @media (max-width: 480px) {
    padding: 12px 15px;

    font-size: 13px;
  }
`;
