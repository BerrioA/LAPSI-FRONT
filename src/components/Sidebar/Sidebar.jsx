// Sidebar.jsx
import { SidebarHeader } from "./SidebarHeader";
import { SidebarItemList } from "./SidebarItemList";

export const Sidebar = () => {
  return (
    <div className="w-72 h-screen bg-off-white">
      <SidebarHeader />
      <SidebarItemList />
    </div>
  );
};
