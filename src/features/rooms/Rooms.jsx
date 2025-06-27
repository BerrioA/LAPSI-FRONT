import { useEffect } from "react";
import { DashboardLayout } from "../../layouts";
import { useRoomsStore } from "../../stores";
import { Card } from "./components/Card";
import { Error, HeadPage, Loading } from "../../components";
import { Outlet, useParams } from "react-router-dom";

export const Rooms = () => {
  const { rooms, loading, error, fetchRooms } = useRoomsStore();
  const { idRoom } = useParams(); // detecta si hay un idRoom en la URL

  useEffect(() => {
    // Solo se cargan las salas si NO hay idRoom (solo en /rooms)
    if (!idRoom) fetchRooms();
  }, [idRoom]);

  return (
    <DashboardLayout>
      <HeadPage
        page={idRoom ? "Calendario de Sala" : "Salas"}
        description={
          idRoom
            ? "Visualización y gestión de reservas para la sala seleccionada."
            : "Gestión centralizada de salas y administración de solicitudes de reserva en LAPSI."
        }
      />

      {loading && !idRoom && <Loading />}
      {error && !idRoom && <Error textError={error} />}

      {!idRoom ? (
        <div className="flex flex-col justify-center items-center">
          <div className="lg:flex-wrap gap-4 grid lg:grid-cols-2">
            {rooms.map((room) => (
              <Card
                key={room.id}
                id={room.id}
                room_name={room.room_name}
                quotas={room.quotas}
                description={room.description}
              />
            ))}
          </div>
        </div>
      ) : (
        <Outlet />
      )}
    </DashboardLayout>
  );
};
