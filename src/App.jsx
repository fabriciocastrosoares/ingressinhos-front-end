import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import UserProvider from "./contexts/UserContext";

import SigninPage from "./pages/SigninPage/SigninPage";
import SignupPage from "./pages/SignupPage/SignupPage";

import ClientPage from "./pages/ClientPage/ClientPage";
import OrganizerPage from "./pages/OrganizerPage/OrganizerPage";
import GatekeeperPage from "./pages/GatekeeperPage/GatekeeperPage";

export default function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <Routes>
          <Route path="/" element={<SigninPage />} />

          <Route path="/signup-page" element={<SignupPage />} />

          <Route path="/client" element={<ClientPage />} />

          <Route path="/organizer" element={<OrganizerPage />} />

          <Route path="/gatekeeper" element={<GatekeeperPage />} />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </UserProvider>
    </BrowserRouter>
  );
}
