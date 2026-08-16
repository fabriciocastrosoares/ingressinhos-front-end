import styled from "styled-components";

export const Main = styled.main`
  width: 90%;
  max-width: 1200px;

  margin: 0 auto;

  padding: 40px 0;

  h1 {
    margin-bottom: 10px;
  }

  > p {
    color: #666;
  }
`;

export const Tabs = styled.div`
  display: flex;
  gap: 10px;

  margin: 30px 0;

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
`;
