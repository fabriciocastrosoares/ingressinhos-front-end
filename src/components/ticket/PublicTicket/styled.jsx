import styled from "styled-components";

export const Container = styled.main`
  min-height: 100vh;

  width: 100%;

  padding: 40px 20px;

  box-sizing: border-box;

  display: flex;

  align-items: center;

  justify-content: center;

  background-color: #f5f7fb;
`;

export const Card = styled.section`
  width: 100%;

  max-width: 500px;

  padding: 30px;

  box-sizing: border-box;

  background-color: white;

  border-radius: 16px;

  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.08);

  @media (max-width: 480px) {
    padding: 20px;

    border-radius: 12px;
  }
`;

export const Header = styled.header`
  text-align: center;

  padding-bottom: 20px;

  border-bottom: 1px dashed #ddd;

  h1 {
    margin: 0;

    color: #0864f7;

    font-size: 28px;
  }

  p {
    margin: 5px 0 0;

    color: #777;
  }

  @media (max-width: 480px) {
    h1 {
      font-size: 24px;
    }
  }
`;

export const EventInfo = styled.div`
  padding: 25px 0;

  h2 {
    margin: 0 0 20px;

    font-size: 22px;

    word-break: break-word;
  }

  p {
    margin: 10px 0;

    color: #555;

    line-height: 1.5;
  }

  @media (max-width: 480px) {
    padding: 20px 0;

    h2 {
      font-size: 19px;
    }

    p {
      font-size: 14px;
    }
  }
`;

export const Status = styled.div`
  padding: 14px;

  border-radius: 10px;

  text-align: center;

  font-weight: 700;

  background-color: ${(props) =>
    props.$status === "VALID"
      ? "#d1fae5"
      : props.$status === "USED"
        ? "#fef3c7"
        : "#fee2e2"};

  color: ${(props) =>
    props.$status === "VALID"
      ? "#065f46"
      : props.$status === "USED"
        ? "#92400e"
        : "#991b1b"};
`;

export const Loading = styled.p`
  color: #666;

  text-align: center;
`;

export const ErrorMessage = styled.div`
  text-align: center;

  h2 {
    color: #991b1b;
  }

  p {
    color: #666;

    line-height: 1.5;
  }
`;
