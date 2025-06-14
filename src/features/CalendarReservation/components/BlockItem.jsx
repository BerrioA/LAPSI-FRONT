import moment from "moment";
import { memo } from "react";

export const BlockItem = memo(({ block }) => (
  <div className="bg-white shadow p-2 rounded-lg mb-2">
    <p className="text-sm font-semibold text-primary">
      {moment(block.start_time, "HH:mm:ss").format("hh:mm A")} -{" "}
      {moment(block.end_time, "HH:mm:ss").format("hh:mm A")}
    </p>
    <p className="text-xs text-gray-600">
      Cupos disponibles: {block.total_quotas_available}
    </p>
  </div>
));
