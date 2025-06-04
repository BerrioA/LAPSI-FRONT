import { CardRooms } from "../components/UI";
import { DashboardLayout } from "../layouts";

export const Rooms = () => {
  return (
    <DashboardLayout>
      <div className="flex gap-12 flex-wrap justify-center items-center py-12 px-4">
        <CardRooms />
        <CardRooms />
      </div>
    </DashboardLayout>
  );
};
