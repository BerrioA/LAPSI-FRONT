import { HeadPage } from "../../../components";
import { DashboardLayout } from "../../../layouts";
import { ModeratorsTable } from "../moderators/ModeratorsTable";

export const ModeratorsPage = () => {
  return (
    <>
      <DashboardLayout>
        <HeadPage
          page={"Moderadores"}
          description={"Pagina para la gestion de moderadores"}
        />
        <ModeratorsTable />
      </DashboardLayout>
    </>
  );
};
