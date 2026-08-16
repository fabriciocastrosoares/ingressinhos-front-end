import styled from "styled-components";

export const RoleOptions = styled.div`
  width: 90%;
  max-width: 400px;
  display: flex;
  gap: 8px;
  margin-top: 5px;

  button {
    flex: 1;
    height: 48px;
    border: 1px solid #aec8f1;
    border-radius: 10px;
    background-color: #ffffff;
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
      color: #ffffff;
      font-weight: 700;
    }
  }

  @media (max-width: 480px) {
    button {
      font-size: 11px;
      height: 44px;
    }
  }
`;

export const RoleLabel = styled.span`
  width: 90%;
  max-width: 400px;
  font-size: 13px;
  color: #555;
  margin-bottom: -12px;
`;

export const Options = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const OptionLink = styled.h5`
  cursor: pointer;
  color: ${(props) => (props.$primary === false ? "#777" : "")};
  font-size: 1em;

  @media (max-width: 480px) {
    font-size: 0.9em;
  }
`;

export const InputWrapper = styled.div`
  position: relative;
  width: 90%;
  max-width: 400px;
  height: ${(props) => (props.$isBig ? "120px" : "60px")};
  margin-bottom: 5px;

  input,
  textarea {
    background-color: #ffffff;
    width: 100%;
    height: 100%;
    border-radius: 12px;
    border: 1px solid #aec8f1ff;
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

    padding: 5px;
    margin: 0;

    background: transparent;
    border: none;

    color: #777;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 20px;

    &:hover {
      color: #0864f7;
    }
  }

  @media (max-width: 480px) {
    height: ${(props) => (props.$isBig ? "100px" : "50px")};
    margin-bottom: 15px;
  }
`;

export const Container = styled.div`
  background-color: #dbe6f8ff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 5px;
  padding: 20px;
  box-sizing: border-box;

  form {
    width: 90%;
    max-width: 450px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }

  h2 {
    font-size: 2em;
    margin-bottom: 10px;
  }

  button {
    width: 90%;
    max-width: 400px;
    height: 60px;
    border: none;
    border-radius: 12px;
    background-color: #0864f7;
    font-size: 16px;
    font-weight: 700;
    color: #ffffff;
    cursor: pointer;
    outline: none;
    transition: background-color 0.2s ease;
  }

  p {
    font-size: 0.9em;
    cursor: pointer;
    text-decoration: underline;
  }

  @media (min-width: 768px) {
    width: 30%;
    min-height: 100vh;
  }
`;
