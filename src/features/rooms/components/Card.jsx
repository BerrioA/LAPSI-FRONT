import { useNavigate } from "react-router-dom";
import { Button } from "@heroui/react";
import { InformationCircleIcon } from "@heroicons/react/24/outline";

export const Card = ({ id, room_name, quotas, description }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/rooms/${id}`);
  };

  return (
    <div className="w-full bg-white rounded-2xl shadow-md overflow-hidden transition hover:shadow-lg hover:scale-[1.01] duration-200 ease-in-out">
      <div className="h-48 w-full overflow-hidden">
        <img
          src="https://www.up.edu.mx/wp-content/uploads/2022/09/nuevos-laboratorios-de-psicologia-int-dos.jpg"
          alt={`Sala ${room_name}`}
          className="object-cover w-full h-full"
        />
      </div>

      <div className="p-4 flex flex-col justify-between flex-grow">
        <div>
          <h2 className="text-xl font-semibold text-secondary mb-1 truncate">
            {room_name || "Sala sin nombre"}
          </h2>
          <p className="text-sm text-gray-500 line-clamp-2">
            {description || "Sin descripción disponible."}
          </p>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <InformationCircleIcon className="h-5 w-5 text-primary" />
            <span>{quotas || 0} cupos disponibles</span>
          </div>
          <Button
            radius="full"
            size="md"
            className="bg-primary text-white px-4 py-1 font-medium hover:brightness-110 transition"
            onClick={handleClick}
          >
            Reservar
          </Button>
        </div>
      </div>
    </div>
  );
};
