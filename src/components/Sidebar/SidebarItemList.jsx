import { useState, memo } from "react";
import { SidebarItem } from "../Sidebar";
import { ItemsDefault } from "../../const";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuthStore } from "../../stores";
import {
  ArrowLeftEndOnRectangleIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";

export const SidebarItemList = memo(() => {
  const navigate = useNavigate();
  const location = useLocation();
  const { logout } = useAuthStore();
  const items = ItemsDefault();

  const [openSubmenu, setOpenSubmenu] = useState(null);

  const cerrarSesion = () => {
    const isLogout = logout();
    if (isLogout) navigate("/");
  };

  const toggleSubmenu = (label) => {
    setOpenSubmenu((prev) => (prev === label ? null : label));
  };

  return (
    <ul className="flex flex-col gap-2 p-4">
      {items.map((item, index) => (
        <li key={index}>
          {!item.subItems ? (
            <SidebarItem
              items={item.label}
              isActive={location.pathname === item.href}
              index={index}
              icons={item.icon}
              to={item.href}
            />
          ) : (
            <>
              <button
                onClick={() => toggleSubmenu(item.label)}
                className={`w-full px-4 py-2 flex items-center justify-between rounded-lg font-semibold text-left cursor-pointer text-secondary hover:bg-light-gray hover:text-primary hover:shadow-md transition-all duration-300`}
              >
                <div className="flex items-center gap-2">
                  <item.icon className="h-5 w-5" />
                  {item.label}
                </div>
                <ChevronDownIcon
                  className={`h-4 w-4 transform transition-transform ${
                    openSubmenu === item.label ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openSubmenu === item.label && (
                <ul className="ml-6 mt-2 flex flex-col gap-1">
                  {item.subItems.map((sub, subIdx) => (
                    <SidebarItem
                      key={subIdx}
                      items={sub.label}
                      isActive={location.pathname === sub.href}
                      index={subIdx}
                      icons={sub.icon}
                      to={sub.href}
                    />
                  ))}
                </ul>
              )}
            </>
          )}
        </li>
      ))}

      <button
        onClick={cerrarSesion}
        className="mt-4 px-4 py-2 flex items-center gap-2 font-semibold rounded-lg cursor-pointer text-seconndary hover:bg-light-gray hover:text-primary hover:shadow-md transition-all duration-300"
      >
        <ArrowLeftEndOnRectangleIcon className="h-5 w-5" />
        Cerrar sesión
      </button>
    </ul>
  );
});
