import { useState } from "react";
import { HeadPage } from "../../components";
import { DashboardLayout } from "../../layouts";
import {
  UserIcon,
  CalendarIcon,
  ClockIcon,
  BuildingOfficeIcon,
  UsersIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@heroicons/react/24/outline";

const reservas = [
  // ⚠️ Tu array de reservas debe tener al menos 6–9 elementos para que se note la paginación
  // Puedes duplicar los existentes si estás en pruebas.
  // Aquí están 4 de ejemplo (agrega más si quieres probar varias páginas)
  {
    id: "1",
    study_area: "Neuropsicológicas",
    area_test: "ENI Evaluación neuropsicológica infantil",
    user_quantity: 0,
    partners: [],
    activity_type: "Práctica de aplicación de prueba",
    teachers_name: "Digna Mercedes Julio Calao",
    bookingDate: "2025-06-19",
    status: "finalizada",
    duration: 0.75,
    roomId: "Sala 1",
    bookingTimeBlockId: "8:00 - 8:45 AM",
    userId: "1",
  },
  {
    id: "2",
    study_area: "Clínicas",
    area_test: "MMPI-2 Inventario Multifásico de Personalidad",
    user_quantity: 2,
    partners: ["Ana García", "Carlos López"],
    activity_type: "Práctica supervisada",
    teachers_name: "Dr. Roberto Mendoza",
    bookingDate: "2025-06-20",
    status: "confirmada",
    duration: 1.5,
    roomId: "Sala 2",
    bookingTimeBlockId: "9:00 - 10:30 AM",
    userId: "2",
  },
  {
    id: "3",
    study_area: "Educativas",
    area_test: "WISC-V Escala de Inteligencia de Wechsler para Niños",
    user_quantity: 1,
    partners: ["María Rodríguez"],
    activity_type: "Evaluación individual",
    teachers_name: "Dra. Carmen Herrera",
    bookingDate: "2025-06-21",
    status: "pendiente",
    duration: 2.0,
    roomId: "Sala 3",
    bookingTimeBlockId: "10:30 - 12:30 PM",
    userId: "3",
  },
  {
    id: "4",
    study_area: "Forenses",
    area_test: "Test de Simulación de Memoria - TOMM",
    user_quantity: 2,
    partners: ["Pedro Gómez", "Lucía Torres"],
    activity_type: "Evaluación aplicada",
    teachers_name: "Dr. Francisco Morales",
    bookingDate: "2025-06-22",
    status: "confirmada",
    duration: 1.0,
    roomId: "Sala 4",
    bookingTimeBlockId: "13:00 - 14:00 PM",
    userId: "4",
  },
  // agrega más reservas aquí si quieres probar varias páginas
  {
    id: "5",
    study_area: "Neuropsicológicas",
    area_test: "ENI Evaluación neuropsicológica infantil",
    user_quantity: 0,
    partners: [],
    activity_type: "Práctica de aplicación de prueba",
    teachers_name: "Digna Mercedes Julio Calao",
    bookingDate: "2025-06-19",
    status: "finalizada",
    duration: 0.75,
    roomId: "Sala 1",
    bookingTimeBlockId: "8:00 - 8:45 AM",
    userId: "1",
  },
  {
    id: "6",
    study_area: "Clínicas",
    area_test: "MMPI-2 Inventario Multifásico de Personalidad",
    user_quantity: 2,
    partners: ["Ana García", "Carlos López"],
    activity_type: "Práctica supervisada",
    teachers_name: "Dr. Roberto Mendoza",
    bookingDate: "2025-06-20",
    status: "confirmada",
    duration: 1.5,
    roomId: "Sala 2",
    bookingTimeBlockId: "9:00 - 10:30 AM",
    userId: "2",
  },
  {
    id: "7",
    study_area: "Educativas",
    area_test: "WISC-V Escala de Inteligencia de Wechsler para Niños",
    user_quantity: 1,
    partners: ["María Rodríguez"],
    activity_type: "Evaluación individual",
    teachers_name: "Dra. Carmen Herrera",
    bookingDate: "2025-06-21",
    status: "pendiente",
    duration: 2.0,
    roomId: "Sala 3",
    bookingTimeBlockId: "10:30 - 12:30 PM",
    userId: "3",
  },
  {
    id: "8",
    study_area: "Forenses",
    area_test: "Test de Simulación de Memoria - TOMM",
    user_quantity: 2,
    partners: ["Pedro Gómez", "Lucía Torres"],
    activity_type: "Evaluación aplicada",
    teachers_name: "Dr. Francisco Morales",
    bookingDate: "2025-06-22",
    status: "confirmada",
    duration: 1.0,
    roomId: "Sala 4",
    bookingTimeBlockId: "13:00 - 14:00 PM",
    userId: "4",
  },
];

const statusColors = {
  confirmada: "bg-yellow-100 text-yellow-800",
  finalizada: "bg-green-100 text-green-800",
  pendiente: "bg-gray-100 text-gray-800",
  cancelada: "bg-red-100 text-red-800",
};

export const Reservations = () => {
  const [search, setSearch] = useState("");
  const [expanded, setExpanded] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 3;

  const filtered = reservas.filter((r) => {
    const docente = r.teachers_name.toLowerCase();
    const estudiantes = r.partners.join(" ").toLowerCase();
    return (
      docente.includes(search.toLowerCase()) ||
      estudiantes.includes(search.toLowerCase())
    );
  });

  const totalPages = Math.ceil(filtered.length / itemsPerPage);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      setExpanded(null);
    }
  };

  const paginatedData = filtered.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const toggleExpand = (id) => {
    setExpanded((prev) => (prev === id ? null : id));
  };

  return (
    <DashboardLayout>
      <HeadPage
        page={"Reservas"}
        description={"Página para la gestión de reservas"}
      />

      <div className="p-4 space-y-6">
        {/* Buscador */}
        <input
          type="text"
          placeholder="Buscar por docente o estudiante..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setCurrentPage(1); // Reiniciar a la página 1 al buscar
          }}
          className="border border-gray-300 rounded px-3 py-2 w-full max-w-md"
        />

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6">
          {paginatedData.map((reserva) => {
            const isExpanded = expanded === reserva.id;
            return (
              <div
                key={reserva.id}
                onClick={() => toggleExpand(reserva.id)}
                className="border rounded-2xl shadow hover:shadow-lg transition-all duration-300 bg-white cursor-pointer"
              >
                <div className="flex justify-between items-center px-4 py-3 bg-[#B29A64] text-white rounded-t-2xl">
                  <span className="text-sm font-semibold">
                    {reserva.study_area}
                  </span>
                  <span
                    className={`text-xs font-medium px-2 py-1 rounded-full ${
                      statusColors[reserva.status] ||
                      "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {reserva.status}
                  </span>
                </div>

                <div className="flex flex-col md:flex-row justify-between gap-4 p-4">
                  <div className="md:w-3/4 space-y-1">
                    <p
                      className={`font-semibold text-base ${
                        isExpanded ? "whitespace-normal" : "truncate"
                      } text-[#152E3A]`}
                    >
                      {reserva.area_test}
                    </p>

                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <UserIcon className="w-4 h-4 text-[#B29A64]" />
                      <span className="truncate">{reserva.teachers_name}</span>
                    </div>

                    {reserva.partners.length > 0 && (
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <UsersIcon className="w-4 h-4 text-[#B29A64]" />
                        <span className="truncate">
                          {reserva.partners.join(", ")}
                        </span>
                      </div>
                    )}

                    {isExpanded && (
                      <div className="mt-2 text-sm text-gray-700 space-y-1">
                        <p>
                          <strong>Actividad:</strong> {reserva.activity_type}
                        </p>
                        <p>
                          <strong>Duración:</strong> {reserva.duration} horas
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="md:w-1/4 text-sm text-gray-500 space-y-1 flex flex-col items-end justify-between">
                    <div className="flex items-center gap-1">
                      <CalendarIcon className="w-4 h-4 text-[#B29A64]" />
                      <span>{reserva.bookingDate}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <ClockIcon className="w-4 h-4 text-[#B29A64]" />
                      <span>{reserva.bookingTimeBlockId}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <BuildingOfficeIcon className="w-4 h-4 text-[#B29A64]" />
                      <span>{reserva.roomId}</span>
                    </div>
                    <div>
                      {isExpanded ? (
                        <ChevronUpIcon className="w-5 h-5 mt-2 text-gray-400" />
                      ) : (
                        <ChevronDownIcon className="w-5 h-5 mt-2 text-gray-400" />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Paginación */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-6">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={`px-3 py-1 border rounded ${
                currentPage === 1
                  ? "bg-gray-200 cursor-not-allowed"
                  : "hover:bg-gray-100"
              }`}
            >
              Anterior
            </button>

            {[...Array(totalPages)].map((_, idx) => {
              const page = idx + 1;
              return (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`px-3 py-1 border rounded ${
                    page === currentPage
                      ? "bg-[#B29A64] text-white"
                      : "hover:bg-gray-100"
                  }`}
                >
                  {page}
                </button>
              );
            })}

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`px-3 py-1 border rounded ${
                currentPage === totalPages
                  ? "bg-gray-200 cursor-not-allowed"
                  : "hover:bg-gray-100"
              }`}
            >
              Siguiente
            </button>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};
