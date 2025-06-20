import { memo } from "react";
import { SidebarItem } from "../Sidebar";
import { ItemsDefault } from "../../const";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuthStore } from "../../stores";

export const SidebarItemList = memo(() => {
  const navigate = useNavigate();
  const location = useLocation();
  const { logout } = useAuthStore();
  const items = ItemsDefault();
  const cerrarSesion = () => {
    const isLogout = logout();

    if (isLogout) {
      navigate("/");
    }
  };

  return (
    <ul className="flex flex-col gap-2 p-4">
      {items.map((item, index) => (
        <SidebarItem
          key={index}
          items={item.label}
          isActive={location.pathname === item.href}
          index={index}
          icons={item.icon}
          to={item.href}
        />
      ))}
      <button onClick={() => cerrarSesion()}>Salir</button>
    </ul>
  );
});
