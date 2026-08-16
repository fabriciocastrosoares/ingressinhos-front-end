import styled from "styled-components";

export const Container = styled.div`
  margin-top: 15px;
`;

export const CreateButton = styled.button`
  padding: 10px 18px;

  border: none;
  border-radius: 8px;

  background-color: #0864f7;
  color: white;

  cursor: pointer;

  font-weight: 600;

  &:hover {
    background-color: #0053d6;
  }
`;

export const Form = styled.form`
  margin-top: 20px;

  display: flex;
  flex-direction: column;

  gap: 15px;
`;

export const Field = styled.div`
  display: flex;
  flex-direction: column;

  gap: 5px;

  label {
    font-size: 14px;
    font-weight: 600;
  }

  input {
    padding: 12px;

    border: 1px solid #ccc;

    border-radius: 8px;

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

  flex-wrap: wrap;
`;

export const ConfirmButton = styled.button`
  padding: 10px 18px;

  border: none;
  border-radius: 8px;

  background-color: #0864f7;
  color: white;

  cursor: pointer;

  font-weight: 600;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const CancelButton = styled.button`
  padding: 10px 18px;

  border: none;
  border-radius: 8px;

  background-color: #777;
  color: white;

  cursor: pointer;

  font-weight: 600;

  &:hover {
    background-color: #666;
  }
`;
