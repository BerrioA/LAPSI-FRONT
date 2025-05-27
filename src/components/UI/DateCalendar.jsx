import moment from "moment";
import { useState } from "react";
import { Calendar } from "@heroui/react";
import { parseDate } from "@internationalized/date";

export const DateCalendar = () => {
  var today = moment().format("YYYY-MM-DD");
  let [value, setValue] = useState(parseDate(today));

  return (
    <Calendar
      aria-label="Date (Controlled)"
      value={value}
      onChange={setValue}
    />
  );
};
