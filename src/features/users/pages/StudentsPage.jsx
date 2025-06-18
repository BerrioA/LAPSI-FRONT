import { HeadPage } from "../../../components";
import { DashboardLayout } from "../../../layouts";
import { StudentsTable } from "../students/StudentsTable";

export const StudentsPage = () => {
  return (
    <>
      <DashboardLayout>
        <HeadPage
          page={"Estudiantes"}
          description={"Pagina para la gestion de estudiantes"}
        />
        <StudentsTable />
      </DashboardLayout>
    </>
  );
};
