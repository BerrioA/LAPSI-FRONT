// components/SessionInitializer.jsx
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useAuthStore } from "../stores";

export const SessionInitializer = ({ children }) => {
  const { token, refreshAccessToken, initialized } = useAuthStore();
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  const shouldSkipRefresh = ["/login", "/register", "/verify-account"].some(
    (path) => location.pathname.startsWith(path)
  );

  useEffect(() => {
    const initialize = async () => {
      if (!initialized && !token && !shouldSkipRefresh) {
        await refreshAccessToken(); // intentamos una vez
      }
      setLoading(false); // sea exitoso o no
    };

    initialize();
  }, [initialized, token, shouldSkipRefresh]);

  if (loading) return null; // puedes poner un spinner aquí si quieres

  return children;
};
