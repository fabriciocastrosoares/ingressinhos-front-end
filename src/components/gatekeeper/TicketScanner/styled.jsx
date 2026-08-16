import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 700px;

  margin: 0 auto;
  padding: 30px;

  box-sizing: border-box;

  background-color: #ffffff;

  border-radius: 16px;

  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);

  display: flex;
  flex-direction: column;
  align-items: center;

  text-align: center;

  h2 {
    margin: 0 0 10px;

    font-size: 24px;
    color: #222;
  }

  > p {
    margin: 0 0 25px;

    color: #666;

    font-size: 15px;

    line-height: 1.5;
  }

  @media (max-width: 768px) {
    max-width: 100%;

    padding: 25px;

    border-radius: 12px;

    h2 {
      font-size: 22px;
    }
  }

  @media (max-width: 480px) {
    padding: 20px 15px;

    border-radius: 10px;

    box-shadow: none;

    h2 {
      font-size: 20px;
    }

    > p {
      font-size: 14px;

      margin-bottom: 20px;
    }
  }
`;

export const ScannerContainer = styled.div`
  width: 100%;
  max-width: 450px;

  margin: 20px auto;

  border-radius: 12px;

  overflow: hidden;

  background-color: #f5f7fb;

  display: ${(props) => (props.$active ? "block" : "none")};

  /*
   * O html5-qrcode cria elementos internos dentro
   * desse container. Essas regras deixam a câmera
   * responsiva.
   */

  #qr-reader {
    width: 100% !important;
    max-width: 450px;

    margin: 0 auto;
  }

  video {
    width: 100% !important;

    height: auto !important;

    max-height: 400px;

    object-fit: cover;

    border-radius: 10px;
  }

  img {
    max-width: 100%;
  }

  @media (max-width: 480px) {
    width: 100%;

    margin: 15px auto;

    #qr-reader {
      width: 100% !important;
    }

    video {
      max-height: 320px;
    }
  }
`;

export const Button = styled.button`
  width: auto;

  min-width: 180px;

  min-height: 45px;

  padding: 10px 20px;

  border: none;

  border-radius: 8px;

  background-color: ${(props) => (props.$secondary ? "#777" : "#0864f7")};

  color: white;

  font-size: 14px;

  font-weight: 600;

  cursor: pointer;

  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${(props) => (props.$secondary ? "#666" : "#0053d6")};
  }

  &:disabled {
    opacity: 0.6;

    cursor: not-allowed;
  }

  @media (max-width: 480px) {
    width: 100%;

    min-width: 0;

    min-height: 46px;

    font-size: 14px;
  }
`;

export const Divider = styled.div`
  width: 100%;

  max-width: 500px;

  height: 1px;

  margin: 30px 0;

  background-color: #e1e5eb;

  position: relative;

  &::after {
    content: "ou";

    position: absolute;

    left: 50%;
    top: 50%;

    transform: translate(-50%, -50%);

    padding: 0 12px;

    background-color: #ffffff;

    color: #999;

    font-size: 13px;
  }

  @media (max-width: 480px) {
    margin: 25px 0;
  }
`;

export const ManualForm = styled.form`
  width: 100%;

  max-width: 500px;

  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 12px;

  h3 {
    margin: 0;

    font-size: 18px;

    color: #333;
  }

  p {
    margin: 0 0 5px;

    color: #777;

    font-size: 14px;

    line-height: 1.5;
  }

  input {
    width: 100%;

    height: 48px;

    padding: 0 15px;

    box-sizing: border-box;

    border: 1px solid #ccc;

    border-radius: 8px;

    outline: none;

    font-size: 15px;

    transition: border-color 0.2s ease;

    &:focus {
      border-color: #0864f7;
    }

    &::placeholder {
      color: #aaa;
    }
  }

  ${Button} {
    margin-top: 5px;
  }

  @media (max-width: 480px) {
    h3 {
      font-size: 17px;
    }

    p {
      font-size: 13px;
    }

    input {
      height: 46px;

      font-size: 14px;
    }
  }
`;

export const Result = styled.div`
  width: 100%;

  max-width: 500px;

  display: flex;
  flex-direction: column;
  align-items: center;

  text-align: center;

  > span {
    width: 60px;
    height: 60px;

    margin-bottom: 15px;

    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 32px;
    font-weight: bold;
  }

  h2 {
    margin: 0 0 10px;

    font-size: 24px;
  }

  > p {
    margin: 0 0 25px;

    color: #666;

    line-height: 1.5;
  }

  > div {
    width: 100%;

    padding: 15px;

    margin-bottom: 10px;

    box-sizing: border-box;

    border: 1px solid #e1e5eb;

    border-radius: 10px;

    text-align: left;

    strong {
      display: block;

      margin-bottom: 5px;

      font-size: 13px;

      color: #777;
    }

    p {
      margin: 0;

      font-size: 15px;

      color: #333;

      overflow-wrap: anywhere;
    }
  }

  @media (max-width: 480px) {
    h2 {
      font-size: 21px;
    }

    > p {
      font-size: 14px;
    }

    > div {
      padding: 12px;

      strong {
        font-size: 12px;
      }

      p {
        font-size: 14px;
      }
    }
  }
`;

export const SuccessResult = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  ${Result} {
    > span {
      background-color: #d1fae5;

      color: #047857;
    }

    h2 {
      color: #047857;
    }
  }

  ${Button} {
    margin-top: 15px;
  }
`;

export const ErrorResult = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  ${Result} {
    > span {
      background-color: #fee2e2;

      color: #dc2626;
    }

    h2 {
      color: #dc2626;
    }

    > p {
      color: #666;
    }
  }

  ${Button} {
    margin-top: 15px;
  }
`;
