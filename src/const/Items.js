import {
  BuildingOfficeIcon,
  CalendarDaysIcon,
  Cog6ToothIcon,
  HomeIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  ArrowLeftEndOnRectangleIcon
} from "@heroicons/react/24/outline";

export const ItemsDefault = [
  { label: "Dashboard", icon: HomeIcon, href: "/dashboard" },
  { label: "Salas", icon: BuildingOfficeIcon, href: "/rooms" },
  { label: "Reservas", icon: CalendarDaysIcon, href: "/reservations" },
  { label: "Moderadores", icon: ShieldCheckIcon, href: "/moderators" },
  { label: "Estudiantes", icon: UserGroupIcon, href: "/students" },
  { label: "Ajustes", icon: Cog6ToothIcon, href: "/settings" },
  { label: "Cerrar sesión", icon: ArrowLeftEndOnRectangleIcon, href: "/" },
];
