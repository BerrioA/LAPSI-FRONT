import moment from "moment/min/moment-with-locales";
import "moment/locale/es";
moment.locale("es");
import { useParams } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import { useCalendarBlocks } from "../../hooks";
import { ClockIcon } from "@heroicons/react/24/outline";
import { DayColumn, ThirdButton } from "./components";
import { useGlobalStore } from "../../stores";
import { PrimaryButton } from "../../components/UI";

const weekdays = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"];

export const Calendar = () => {
  const { idRoom } = useParams();
  const { getIdRoom } = useGlobalStore();
  const [selectedDuration, setSelectedDuration] = useState(null);
  const [currentDate, setCurrentDate] = useState(moment().startOf("isoWeek"));

  const today = moment();
  const startOfThisWeek = moment().startOf("isoWeek");

  const isCurrentWeekOrFuture = currentDate.isSameOrAfter(
    startOfThisWeek,
    "day"
  );

  const goToPreviousWeek = () => {
    setCurrentDate((prev) => moment(prev).subtract(1, "week"));
  };

  const goToNextWeek = () => {
    setCurrentDate((prev) => moment(prev).add(1, "week"));
  };

  const daysWithDates = useMemo(() => {
    return weekdays.map((day, index) => {
      const date = moment(currentDate).add(index, "days");
      return {
        day,
        date,
        dateFormatted: date.locale("es").format("DD [de] MMMM"),
        iso: date.format("YYYY-MM-DD"),
      };
    });
  }, [currentDate]);

  const { filteredBlocks } = useCalendarBlocks(
    idRoom,
    currentDate,
    selectedDuration
  );

  useEffect(() => {
    getIdRoom(idRoom);
  }, []);

  const blocksByDay = useMemo(() => {
    return daysWithDates.reduce((acc, { day, iso }) => {
      const dateMoment = moment(iso);
      const isTodayOrFuture = dateMoment.isSameOrAfter(today, "day");

      acc[day] = isTodayOrFuture
        ? filteredBlocks.filter(
            (block) => block.day.toLowerCase() === day.toLowerCase()
          )
        : []; // Si el día ya pasó, no hay bloques
      return acc;
    }, {});
  }, [filteredBlocks, daysWithDates]);

  const handleBack = () => {
    window.history.back();
  };

  return (
    <>
      <div className="text-center">
        <h1 className="text-3xl font-extrabold text-secondary mb-2">
          Reservar Horario
        </h1>
        <p className="text-base text-gray-600 mb-6">
          Por favor selecciona la duración del bloque que deseas reservar
        </p>

        <div className="flex justify-center gap-4 mb-8">
          {[1, 2].map((hr) => (
            <ThirdButton
              key={hr}
              text={
                <span className="flex items-center gap-2">
                  <ClockIcon className="w-5 h-5" /> {hr} Hora
                  {hr > 1 ? "s" : ""}
                </span>
              }
              type="button"
              onClick={() => setSelectedDuration(hr)}
              active={selectedDuration === hr}
            />
          ))}
        </div>
      </div>

      {!selectedDuration ? (
        <div className="flex flex-col justify-center items-center h-64">
          <p className="text-gray-400 text-lg italic">
            Selecciona una duración para ver los horarios disponibles
          </p>
          <div className="mx-auto m-8">
            <PrimaryButton
              text={"Regresar"}
              onClick={handleBack}
            />
          </div>
        </div>
      ) : (
        <>
          <h2 className="text-center font-bold text-primary text-xl mb-6">
            Horarios disponibles para bloques de {selectedDuration} hora
            {selectedDuration > 1 ? "s" : ""}
          </h2>

          <div className="flex justify-center items-center gap-4 mb-6">
            <ThirdButton
              text="← Semana anterior"
              onClick={goToPreviousWeek}
              disabled={!isCurrentWeekOrFuture}
            />

            <span className="text-lg font-semibold text-gray-600">
              Semana del{" "}
              {moment(currentDate).locale("es").format("DD [de] MMMM")}
            </span>

            <ThirdButton
              text="Semana siguiente →"
              onClick={goToNextWeek}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 px-4">
            {daysWithDates.map(({ day, iso }) => (
              <DayColumn
                key={day}
                day={day}
                date={iso} // ✅ usa la fecha ISO real, ej: "2025-07-02"
                blocks={blocksByDay[day] || []}
              />
            ))}
          </div>
          <div className="mx-auto w-28 m-8">
            <PrimaryButton
              text={"Regresar"}
              onClick={handleBack}
            />
          </div>
        </>
      )}
    </>
  );
};
