import styled from "styled-components";

export const ContainerHeader = styled.header`
  width: 100%;

  min-height: 70px;

  padding: 0 40px;

  box-sizing: border-box;

  background-color: #0864f7;

  display: flex;

  align-items: center;

  justify-content: space-between;

  gap: 20px;

  @media (max-width: 600px) {
    min-height: 60px;

    padding: 0 20px;
  }

  @media (max-width: 400px) {
    padding: 0 15px;
  }
`;

export const Text = styled.h1`
  margin: 0;

  color: white;

  font-size: 28px;

  @media (max-width: 600px) {
    font-size: 23px;
  }

  @media (max-width: 400px) {
    font-size: 20px;
  }
`;

export const LogoutButton = styled.button`
  min-height: 40px;

  padding: 8px 18px;

  border: none;

  border-radius: 8px;

  background-color: #dc3545;

  color: white;

  font-size: 14px;

  font-weight: 600;

  cursor: pointer;

  &:hover {
    background-color: #bb2d3b;
  }

  @media (max-width: 480px) {
    padding: 7px 13px;

    font-size: 13px;
  }
`;
