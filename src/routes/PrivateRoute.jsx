import { Navigate, Outlet } from "react-router-dom";
import { useProfileStore } from "../stores";

export const PrivateRoute = ({ allowedRoles }) => {
  const { role, uid } = useProfileStore();
  console.log(role);
  if (!uid) {
    return (
      <Navigate
        to="/login"
        replace
      />
    );
  }

  if (!allowedRoles.includes(role)) {
    return (
      <Navigate
        to="/unauthorized"
        replace
      />
    );
  }

  return <Outlet />;
};
