import styled from "styled-components";

export const InputWrapper = styled.div`
  position: relative;

  width: 100%;
  max-width: 400px;

  height: 60px;

  margin-bottom: 5px;

  box-sizing: border-box;

  input,
  textarea {
    width: 100%;
    height: 100%;

    background-color: #ffffff;

    border: 1px solid #aec8f1;
    border-radius: 12px;

    padding: 20px 50px 0 22px;

    box-sizing: border-box;

    outline: none;

    font-size: 14px;

    &:focus {
      border-color: #0864f7;
    }
  }

  label {
    position: absolute;

    left: 22px;
    top: 50%;

    transform: translateY(-50%);

    transition: all 0.2s ease-in-out;

    pointer-events: none;

    color: #777;
  }

  input:focus + label,
  input:not(:placeholder-shown) + label {
    top: 6px;

    font-size: 12px;
    font-weight: 500;

    color: #0864f7;
  }

  .password-toggle {
    position: absolute;

    right: 15px;
    top: 50%;

    transform: translateY(-50%);

    width: auto;
    height: auto;

    padding: 7px;
    margin: 0;

    background: transparent;

    border: none;

    color: #777;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 20px;

    cursor: pointer;

    &:hover {
      color: #0864f7;
    }
  }

  @media (max-width: 480px) {
    width: 100%;

    height: 55px;

    margin-bottom: 5px;

    input,
    textarea {
      padding: 18px 45px 0 18px;

      font-size: 14px;
    }

    label {
      left: 18px;
    }

    .password-toggle {
      right: 8px;

      padding: 6px;

      font-size: 18px;
    }
  }
`;

export const RoleOptions = styled.div`
  width: 100%;
  max-width: 400px;

  display: flex;

  gap: 8px;

  margin-top: 5px;

  box-sizing: border-box;

  button {
    flex: 1;

    min-height: 48px;

    border: 1px solid #aec8f1;
    border-radius: 10px;

    background-color: white;

    color: #555;

    font-size: 13px;
    font-weight: 500;

    cursor: pointer;

    transition: all 0.2s ease;

    &:hover {
      border-color: #0864f7;

      color: #0864f7;
    }

    &.active {
      background-color: #0864f7;

      border-color: #0864f7;

      color: white;

      font-weight: 700;
    }
  }

  @media (max-width: 480px) {
    width: 100%;

    gap: 5px;

    button {
      min-height: 44px;

      padding: 5px;

      font-size: 11px;
    }
  }
`;

export const RoleLabel = styled.span`
  width: 100%;
  max-width: 400px;

  font-size: 13px;

  color: #555;

  margin-bottom: -12px;

  box-sizing: border-box;

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

export const Container = styled.div`
  width: 30%;

  min-height: 100vh;

  padding: 40px 30px;

  background-color: #dbe6f8;

  display: flex;

  flex-direction: column;

  align-items: center;

  justify-content: center;

  gap: 15px;

  box-sizing: border-box;

  form {
    width: 100%;

    max-width: 450px;

    display: flex;

    flex-direction: column;

    align-items: center;

    gap: 20px;
  }

  h2 {
    font-size: 2em;

    margin: 0 0 10px;

    text-align: center;
  }

  form > button[type="submit"] {
    width: 100%;

    max-width: 400px;

    min-height: 60px;

    border: none;

    border-radius: 12px;

    background-color: #0864f7;

    color: white;

    font-size: 16px;

    font-weight: 700;

    cursor: pointer;

    transition: background-color 0.2s ease;

    &:hover {
      background-color: #0053d6;
    }

    &:disabled {
      opacity: 0.6;

      cursor: not-allowed;
    }
  }

  p {
    font-size: 0.9em;

    cursor: pointer;

    text-decoration: underline;

    text-align: center;

    line-height: 1.4;
  }

  @media (max-width: 1024px) {
    width: 40%;

    padding: 30px 20px;
  }

  @media (max-width: 767px) {
    width: 100%;

    min-height: auto;

    padding: 40px 25px 50px;

    form {
      width: 100%;

      gap: 18px;
    }
  }

  @media (max-width: 480px) {
    width: 100%;

    padding: 30px 20px 40px;

    gap: 12px;

    h2 {
      font-size: 1.7em;

      margin-bottom: 5px;
    }

    form {
      width: 100%;

      gap: 15px;
    }

    form > button[type="submit"] {
      width: 100%;

      min-height: 55px;

      font-size: 15px;
    }

    p {
      width: 100%;

      margin: 0;

      font-size: 13px;
    }
  }

  @media (max-width: 360px) {
    padding: 25px 15px 35px;

    h2 {
      font-size: 1.5em;
    }
  }
`;
