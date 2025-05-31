import { useState, useEffect } from "react";
import {
  UsersIcon,
  HomeModernIcon,
  CalendarIcon,
  HomeIcon,
  ClockIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/24/outline";
import { Layout } from "../components/layout/Layout";

// Reusable Stats Card Component
const StatsCard = ({ title, value, icon: Icon, color, trend, trendValue }) => {
  return (
    <div className="bg-full-white p-6 rounded-lg shadow-sm border border-light-gray hover:shadow-md transition-shadow duration-200">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className={`p-3 rounded-lg ${color}`}>
            <Icon className="h-6 w-6 text-full-white" />
          </div>
          <div className="ml-4">
            <p className="text-sm font-medium text-secondary/70">{title}</p>
            <p className="text-2xl font-bold text-secondary">{value}</p>
          </div>
        </div>
        {trend && (
          <div
            className={`flex items-center space-x-1 text-sm ${
              trend === "up" ? "text-green-600" : "text-red-600"
            }`}
          >
            <UsersIcon
              className={`h-4 w-4 ${trend === "down" ? "rotate-180" : ""}`}
            />
            <span>{trendValue}</span>
          </div>
        )}
      </div>
    </div>
  );
};

// Reusable Activity Item Component
const ActivityItem = ({ action, user, time, type = "info" }) => {
  const getIconColor = () => {
    switch (type) {
      case "success":
        return "bg-green-500";
      case "warning":
        return "bg-yellow-500";
      case "error":
        return "bg-red-500";
      default:
        return "bg-primary";
    }
  };

  return (
    <div className="flex items-center space-x-4 py-3 border-b border-light-gray last:border-b-0">
      <div
        className={`h-2 w-2 ${getIconColor()} rounded-full flex-shrink-0`}
      ></div>
      <div className="flex-1 min-w-0">
        <p className="text-sm text-secondary">
          <span className="font-medium">{action}</span>
          {user && <span className="text-secondary/70"> - {user}</span>}
        </p>
        <p className="text-xs text-secondary/60 flex items-center mt-1">
          <ClockIcon className="h-3 w-3 mr-1" />
          {time}
        </p>
      </div>
    </div>
  );
};

// Quick Actions Component
const QuickActions = () => {
  const actions = [
    {
      label: "Registrar Estudiante",
      color: "bg-primary",
      textColor: "text-full-white",
    },
    {
      label: "Nueva Reserva",
      color: "bg-secondary",
      textColor: "text-full-white",
    },
    {
      label: "Verificar Salas",
      color: "bg-green-500",
      textColor: "text-full-white",
    },
    {
      label: "Generar Reporte",
      color: "bg-purple-500",
      textColor: "text-full-white",
    },
  ];

  return (
    <div className="bg-full-white rounded-lg shadow-sm border border-light-gray">
      <div className="p-6 border-b border-light-gray">
        <h3 className="text-lg font-semibold text-secondary">
          Acciones Rápidas
        </h3>
      </div>
      <div className="p-6">
        <div className="grid grid-cols-2 gap-3">
          {actions.map((action, index) => (
            <button
              key={index}
              className={`${action.color} ${action.textColor} p-3 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity duration-200`}
            >
              {action.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

// Alerts Component
const AlertsPanel = () => {
  const alerts = [
    {
      type: "warning",
      title: "Mantenimiento Programado",
      message: "Sala A-101 fuera de servicio mañana 9:00 AM",
      time: "2 horas",
    },
    {
      type: "info",
      title: "Nueva Política",
      message: "Actualización en horarios de reserva",
      time: "1 día",
    },
  ];

  return (
    <div className="bg-full-white rounded-lg shadow-sm border border-light-gray">
      <div className="p-6 border-b border-light-gray">
        <h3 className="text-lg font-semibold text-secondary flex items-center">
          <ExclamationTriangleIcon className="h-5 w-5 mr-2 text-yellow-500" />
          Alertas y Avisos
        </h3>
      </div>
      <div className="p-6">
        <div className="space-y-4">
          {alerts.map((alert, index) => (
            <div
              key={index}
              className={`p-3 rounded-lg border-l-4 ${
                alert.type === "warning"
                  ? "bg-yellow-50 border-yellow-400"
                  : "bg-blue-50 border-blue-400"
              }`}
            >
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-sm font-medium text-secondary">
                    {alert.title}
                  </h4>
                  <p className="text-xs text-secondary/70 mt-1">
                    {alert.message}
                  </p>
                </div>
                <span className="text-xs text-secondary/60">{alert.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const Prueba = () => {
  // State for dashboard data
  const [stats, setStats] = useState([
    {
      title: "Total Estudiantes",
      value: "1,234",
      icon: UsersIcon,
      color: "bg-blue-500",
      trend: "up",
      trendValue: "+5.2%",
    },
    {
      title: "Salas Disponibles",
      value: "18",
      icon: HomeModernIcon,
      color: "bg-green-500",
      trend: "up",
      trendValue: "+2",
    },
    {
      title: "Reservas Hoy",
      value: "45",
      icon: CalendarIcon,
      color: "bg-primary",
      trend: "up",
      trendValue: "+12%",
    },
    {
      title: "Ocupación",
      value: "78%",
      icon: HomeIcon,
      color: "bg-purple-500",
      trend: "down",
      trendValue: "-3%",
    },
  ]);

  const [activities, setActivities] = useState([
    {
      action: "Nueva reserva creada",
      user: "María García",
      time: "Hace 5 minutos",
      type: "success",
    },
    {
      action: "Estudiante registrado",
      user: "Carlos López",
      time: "Hace 15 minutos",
      type: "info",
    },
    {
      action: "Sala liberada",
      user: "Ana Martínez",
      time: "Hace 30 minutos",
      type: "info",
    },
    {
      action: "Mantenimiento completado",
      user: "Equipo Técnico",
      time: "Hace 1 hora",
      type: "success",
    },
    {
      action: "Reserva cancelada",
      user: "Pedro Rodríguez",
      time: "Hace 2 horas",
      type: "warning",
    },
  ]);

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      // Update stats occasionally (in a real app, this would come from an API)
      setStats((prevStats) =>
        prevStats.map((stat) => ({
          ...stat,
          // Randomly update some values for demo purposes
          value:
            stat.title === "Reservas Hoy"
              ? String(Math.floor(Math.random() * 20) + 40)
              : stat.value,
        }))
      );
    }, 30000); // Update every 30 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <Layout pageTitle="Dashboard Principal">
      <div className="space-y-6">
        {/* Welcome Section */}
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-6 border border-primary/20">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-secondary mb-2">
                Bienvenido al Dashboard
              </h2>
              <p className="text-secondary/70 text-lg">
                Gestiona estudiantes, salas y reservas desde un solo lugar.
              </p>
            </div>
            <div className="hidden md:block">
              <div className="bg-primary/20 rounded-full p-4">
                <HomeIcon className="h-8 w-8 text-primary" />
              </div>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {stats.map((stat, index) => (
            <StatsCard
              key={index}
              title={stat.title}
              value={stat.value}
              icon={stat.icon}
              color={stat.color}
              trend={stat.trend}
              trendValue={stat.trendValue}
            />
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Recent Activity - Takes up 2 columns on large screens */}
          <div className="lg:col-span-2">
            <div className="bg-full-white rounded-lg shadow-sm border border-light-gray h-full">
              <div className="p-6 border-b border-light-gray">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-secondary">
                    Actividad Reciente
                  </h3>
                  <button className="text-primary hover:text-primary/80 text-sm font-medium transition-colors">
                    Ver todas
                  </button>
                </div>
              </div>
              <div className="p-6">
                <div className="space-y-1">
                  {activities.map((activity, index) => (
                    <ActivityItem
                      key={index}
                      action={activity.action}
                      user={activity.user}
                      time={activity.time}
                      type={activity.type}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar - Quick Actions and Alerts */}
          <div className="space-y-6">
            <QuickActions />
            <AlertsPanel />
          </div>
        </div>

        {/* Bottom Section - Charts/Tables placeholder */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          {/* Usage Chart Placeholder */}
          <div className="bg-full-white rounded-lg shadow-sm border border-light-gray">
            <div className="p-6 border-b border-light-gray">
              <h3 className="text-lg font-semibold text-secondary">
                Uso de Salas (Últimos 7 días)
              </h3>
            </div>
            <div className="p-6">
              <div className="h-64 bg-light-gray/50 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="h-12 w-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <UsersIcon className="h-6 w-6 text-primary" />
                  </div>
                  <p className="text-secondary/60 text-sm">
                    Gráfico de uso de salas
                  </p>
                  <p className="text-xs text-secondary/40 mt-1">
                    Integración con biblioteca de gráficos
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Reservations */}
          <div className="bg-full-white rounded-lg shadow-sm border border-light-gray">
            <div className="p-6 border-b border-light-gray">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-secondary">
                  Próximas Reservas
                </h3>
                <button className="text-primary hover:text-primary/80 text-sm font-medium transition-colors">
                  Ver calendario
                </button>
              </div>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {[
                  {
                    room: "Sala A-101",
                    student: "María García",
                    time: "14:00 - 16:00",
                    subject: "Matemáticas",
                  },
                  {
                    room: "Sala B-205",
                    student: "Carlos López",
                    time: "16:30 - 18:00",
                    subject: "Física",
                  },
                  {
                    room: "Laboratorio C-301",
                    student: "Ana Martínez",
                    time: "19:00 - 21:00",
                    subject: "Química",
                  },
                ].map((reservation, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-off-white rounded-lg"
                  >
                    <div>
                      <p className="text-sm font-medium text-secondary">
                        {reservation.room}
                      </p>
                      <p className="text-xs text-secondary/70">
                        {reservation.student} • {reservation.subject}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-primary">
                        {reservation.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
