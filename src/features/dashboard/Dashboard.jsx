import { useEffect } from "react";
import { HeadPage } from "../../components";
import { DashboardLayout } from "../../layouts";
import { useAuthStore, useReservationStore, userStore } from "../../stores";
import { DateCalendar } from "./components/Calendar";
import { Charts } from "./components/Charts";
import {
  UserGroupIcon,
  ClipboardDocumentListIcon,
  CalendarDaysIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/24/outline";

const StatCard = ({ icon: Icon, title, value }) => (
  <div className="bg-full-white rounded-2xl shadow flex items-center gap-4 p-5 w-full">
    <div className="bg-primary p-3 rounded-full flex items-center justify-center">
      <Icon className="h-6 w-6 text-white" />
    </div>
    <div className="flex flex-col">
      <p className="text-secondary text-sm font-medium">{title}</p>
      <p className="text-2xl font-bold text-primary">{value}</p>
    </div>
  </div>
);

export const Dashboard = () => {
  const { users } = userStore();
  const { reservations } = useReservationStore();
  const data = [
    { mes: "Enero", reservas: 10 },
    { mes: "Febrero", reservas: 18 },
    { mes: "Marzo", reservas: 5 },
    { mes: "Abril", reservas: 12 },
    { mes: "Mayo", reservas: 20 },
    { mes: "Junio", reservas: 15 },
    { mes: "Julio", reservas: 8 },
  ];

  const { refreshAccessToken } = useAuthStore();
  const initialized = useAuthStore((state) => state.initialized);
  useEffect(() => {
    refreshAccessToken();
  }, []);

  if (!initialized) return null;
  return (
    <DashboardLayout>
      <HeadPage
        page="Dashboard"
        description="Panel principal de control para visualizar y gestionar eficientemente las reservas dentro del sistema LAPSI."
      />

      <div className="space-y-4">
        {/* Top stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard
            icon={UserGroupIcon}
            title="Total Estudiantes"
            value={users.length}
          />
          <StatCard
            icon={ClipboardDocumentListIcon}
            title="Reservas Totales"
            value={reservations.length}
          />
          <StatCard
            icon={CalendarDaysIcon}
            title="Reservas Hoy"
            value="5"
          />
          <StatCard
            icon={QuestionMarkCircleIcon}
            title="Consultas Pendientes"
            value="2"
          />
        </div>

        {/* Gráfica y calendario */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2 bg-full-white rounded-2xl shadow">
            <h2 className="text-xl font-semibold text-secondary mb-4 text-center">
              Reservas por mes
            </h2>
            <Charts data={data} />
          </div>
          <div className="">
            <DateCalendar />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};
