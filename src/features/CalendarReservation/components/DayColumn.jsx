import { memo } from "react";
import { ModalCalendar } from "./ModalCalendar";

export const DayColumn = memo(({ day, date, blocks }) => (
  <div className="bg-light-gray p-3 rounded-xl shadow-md min-h-[200px]">
    <h3 className="text-center font-bold text-secondary mb-1">{day}</h3>
    <p className="text-center text-sm text-gray-500 mb-3">{date}</p>
    {blocks.length > 0 ? (
      blocks.map((block) => (
        <ModalCalendar
          key={block.block_id}
          block={block}
        />
      ))
    ) : (
      <p className="text-center text-sm text-gray-500">
        Sin bloques disponibles
      </p>
    )}
  </div>
));
