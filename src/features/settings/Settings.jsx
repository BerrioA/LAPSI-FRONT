import { Outlet } from "react-router-dom";
import { DashboardLayout } from "../../layouts";

export const Settings = () => {
  return (
    <>
      <DashboardLayout>
        <Outlet />
      </DashboardLayout>
    </>
  );
};
