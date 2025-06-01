import { SidebarHeader, SidebarItemList } from "../Sidebar";

export const Sidebar = () => {
  return (
    <div className="w-72 h-screen bg-off-white">
      <SidebarHeader />
      <SidebarItemList />
    </div>
  );
};
