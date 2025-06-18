import { useEffect } from "react";
import { DashboardLayout } from "../../layouts";
import { useRoomsStore } from "../../stores";
import { Card } from "./components/Card";
import { Error, HeadPage, Loading } from "../../components";

export const Rooms = () => {
  const { rooms, loading, error, fetchRooms } = useRoomsStore();

  useEffect(() => {
    fetchRooms();
  }, []);

  return (
    <>
      <DashboardLayout>
        <HeadPage
          page={"Salas"}
          description={
            "Pagina para la gestion de salas y solicitudes de reservas"
          }
        />
        {loading && <Loading />}
        {error && <Error textError={error} />}
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
      </DashboardLayout>
    </>
  );
};
