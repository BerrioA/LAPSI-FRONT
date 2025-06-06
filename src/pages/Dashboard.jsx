import { DashboardLayout } from "../layouts";
import {
  AcademicCapIcon,
  CalendarDaysIcon,
  ClipboardDocumentListIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";

const palette = {
  primary: "#B29A64",
  secondary: "#152E3A",
  lightGray: "#F5F5F5",
  offWhite: "#FAFAFA",
  fullWhite: "#FFFFFF",
};

const stats = [
  {
    title: "Estudiantes",
    count: 57,
    icon: UsersIcon,
    bg: "bg-[#F5F5F5]",
    iconColor: "text-[#B29A64]",
  },
  {
    title: "Reservas activas",
    count: 18,
    icon: CalendarDaysIcon,
    bg: "bg-[#FAFAFA]",
    iconColor: "text-[#152E3A]",
  },
  {
    title: "Historial",
    count: 443,
    icon: ClipboardDocumentListIcon,
    bg: "bg-[#FFFFFF]",
    iconColor: "text-[#B29A64]",
  },
  {
    title: "Carreras",
    count: 12,
    icon: AcademicCapIcon,
    bg: "bg-[#F5F5F5]",
    iconColor: "text-[#152E3A]",
  },
];

const StatCard = ({ title, count, icon: Icon, bg, iconColor }) => (
  <div
    className={`rounded-2xl p-5 flex items-center gap-4 shadow-sm hover:shadow-md transition border border-gray-100 ${bg}`}
  >
    <div className={`p-3 rounded-xl bg-white shadow-inner ${iconColor}`}>
      <Icon className="w-6 h-6" />
    </div>
    <div>
      <p className="text-sm font-medium text-gray-500">{title}</p>
      <p className="text-2xl font-bold text-secondary">{count}</p>
    </div>
  </div>
);

export const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-secondary">Dashboard</h1>
        <p className="text-gray-500 mt-1">Resumen general del sistema</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <StatCard
            key={stat.title}
            title={stat.title}
            count={stat.count}
            icon={stat.icon}
            bg={stat.bg}
            iconColor={stat.iconColor}
          />
        ))}
      </div>
    </DashboardLayout>
  );
};
