import { useEffect, useMemo } from "react";
import { HeadPage } from "../../components";
import { DashboardLayout } from "../../layouts";
import { useReservationStore, userStore } from "../../stores";
import { DateCalendar } from "./components/Calendar";
import { Charts } from "./components/Charts";
import moment from "moment";
import "moment/locale/es";
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
  const { users, fetchUsers } = userStore();
  const { reservations, fetchReservations } = useReservationStore();

  // Agrupar reservas por mes usando useMemo para evitar recálculos innecesarios
  const monthlyData = useMemo(() => {
    const grouped = {};

    reservations.forEach((reserva) => {
      const month = moment(reserva.bookingDate).format("MMMM"); // Ej: "julio"
      grouped[month] = (grouped[month] || 0) + 1;
    });

    // Convertimos a array y aseguramos orden cronológico
    const orderedMonths = moment.months(); // ["enero", "febrero", ...]
    return orderedMonths.map((mes) => ({
      mes: mes.charAt(0).toUpperCase() + mes.slice(1), // Capitalizar
      reservas: grouped[mes] || 0,
    }));
  }, [reservations]);

  // Reservas del día
  const reservasHoy = useMemo(() => {
    const hoy = moment();
    return reservations.filter(
      (r) => r.createdAt && moment(r.createdAt).isSame(hoy, "day")
    ).length;
  }, [reservations]);

  const reservasCanceladas = useMemo(() => {
    return reservations.filter((r) => r.status === "cancelada").length;
  }, [reservations]);

  useEffect(() => {
    fetchReservations();
  }, []);

  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <DashboardLayout>
      <HeadPage
        page="Dashboard"
        description="Panel principal de control para visualizar y gestionar eficientemente las reservas dentro del sistema LAPSI."
      />

      <div className="space-y-4">
        {/* Tarjetas de estadísticas */}
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
            value={reservasHoy}
          />
          <StatCard
            icon={QuestionMarkCircleIcon}
            title="Reservas Canceladas"
            value={reservasCanceladas}
          />
        </div>

        {/* Gráfica y calendario */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2 bg-full-white rounded-2xl shadow">
            <h2 className="text-xl font-semibold text-secondary mb-4 text-center">
              Reservas por mes
            </h2>
            <Charts data={monthlyData} />
          </div>
          <div className="">
            <DateCalendar />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};
