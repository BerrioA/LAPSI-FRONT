import { useEffect, useState } from "react";
import { Error, HeadPage, Loading } from "../../components";
import { DashboardLayout } from "../../layouts";

import {
  CalendarIcon,
  ClockIcon,
  BuildingOfficeIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@heroicons/react/24/outline";
import { useReservationStore } from "../../stores";
import moment from "moment";
import "moment/locale/es";
import { UpdateBookingState } from "./components/UpdateBookingState";

const statusColors = {
  confirmada: "bg-primary text-full-white",
  finalizada: "bg-secondary text-full-white",
  pendiente: "bg-gray-100 text-gray-800",
  cancelada: "bg-red-100 text-red-800",
};

export const Reservations = () => {
  moment.locale("es");
  const [search, setSearch] = useState("");
  const [expanded, setExpanded] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const { loading, error, fetchReservations, reservations } =
    useReservationStore();

  const itemsPerPage = 3;

  const filtered = reservations.filter((r) => {
    const docente = r.teachers_name.toLowerCase();
    const users = r.user.name.toLowerCase();
    const estudiantes = r.partners.join(" ").toLowerCase();
    return (
      docente.includes(search.toLowerCase()) ||
      users.includes(search.toLowerCase()) ||
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

  useEffect(() => {
    fetchReservations();
  }, []);

  return (
    <DashboardLayout>
      <HeadPage
        page="Reservas"
        description="Sección para consultar y gestionar las reservas activas dentro del sistema LAPSI."
      />

      <div className="flex justify-center items-center">
        {error && <Error textError={error} />}
        {loading && <Loading />}
      </div>

      <div className="space-y-6">
        {/* Buscador */}
        <input
          type="text"
          placeholder="Buscar por docente o estudiante..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setCurrentPage(1); // Reiniciar a la página 1 al buscar
          }}
          className="border border-gray-300 rounded-3xl px-3 py-2 w-full max-w-md"
        />

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6">
          {paginatedData.map((reserva) => {
            const isExpanded = expanded === reserva.id;
            const formattedDuration =
              reserva.duration <= 1
                ? "1 hora"
                : reserva.duration <= 2
                ? "2 horas"
                : `${Math.ceil(reserva.duration)} horas`;
            const start = moment(
              reserva.booking_time_block.start_time,
              "HH:mm"
            ).format("h:mm A");
            const end = moment(
              reserva.booking_time_block.end_time,
              "HH:mm"
            ).format("h:mm A");
            const partnerNames = reserva.partners?.length
              ? reserva.partners.map((p) => `${p.name} ${p.last_name}`)
              : [];

            return (
              <div
                key={reserva.id}
                onClick={() => toggleExpand(reserva.id)}
                className="border rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 bg-white cursor-pointer overflow-hidden"
              >
                {/* Encabezado */}
                <div
                  className={`flex justify-between items-center px-4 py-3 
        ${statusColors[reserva.status] || "bg-gray-100 text-gray-800"} 
        rounded-t-2xl`}
                >
                  <h3 className="font-semibold text-sm truncate uppercase">
                    {reserva.study_area}
                  </h3>
                  <span className="text-xs font-medium px-2 py-1 rounded-full capitalize">
                    {reserva.status}
                  </span>
                </div>

                {/* Contenido principal */}
                <div className="flex flex-col md:flex-row justify-between gap-6 p-5 text-sm">
                  {/* Columna izquierda */}
                  <div className="flex-1 space-y-2 text-[#152E3A]">
                    <h4 className="font-semibold text-base leading-snug">
                      {reserva.area_test}
                    </h4>

                    <p>
                      <strong>Actividad:</strong> {reserva.activity_type}
                    </p>

                    {reserva.other_activity && (
                      <p>
                        <strong>Otra actividad:</strong>{" "}
                        {reserva.other_activity}
                      </p>
                    )}

                    <p>
                      <strong>Docente:</strong> {reserva.teachers_name}
                    </p>

                    {partnerNames.length > 0 && (
                      <div>
                        <p className="font-medium mb-1">Acompañantes:</p>
                        <div className="flex flex-wrap gap-2">
                          {partnerNames.map((name, i) => (
                            <span
                              key={i}
                              className="bg-[#F5F5F5] text-gray-700 text-xs px-3 py-1 rounded-full shadow-sm"
                            >
                              {name}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {isExpanded && (
                      <>
                        <hr className="my-2" />
                        <p>
                          <strong>Fecha de reserva:</strong>{" "}
                          {moment(reserva.bookingDate)
                            .locale("es")
                            .format("LL")}
                        </p>
                        <p>
                          <strong>Duración:</strong> {formattedDuration}
                        </p>
                        <p>
                          <strong>Hora:</strong> {start} - {end}
                        </p>
                        <p>
                          <strong>Sala:</strong> {reserva.room.room_name}
                        </p>
                        <p>
                          <strong>Reserva realizada por:</strong>{" "}
                          {reserva.user.name} {reserva.user.middle_name}{" "}
                          {reserva.user.last_name}{" "}
                          {reserva.user.second_last_name}
                        </p>
                        <div className="mt-4 flex flex-wrap gap-3">
                          <UpdateBookingState bookingId={reserva.id} />
                        </div>
                      </>
                    )}
                  </div>

                  {/* Columna derecha */}
                  <div className="min-w-[150px] flex flex-col items-end justify-between text-xs text-gray-500">
                    <div className="flex items-center gap-1">
                      <CalendarIcon className="w-4 h-4 text-[#B29A64]" />
                      <span>{moment(reserva.bookingDate).format("LL")}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <ClockIcon className="w-4 h-4 text-[#B29A64]" />
                      <span>
                        {start} - {end}
                      </span>
                    </div>
                    <div className="flex items-center gap-1 text-right">
                      <BuildingOfficeIcon className="w-4 h-4 text-[#B29A64]" />
                      <span>{reserva.room.room_name}</span>
                    </div>
                    <div className="mt-3">
                      {isExpanded ? (
                        <ChevronUpIcon className="w-5 h-5 text-gray-400" />
                      ) : (
                        <ChevronDownIcon className="w-5 h-5 text-gray-400" />
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
