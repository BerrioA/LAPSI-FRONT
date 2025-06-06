import { useEffect, useState } from "react";
import { CardRooms } from "../components/UI";
import { DashboardLayout } from "../layouts";
import axios from "axios";
import { AccordionComponent } from "../components/UI/AccordionComponent";

export const Rooms = () => {
  const [rooms, setRooms] = useState([]);
  useEffect(() => {
    const getRooms = async () => {
      const response = await axios.get(
        "http://localhost:3000/api/lapsi/v1/rooms"
      );
      setRooms(response.data);
    };

    getRooms();
  }, []);
  return (
    <DashboardLayout>
      <div className="flex gap-6 flex-wrap justify-center items-center py-12">
        {rooms.map((room, index) => (
          <div className="flex flex-col w-96">
            <CardRooms
              key={index}
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
