import { CardRooms } from "../components/UI/CardRooms";

export const Rooms = () => {
  return (
    <div className="flex gap-12 flex-wrap justify-center items-center py-12 px-4">
      <CardRooms />
      <CardRooms />
    </div>
  );
};
