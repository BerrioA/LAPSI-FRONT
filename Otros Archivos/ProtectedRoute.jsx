import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./AuthContext"; // Importa tu contexto de autenticación

const ProtectedRoute = ({ allowedRoles }) => {
  const { isAuthenticated, user } = useAuth(); // Obtén el estado de autenticación y el usuario del contexto
  const userRole = user?.role; //Asume que el usuario tiene una propiedad 'role'

  if (!isAuthenticated) {
    // Si no está autenticado, redirige al inicio de sesión
    return <Navigate to="/login" replace />;
  }

  if (allowedRoles && !allowedRoles.includes(userRole)) {
    // Si el usuario no tiene el rol permitido, redirige a una página de acceso denegado
    return <Navigate to="/unauthorized" replace />;
  }

  // Si está autenticado y tiene el rol permitido, renderiza la ruta anidada
  return <Outlet />;
};

export default ProtectedRoute;
