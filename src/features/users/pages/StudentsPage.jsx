import { HeadPage } from "../../../components";
import { DashboardLayout } from "../../../layouts";
import { StudentsTable } from "../students/StudentsTable";

export const StudentsPage = () => {
  return (
    <>
      <DashboardLayout>
        <HeadPage
          page="Estudiantes"
          description="Gestión de perfiles estudiantiles y administración de usuarios en el sistema LAPSI."
        />
        <StudentsTable />
      </DashboardLayout>
    </>
  );
};
