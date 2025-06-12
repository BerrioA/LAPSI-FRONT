import { useEffect } from "react";
import { CardRooms } from "../components/UI";
import { DashboardLayout } from "../layouts";
import { useRoomsStore } from "../stores";

export const Rooms = () => {
  const { rooms, loading, error, fetchRooms } = useRoomsStore();

  useEffect(() => {
    fetchRooms();
  }, []);

  return (
    <DashboardLayout>
      <div className="flex gap-6 flex-wrap justify-center items-center py-12">
        {rooms.map((room) => (
          <div key={room.id} className="flex flex-col w-96">
            <CardRooms
              id={room.id}
              room_name={room.room_name}
              quotas={room.quotas}
              description={room.description}
            />
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
};
