import moment from "moment";
import { memo } from "react";
import { ModalCalendar } from "./ModalCalendar";

export const BlockItem = memo(({ block }) => (
  <div>
    <ModalCalendar
      blockMoment={
        <>
          <p className="text-sm font-semibold text-primary">
            {moment(block.start_time, "HH:mm:ss").format("hh:mm A")} -{" "}
            {moment(block.end_time, "HH:mm:ss").format("hh:mm A")}
          </p>
          <p className="text-xs text-gray-600">
            Cupos disponibles: {block.total_quotas_available}
          </p>
        </>
      }
    />
  </div>
));
