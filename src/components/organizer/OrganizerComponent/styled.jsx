import styled from "styled-components";

export const Content = styled.main`
  width: 90%;
  max-width: 1200px;

  margin: 0 auto;

  padding: 40px 0;
`;

export const PageHeader = styled.div`
  margin-bottom: 30px;

  h1 {
    margin-bottom: 10px;
  }

  p {
    color: #555;
  }
`;

export const Tabs = styled.div`
  display: flex;
  gap: 10px;

  margin-bottom: 30px;

  border-bottom: 1px solid #ddd;
`;

export const Tab = styled.button`
  border: none;
  background: transparent;

  padding: 15px 20px;

  cursor: pointer;

  color: ${(props) => (props.$active ? "#0864f7" : "#777")};

  border-bottom: 3px solid
    ${(props) => (props.$active ? "#0864f7" : "transparent")};

  font-size: 15px;
  font-weight: 600;

  transition: all 0.2s ease;

  &:hover {
    color: #0864f7;
  }
`;
