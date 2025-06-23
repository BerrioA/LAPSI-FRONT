import { Calendar } from "@heroui/react";
import { today, getLocalTimeZone } from "@internationalized/date";

export const DateCalendar = () => {
  return (
    <Calendar
      isReadOnly
      aria-label="Date (Read Only)"
      value={today(getLocalTimeZone())}
      className="flex w-full justify-center items-center"
    />
  );
};
