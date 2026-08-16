import styled from "styled-components";

export const Container = styled.main`
  min-height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 30px;

  box-sizing: border-box;

  background-color: #f5f7fb;
`;

export const Card = styled.div`
  width: 100%;
  max-width: 500px;

  background-color: white;

  border-radius: 16px;

  padding: 30px;

  box-sizing: border-box;

  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
`;

export const Header = styled.header`
  text-align: center;

  padding-bottom: 25px;

  border-bottom: 1px solid #eee;

  h1 {
    color: #0864f7;

    margin-bottom: 5px;
  }

  p {
    color: #777;
  }
`;

export const EventInfo = styled.section`
  padding: 25px 0;

  h2 {
    margin-bottom: 20px;

    font-size: 22px;
  }

  p {
    margin: 10px 0;

    color: #555;
  }
`;

export const Status = styled.div`
  padding: 15px;

  border-radius: 10px;

  text-align: center;

  font-weight: 700;

  background-color: ${(props) => {
    if (props.$status === "VALID") {
      return "#d1fae5";
    }

    if (props.$status === "USED") {
      return "#fef3c7";
    }

    return "#fee2e2";
  }};

  color: ${(props) => {
    if (props.$status === "VALID") {
      return "#065f46";
    }

    if (props.$status === "USED") {
      return "#92400e";
    }

    return "#991b1b";
  }};
`;

export const Loading = styled.div`
  font-size: 18px;
  color: #555;
`;

export const ErrorMessage = styled.div`
  text-align: center;

  h2 {
    margin-bottom: 10px;
  }

  p {
    color: #666;
  }
`;
