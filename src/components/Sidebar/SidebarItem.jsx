import { memo } from "react";

export const SidebarItem = memo(
  ({ items, isActive, onItemClick, index, icons }) => {
    console.log(`SidebarItem: ${items} re-rendered.`);

    const activeClass =
      "bg-primary transition-all text-off-white shadow-xl transition-colors  duration-500";
    const inactiveClass =
      "text-seconndary hover:bg-light-gray hover:text-primary hover:shadow-md hover:transition-all hover:transition hover:duration-400";
    const Icon = icons;
    return (
      <li
        className={`px-4 py-2 flex items-center gap-2 font-semibold rounded-lg cursor-pointer ${
          isActive ? activeClass : inactiveClass
        }`}
        onClick={() => onItemClick(index)}
      >
        <Icon className="h-5 w-5" />
        {items}
      </li>
    );
  },
  (prevProps, nextProps) => {
    return (
      prevProps.isActive === nextProps.isActive &&
      prevProps.items === nextProps.items
    );
  }
);
