import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Dashboard, Home, NotFound, VerifyAccount } from "./pages";
import {
  Calendar,
  LoginPage,
  RegisterPage,
  Reservations,
  Rooms,
} from "./features";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/rooms/:idRoom" element={<Calendar />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/verify-account/:code" element={<VerifyAccount />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
