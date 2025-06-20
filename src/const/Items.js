import {
  BuildingOfficeIcon,
  CalendarDaysIcon,
  Cog6ToothIcon,
  HomeIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  ArrowLeftEndOnRectangleIcon,
} from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../stores";

// ⚠️ Esta debe ser una función que se llame dentro de un componente
export const ItemsDefault = () => {
  const { logout } = useAuthStore(); // ✅ hook usado correctamente
  const navigate = useNavigate(); // ✅ hook usado correctamente

 

  return [
    { label: "Dashboard", icon: HomeIcon, href: "/dashboard" },
    { label: "Salas", icon: BuildingOfficeIcon, href: "/rooms" },
    { label: "Reservas", icon: CalendarDaysIcon, href: "/reservations" },
    { label: "Moderadores", icon: ShieldCheckIcon, href: "/moderators" },
    { label: "Estudiantes", icon: UserGroupIcon, href: "/students" },
    { label: "Ajustes", icon: Cog6ToothIcon, href: "/settings" },
    {
      label: "Cerrar sesión",
      icon: ArrowLeftEndOnRectangleIcon,
      onClick: logout,
    },
  ];
};
