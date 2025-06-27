import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Home, NotFound, Unauthorized, VerifyAccount } from "./pages";
import {
  Calendar,
  ChangePassword,
  Dashboard,
  LoginPage,
  ModeratorsPage,
  Profile,
  RegisterPage,
  Reservations,
  Rooms,
  Settings,
  StudentsPage,
} from "./features";

import { PrivateRoute } from "./routes/PrivateRoute";
import { useAuthStore } from "./stores";

function App() {
  const { isLoggedIn } = useAuthStore();
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            isLoggedIn ? (
              <Navigate
                to="/dashboard"
                replace
              />
            ) : (
              <Home />
            )
          }
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
          element={
            isLoggedIn ? (
              <Navigate
                to="/dashboard"
                replace
              />
            ) : (
              <RegisterPage />
            )
          }
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
          {/* aalalal */}
          <Route
            path="/rooms"
            element={<Rooms />}
          >
            <Route
              path=":idRoom"
              element={<Calendar />}
            />
          </Route>
          {/* aalalal */}
          <Route
            path="/reservations"
            element={<Reservations />}
          />
          <Route
            path="settings"
            element={<Settings />}
          >
            <Route
              path="profile"
              element={<Profile />}
            />
            <Route
              path="change-password"
              element={<ChangePassword />}
            />
          </Route>
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
