import { CardInformation } from "../components/UI";
import { DashboardLayout } from "../layouts";

export const Dashboard = () => {
  return (
    <DashboardLayout>
      <p className="font-bold text-2xl">Dashboard</p>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mt-4">
        <CardInformation title={"Estudiantes"} count={57} bg={"green"} />
        <CardInformation title={"Reservas"} count={18} bg={"blue"} />
        <div className="lg:col-span-1 md:col-span-2 sm:col-span-1">
          <CardInformation title={"Reservas"} count={18} bg={"blue"} />
        </div>
        <div className="lg:col-span-2 md:col-span-2 sm:col-span-1">
          <CardInformation
            title={"Lista de reservas"}
            count={443}
            bg={"brown"}
          />
        </div>
      </div>
    </DashboardLayout>
  );
};
