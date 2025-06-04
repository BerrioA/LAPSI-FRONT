import { memo } from "react";
import { Link } from "react-router-dom";

export const SidebarItem = memo(
  ({ items, isActive,  icons, to }) => {
    const activeClass =
      "bg-primary transition-all text-off-white shadow-xl transition-colors duration-500";
    const inactiveClass =
      "text-seconndary hover:bg-light-gray hover:text-primary hover:shadow-md hover:transition-all hover:transition hover:duration-400";
    const Icon = icons;
    return (
      <Link to={to}>
        <li
          className={`px-4 py-2 flex items-center gap-2 font-semibold rounded-lg cursor-pointer ${
            isActive ? activeClass : inactiveClass
          }`}
        >
          <Icon className="h-5 w-5" />
          {items}
        </li>
      </Link>
    );
  },
  (prevProps, nextProps) => {
    return (
      prevProps.isActive === nextProps.isActive &&
      prevProps.items === nextProps.items
    );
  }
);
