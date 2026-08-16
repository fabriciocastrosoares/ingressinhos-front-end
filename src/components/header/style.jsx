import styled from "styled-components";

export const ContainerHeader = styled.header`
  width: 100%;
  min-height: 70px;
  background-color: #0864f7;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 40px;
  box-sizing: border-box;

  @media (max-width: 600px) {
    padding: 0 20px;
  }
`;

export const Text = styled.h1`
  color: white;
  font-size: 28px;
`;

export const LogoutButton = styled.button`
  border: none;
  border-radius: 8px;

  padding: 10px 20px;

  background-color: #dc3545;
  color: white;

  font-size: 14px;
  font-weight: 600;

  cursor: pointer;

  transition: background-color 0.2s ease;

  &:hover {
    background-color: #bb2d3b;
  }
`;
