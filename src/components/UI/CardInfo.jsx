import {
  UserGroupIcon,
  CalendarDaysIcon,
  BuildingOffice2Icon,
  ClipboardDocumentListIcon,
} from "@heroicons/react/24/outline";

const iconMap = {
  Estudiantes: UserGroupIcon,
  "Reservas Activas": CalendarDaysIcon,
  Salas: BuildingOffice2Icon,
  "Total Reservas": ClipboardDocumentListIcon,
};

const colorClasses = {
  green: "bg-green-100 text-green-800",
  blue: "bg-blue-100 text-blue-800",
  purple: "bg-purple-100 text-purple-800",
  amber: "bg-amber-100 text-amber-800",
};

export const CardInformation = ({ title, count, color = "blue" }) => {
  const Icon = iconMap[title] || UserGroupIcon;
  const colorClass = colorClasses[color];

  return (
    <div className="bg-white rounded-xl shadow-sm border p-4 flex items-center gap-4 hover:shadow-md transition">
      <div
        className={`rounded-full p-2 w-12 h-12 flex items-center justify-center ${colorClass}`}
      >
        <Icon className="w-6 h-6" />
      </div>
      <div>
        <h4 className="text-sm text-gray-500">{title}</h4>
        <p className="text-xl font-semibold text-secondary">{count}</p>
      </div>
    </div>
  );
};
