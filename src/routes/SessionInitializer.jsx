import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useAuthStore } from "../stores";

export const SessionInitializer = ({ children }) => {
  const { token, refreshAccessToken, initialized } = useAuthStore();
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const initialize = async () => {
      const shouldSkipRefresh = ["/login", "/register", "/verify-account"].some(
        (path) => location.pathname.startsWith(path)
      );

      if (!initialized && !token && !shouldSkipRefresh) {
        await refreshAccessToken();
      }

      setLoading(false);
    };

    initialize();
  }, [location.pathname, initialized, token, refreshAccessToken]);

  if (loading) return null;

  return children;
};
