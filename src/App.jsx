import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Dashboard, Home, NotFound, Rooms } from "./pages";
import { LoginPage, RegisterPage } from "./features/auth";
import { Calendar } from "./pages/Calendar";
import VerifyAccount from "./pages/VerifyAccount";
import { CalendarTest } from "./pages/CalendarTest";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/rooms" element={<Rooms />} />
        {/* <Route path="/rooms/:idRoom" element={<Calendar />} /> */}
        <Route path="/rooms/:idRoom" element={<CalendarTest />} />
        <Route path="/verify-account/:code" element={<VerifyAccount />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
