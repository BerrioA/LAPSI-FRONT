import { HeadPage } from "../../components";
import { DashboardLayout } from "../../layouts";

export const Reservations = () => {
  return (
    <div>
      <DashboardLayout>
        <HeadPage
          page={"Reservas"}
          description={"Pagina para la gestion de reservas"}
        />
      </DashboardLayout>
    </div>
  );
};
