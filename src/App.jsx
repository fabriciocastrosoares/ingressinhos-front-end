import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import SigninPage from "./pages/HomePage/Home";

function App() {
  return (
    <PagesContainer>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SigninPage />} />
        </Routes>
      </BrowserRouter>
    </PagesContainer>
  );
}

export default App;

const PagesContainer = styled.main`
  background-color: rebeccapurple;
  width: calc(100vw - 50px);
  height: calc(100vh - 50px);
  padding: 25px;
`;
