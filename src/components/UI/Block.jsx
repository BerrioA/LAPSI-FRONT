export const Block = ({
  day,
  start_time,
  end_time,
  total_quotas_available,
}) => (
  <div className="bg-white border border-gray-300 rounded-xl p-3 mb-3 shadow-sm hover:shadow-md transition-all cursor-pointer">
    <div className="text-sm text-secondary font-medium">
      {start_time} - {end_time}
    </div>
    <div className="text-xs text-gray-500">
      Cupos disponibles: {total_quotas_available}
    </div>
  </div>
);
