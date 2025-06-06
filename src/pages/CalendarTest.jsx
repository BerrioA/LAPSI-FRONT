import { useState, useMemo } from "react";
import { useParams } from "react-router-dom";
import moment from "moment";
import { DashboardLayout } from "../layouts";
import { SecondaryButton } from "../components/UI";
import { DayColumn } from "../components/Calendar/DayColumn";
import { ClockIcon } from "@heroicons/react/24/outline";
import useCalendarBlocks from "../hooks/useCalendarBlocks";

const weekdays = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"];

export const CalendarTest = () => {
  const { idRoom } = useParams();
  const [selectedDuration, setSelectedDuration] = useState(null);
  const [currentDate] = useState(
    moment().startOf("isoWeek").format("YYYY-MM-DD")
  );
  const { filteredBlocks } = useCalendarBlocks(
    idRoom,
    currentDate,
    selectedDuration
  );

  const blocksByDay = useMemo(() => {
    return weekdays.reduce((acc, day) => {
      acc[day] = filteredBlocks.filter(
        (block) => block.day.toLowerCase() === day.toLowerCase()
      );
      return acc;
    }, {});
  }, [filteredBlocks]);

  return (
    <DashboardLayout>
      <div className="text-center">
        <h1 className="text-3xl font-extrabold text-secondary mb-2">
          Reservar Horario
        </h1>
        <p className="text-base text-gray-600 mb-6">
          Por favor selecciona la duración del bloque que deseas reservar
        </p>

        <div className="flex justify-center gap-4 mb-8">
          {[1, 2].map((hr) => (
            <SecondaryButton
              key={hr}
              text={
                <span className="flex items-center gap-2">
                  <ClockIcon className="w-5 h-5" /> {hr} Hora{hr > 1 ? "s" : ""}
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
        <div className="flex justify-center items-center h-64">
          <p className="text-gray-400 text-lg italic">
            Selecciona una duración para ver los horarios disponibles
          </p>
        </div>
      ) : (
        <>
          <h2 className="text-center font-bold text-primary text-xl mb-6">
            Horarios disponibles para bloques de {selectedDuration} hora
            {selectedDuration > 1 ? "s" : ""}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 px-4">
            {weekdays.map((day) => (
              <DayColumn key={day} day={day} blocks={blocksByDay[day] || []} />
            ))}
          </div>
        </>
      )}
    </DashboardLayout>
  );
};
