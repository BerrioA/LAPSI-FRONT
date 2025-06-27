import {
  ArrowPathRoundedSquareIcon,
  BuildingOfficeIcon,
  CalendarDaysIcon,
  Cog6ToothIcon,
  HomeIcon,
  UserCircleIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

export const ItemsDefault = () => {
  return [
    { label: "Dashboard", icon: HomeIcon, href: "/dashboard" },
    { label: "Salas", icon: BuildingOfficeIcon, href: "/rooms" },
    { label: "Reservas", icon: CalendarDaysIcon, href: "/reservations" },
    { label: "Estudiantes", icon: UserGroupIcon, href: "/students" },
    {
      label: "Ajustes",
      icon: Cog6ToothIcon,
      subItems: [
        { label: "Perfil", icon: UserCircleIcon, href: "/settings/profile" },
        {
          label: "Cambiar contraseña",
          icon: ArrowPathRoundedSquareIcon,
          href: "/settings/change-password",
        },
      ],
    },
  ];
};
