import { useEffect, useState } from "react";
import { DashboardLayout } from "../layouts";
import axios from "axios";
import { useParams } from "react-router-dom";
import moment from "moment";

export const Calendar = () => {
  const { idRoom } = useParams();
  const primerDiaDeLaSemana = moment().startOf("isoWeek").format("YYYY-MM-DD");
  const [date, setDate] = useState(primerDiaDeLaSemana);
  const [blockByDay, setBlockByDay] = useState([]);

  // 👉 Función para obtener la data
  const getRooms = async (fecha) => {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/lapsi/v1/rooms/${idRoom}`,
        {
          params: { date: fecha },
        }
      );
      setBlockByDay(response.data);
    } catch (error) {
      console.log(
        "Error al obtener datos:",
        error.response?.data?.error || error.message
      );
    }
  };

  // 👉 Ejecutar cada vez que cambia la fecha o el idRoom
  useEffect(() => {
    if (idRoom) {
      getRooms(date);
    }
  }, [date, idRoom]);

  // 👉 Navegación entre semanas
  const nextWeek = () => {
    const siguiente = moment(date).add(7, "days").format("YYYY-MM-DD");
    setDate(siguiente);
  };

  const backWeek = () => {
    const anterior = moment(date).subtract(7, "days").format("YYYY-MM-DD");
    setDate(anterior);
  };
  return (
    <DashboardLayout>
      <p className="text-center font-semibold">Fecha actual: {date}</p>
      <div className="flex justify-between">
        <button onClick={backWeek}>← Semana anterior</button>
        <button onClick={nextWeek}>Semana siguiente →</button>
      </div>
      <div className="flex gap-6 flex-wrap justify-center items-center py-12">
        {blockByDay.map((block) => (
          <div
            key={block.block_id}
            className="flex flex-wrap p-4 justify-center px-4 gap-4 w-64 bg-light-gray rounded-lg shadow-md"
          >
            <p>{block.day}</p>
            <span>{block.start_time}</span>
            <span>{block.end_time}</span>
            <div className="flex flex-col">
              <span>Cupos ocupados: {block.total_occupied_quotas}</span>
              <span>Cupos disponibles: {block.total_quotas_available}</span>
            </div>
            <p>
              ID BLOCK: <span>{block.block_id}</span>
            </p>
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
};
