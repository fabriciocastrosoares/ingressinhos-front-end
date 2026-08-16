import styled from "styled-components";

export const Section = styled.section`
  background-color: white;

  padding: 30px;

  border-radius: 12px;

  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);

  max-width: 700px;

  margin: 0 auto;
`;

export const Header = styled.div`
  display: flex;

  justify-content: space-between;
  align-items: flex-start;

  margin-bottom: 25px;

  h2 {
    margin-bottom: 10px;
  }

  p {
    color: #777;
    margin-bottom: 5px;
  }

  strong {
    color: #222;
  }

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 15px;
  }
`;

export const EventInfo = styled.div`
  background-color: #f5f7fb;

  padding: 15px;

  border-radius: 10px;

  margin-bottom: 25px;

  p {
    margin: 6px 0;
    color: #555;
  }
`;

export const CameraButton = styled.button`
  width: 100%;

  padding: 14px;

  margin-bottom: 20px;

  border: none;

  border-radius: 8px;

  background-color: #0864f7;

  color: white;

  font-size: 15px;

  font-weight: 600;

  cursor: pointer;

  &:hover {
    background-color: #0053d6;
  }
`;

export const ScannerContainer = styled.div`
  width: 100%;

  margin-bottom: 25px;

  display: ${(props) => (props.$visible ? "flex" : "none")};

  flex-direction: column;

  align-items: center;

  #qr-reader {
    width: 100%;
    max-width: 500px;

    border: none !important;
  }

  #qr-reader video {
    width: 100% !important;

    border-radius: 12px;
  }

  #qr-reader__dashboard {
    margin-top: 10px;
  }

  p {
    margin-top: 12px;

    color: #777;

    font-size: 14px;

    text-align: center;
  }
`;

export const Form = styled.form`
  display: flex;

  flex-direction: column;

  gap: 10px;

  label {
    font-size: 14px;

    font-weight: 600;
  }

  input {
    width: 100%;

    box-sizing: border-box;

    padding: 14px;

    border: 1px solid #ccc;

    border-radius: 8px;

    font-size: 15px;

    outline: none;

    &:focus {
      border-color: #0864f7;
    }
  }
`;

export const ValidateButton = styled.button`
  margin-top: 10px;

  padding: 14px;

  border: none;

  border-radius: 8px;

  background-color: #0864f7;

  color: white;

  font-size: 15px;

  font-weight: 600;

  cursor: pointer;

  &:hover {
    background-color: #0053d6;
  }

  &:disabled {
    opacity: 0.6;

    cursor: not-allowed;
  }
`;

export const BackButton = styled.button`
  border: none;

  background-color: #eee;

  padding: 9px 16px;

  border-radius: 8px;

  cursor: pointer;

  &:hover {
    background-color: #ddd;
  }
`;

export const Result = styled.div`
  margin-top: 30px;

  padding: 20px;

  border-radius: 10px;

  background-color: ${(props) => (props.$success ? "#e8f7ee" : "#fdecec")};

  border: 1px solid ${(props) => (props.$success ? "#b7e4c7" : "#f5b5b5")};

  h3 {
    margin-bottom: 10px;

    color: ${(props) => (props.$success ? "#198754" : "#dc3545")};
  }

  p {
    margin: 7px 0;

    color: #555;
  }
`;
