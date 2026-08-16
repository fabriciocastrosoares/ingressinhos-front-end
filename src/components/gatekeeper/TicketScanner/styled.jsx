import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  max-width: 700px;

  margin: 0 auto;

  text-align: center;

  h2 {
    margin-bottom: 10px;
  }

  > p {
    margin-bottom: 25px;

    color: #666;
  }
`;

export const ScannerContainer = styled.div`
  width: 100%;

  max-width: 500px;

  margin: 25px auto;

  overflow: hidden;

  border-radius: 12px;

  display: ${(props) => (props.$active ? "block" : "none")};

  video {
    width: 100%;
  }

  #qr-reader__scan_region {
    min-height: 250px;
  }

  #qr-reader__dashboard {
    padding: 10px;
  }

  #qr-reader__dashboard_section_csr button {
    padding: 8px 15px;

    border: none;
    border-radius: 8px;

    background-color: #0864f7;

    color: white;

    cursor: pointer;
  }
`;

export const Button = styled.button`
  border: none;

  border-radius: 10px;

  padding: 13px 25px;

  background-color: ${(props) => (props.$secondary ? "#777" : "#0864f7")};

  color: white;

  font-size: 15px;

  font-weight: 600;

  cursor: pointer;

  transition: 0.2s;

  &:hover {
    background-color: ${(props) => (props.$secondary ? "#555" : "#0053d6")};
  }
`;

export const Divider = styled.div`
  width: 100%;

  margin: 35px 0;

  border-top: 1px solid #ddd;
`;

export const ManualForm = styled.form`
  display: flex;

  flex-direction: column;

  align-items: center;

  gap: 12px;

  h3 {
    margin-bottom: 0;
  }

  p {
    color: #666;

    font-size: 14px;

    margin-bottom: 10px;
  }

  input {
    width: 100%;

    max-width: 450px;

    padding: 14px;

    border: 1px solid #ccc;

    border-radius: 10px;

    outline: none;

    font-size: 15px;

    &:focus {
      border-color: #0864f7;
    }
  }
`;

export const Result = styled.div`
  text-align: center;

  > span {
    display: flex;

    width: 70px;
    height: 70px;

    margin: 0 auto 20px;

    align-items: center;
    justify-content: center;

    border-radius: 50%;

    font-size: 40px;
    font-weight: bold;
  }

  h2 {
    margin-bottom: 10px;
  }

  > p {
    margin-bottom: 25px;

    color: #666;
  }

  > div {
    margin: 15px 0;

    padding: 15px;

    border-radius: 10px;

    background-color: #f5f7fb;

    text-align: left;

    p {
      margin-top: 5px;
    }
  }
`;

export const SuccessResult = styled.div`
  padding: 30px;

  border-radius: 16px;

  background-color: #ecfdf5;

  border: 1px solid #a7f3d0;

  button {
    margin-top: 20px;
  }

  ${Result} {
    > span {
      background-color: #10b981;

      color: white;
    }

    h2 {
      color: #065f46;
    }
  }
`;

export const ErrorResult = styled.div`
  padding: 30px;

  border-radius: 16px;

  background-color: #fef2f2;

  border: 1px solid #fecaca;

  button {
    margin-top: 20px;
  }

  ${Result} {
    > span {
      background-color: #ef4444;

      color: white;
    }

    h2 {
      color: #991b1b;
    }
  }
`;
