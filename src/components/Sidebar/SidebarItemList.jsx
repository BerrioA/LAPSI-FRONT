import { memo } from "react";
import { SidebarItem } from "../Sidebar";
import { ItemsDefault } from "../../const";
import { useLocation } from "react-router-dom";

export const SidebarItemList = memo(() => {
  const location = useLocation();

  return (
    <ul className="flex flex-col gap-2 p-4">
      {ItemsDefault.map((item, index) => (
        <SidebarItem
          key={index}
          items={item.label}
          isActive={location.pathname === item.href}
          index={index}
          icons={item.icon}
          to={item.href}
        />
      ))}
    </ul>
  );
});
