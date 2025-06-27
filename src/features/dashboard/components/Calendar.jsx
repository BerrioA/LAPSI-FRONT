import moment from "moment/min/moment-with-locales";
import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

const daysOfWeek = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];

export const DateCalendar =() => {
  const [currentDate, setCurrentDate] = useState(moment());

  const startOfMonth = currentDate.clone().startOf("month").startOf("week");
  const endOfMonth = currentDate.clone().endOf("month").endOf("week");

  const calendarDays = [];
  let day = startOfMonth.clone();

  while (day.isBefore(endOfMonth, "day")) {
    calendarDays.push(day.clone());
    day.add(1, "day");
  }

  const isToday = (day) => moment().isSame(day, "day");
  const isCurrentMonth = (day) => currentDate.isSame(day, "month");

  const goToPrevMonth = () =>
    setCurrentDate(currentDate.clone().subtract(1, "month"));
  const goToNextMonth = () =>
    setCurrentDate(currentDate.clone().add(1, "month"));

  return (
    <div className="max-w-4xl mx-auto px-4 py-6 bg-full-white rounded-2xl shadow-md">
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={goToPrevMonth}
          className="text-secondary p-2 hover:bg-light-gray rounded-full transition"
        >
          <ChevronLeftIcon className="w-5 h-5" />
        </button>
        <h2 className="text-lg font-medium text-secondary capitalize">
          {currentDate.format("MMMM YYYY")}
        </h2>
        <button
          onClick={goToNextMonth}
          className="text-secondary p-2 hover:bg-light-gray rounded-full transition"
        >
          <ChevronRightIcon className="w-5 h-5" />
        </button>
      </div>

      <div className="grid grid-cols-7 rounded-xl overflow-hidden border border-light-gray">
        {daysOfWeek.map((day) => (
          <div
            key={day}
            className="text-center text-xs sm:text-sm font-semibold text-secondary bg-light-gray py-2"
          >
            {day}
          </div>
        ))}

        {calendarDays.map((day, index) => (
          <div
            key={index}
            className={`
              flex items-center justify-center h-12 sm:h-14 m-1 rounded-xl text-sm sm:text-base transition-all duration-200
              ${isToday(day) ? "bg-primary text-full-white font-semibold" : ""}
              ${!isCurrentMonth(day) ? "text-gray-400" : "text-secondary"}
              hover:bg-primary hover:text-full-white cursor-pointer
            `}
          >
            {day.date()}
          </div>
        ))}
      </div>
    </div>
  );
}
