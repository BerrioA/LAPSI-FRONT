import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Dashboard,
  Home,
  NotFound,
  Unauthorized,
  VerifyAccount,
} from "./pages";
import {
  Calendar,
  LoginPage,
  ModeratorsPage,
  RegisterPage,
  Reservations,
  Rooms,
  StudentsPage,
} from "./features";
import { PrivateRoute } from "./routes/PrivateRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/login"
          element={<LoginPage />}
        />
        <Route
          path="/unauthorized"
          element={<Unauthorized />}
        />

        <Route
          path="/register"
          element={<RegisterPage />}
        />

        <Route element={<PrivateRoute allowedRoles={["Admin"]} />}>
          <Route
            path="/moderators"
            element={<ModeratorsPage />}
          />
          <Route
            path="/students"
            element={<StudentsPage />}
          />
        </Route>

        <Route
          element={<PrivateRoute allowedRoles={["Admin", "Estudiante"]} />}
        >
          <Route
            path="/dashboard"
            element={<Dashboard />}
          />
          <Route
            path="/rooms"
            element={<Rooms />}
          />
          <Route
            path="/rooms/:idRoom"
            element={<Calendar />}
          />
          <Route
            path="/reservations"
            element={<Reservations />}
          />
        </Route>

        <Route
          path="/verify-account/:code"
          element={<VerifyAccount />}
        />
        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
