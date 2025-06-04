import { memo } from "react";
import { Navbar, Sidebar } from "../components";

export const DashboardLayout = memo(({ children }) => {
  return (
    <div className="flex w-full h-14">
      <Sidebar />
      <div className="flex flex-col w-full h-screen">
        <div className="flex flex-col bg-black">
          <Navbar />
        </div>
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
});
