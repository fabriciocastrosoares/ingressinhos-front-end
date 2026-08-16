import styled from "styled-components";

export const Section = styled.section`
  width: 100%;

  max-width: 800px;

  margin: 0 auto;

  padding: 25px;

  background-color: #ffffff;

  border-radius: 12px;

  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);

  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 20px;
  }

  @media (max-width: 480px) {
    padding: 15px;
  }
`;

export const Header = styled.div`
  display: flex;

  justify-content: space-between;
  align-items: flex-start;

  gap: 20px;

  margin-bottom: 20px;

  h2 {
    margin: 0 0 8px;

    font-size: 24px;
  }

  p {
    margin: 4px 0;

    color: #666;
  }

  strong {
    display: block;

    color: #222;

    font-size: 17px;
  }

  @media (max-width: 600px) {
    flex-direction: column;

    h2 {
      font-size: 21px;
    }

    strong {
      font-size: 16px;
    }
  }
`;

export const EventInfo = styled.div`
  padding: 15px;

  margin-bottom: 20px;

  border-radius: 10px;

  background-color: #f5f7fb;

  p {
    margin: 8px 0;

    color: #555;

    line-height: 1.5;
  }

  @media (max-width: 480px) {
    padding: 12px;

    p {
      font-size: 14px;
    }
  }
`;

export const BackButton = styled.button`
  flex-shrink: 0;

  padding: 9px 15px;

  border: none;

  border-radius: 8px;

  background-color: #eeeeee;

  cursor: pointer;

  font-weight: 600;

  &:hover {
    background-color: #dddddd;
  }

  @media (max-width: 600px) {
    width: 100%;
    min-height: 44px;
  }
`;

export const CameraButton = styled.button`
  width: 100%;

  min-height: 48px;

  padding: 12px;

  border: none;

  border-radius: 8px;

  background-color: #0864f7;

  color: white;

  font-weight: 700;

  font-size: 15px;

  cursor: pointer;

  &:hover {
    background-color: #0053d6;
  }
`;

export const ScannerContainer = styled.div`
  width: 100%;

  margin-top: 20px;

  display: ${(props) => (props.$visible ? "block" : "none")};

  text-align: center;

  overflow: hidden;

  border-radius: 12px;

  background-color: #111;

  #qr-reader {
    width: 100% !important;

    max-width: 500px;

    margin: 0 auto;
  }

  #qr-reader video {
    width: 100% !important;

    height: auto !important;

    object-fit: cover;
  }

  #qr-reader__scan_region {
    width: 100% !important;
  }

  p {
    margin: 10px;

    color: white;

    font-size: 13px;
  }

  @media (max-width: 480px) {
    margin-top: 15px;

    #qr-reader {
      width: 100% !important;
    }
  }
`;

export const Form = styled.form`
  display: flex;

  flex-direction: column;

  gap: 10px;

  margin-top: 25px;

  label {
    font-size: 14px;

    font-weight: 600;
  }

  input {
    width: 100%;

    padding: 13px;

    box-sizing: border-box;

    border: 1px solid #ccc;

    border-radius: 8px;

    outline: none;

    font-size: 15px;

    &:focus {
      border-color: #0864f7;
    }
  }
`;

export const ValidateButton = styled.button`
  width: 100%;

  min-height: 46px;

  margin-top: 5px;

  border: none;

  border-radius: 8px;

  background-color: #0864f7;

  color: white;

  font-weight: 700;

  cursor: pointer;

  &:disabled {
    opacity: 0.6;

    cursor: not-allowed;
  }
`;

export const Result = styled.div`
  margin-top: 25px;

  padding: 20px;

  border-radius: 10px;

  background-color: ${(props) => (props.$success ? "#d1fae5" : "#fee2e2")};

  color: ${(props) => (props.$success ? "#065f46" : "#991b1b")};

  h3 {
    margin-top: 0;
  }

  p {
    line-height: 1.5;
  }
`;
