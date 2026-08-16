import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin-top: 20px;
`;

export const CreateButton = styled.button`
  width: 100%;

  min-height: 44px;

  padding: 10px 18px;

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

export const Form = styled.form`
  width: 100%;

  display: flex;

  flex-direction: column;

  gap: 15px;
`;

export const Field = styled.div`
  display: flex;

  flex-direction: column;

  gap: 6px;

  label {
    font-size: 14px;

    font-weight: 600;
  }

  input {
    width: 100%;

    padding: 12px;

    border: 1px solid #ccc;

    border-radius: 8px;

    box-sizing: border-box;

    font-size: 15px;

    outline: none;

    &:focus {
      border-color: #0864f7;
    }
  }
`;

export const Actions = styled.div`
  display: flex;

  gap: 10px;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

export const ConfirmButton = styled.button`
  flex: 1;

  min-height: 44px;

  padding: 10px;

  border: none;

  border-radius: 8px;

  background-color: #0864f7;

  color: white;

  font-weight: 600;

  cursor: pointer;

  &:disabled {
    opacity: 0.6;

    cursor: not-allowed;
  }
`;

export const CancelButton = styled.button`
  flex: 1;

  min-height: 44px;

  padding: 10px;

  border: none;

  border-radius: 8px;

  background-color: #777;

  color: white;

  font-weight: 600;

  cursor: pointer;

  &:hover {
    background-color: #666;
  }
`;
