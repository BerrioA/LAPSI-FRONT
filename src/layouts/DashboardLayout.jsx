import { useState, memo } from "react";
import { Navbar, Sidebar } from "../components";

export const DashboardLayout = memo(({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex w-full min-h-screen">
      {/* Sidebar con control de visibilidad */}
      <Sidebar
        isOpen={isSidebarOpen}
        setIsOpen={setIsSidebarOpen}
      />

      {/* Contenido principal */}
      <div className="flex flex-col flex-1">
        <Navbar setIsSidebarOpen={setIsSidebarOpen} />
        <main className="p-4 flex-1 bg-off-white overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
});
