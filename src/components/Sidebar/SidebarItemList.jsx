import { memo, useCallback, useState } from "react";
import { SidebarItem } from "./SidebarItem";
import { ItemsDefault } from "../../const/Items";

export const SidebarItemList = memo(() => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleItemClick = useCallback((index) => {
    setActiveIndex(index);
  }, []);

  return (
    <ul className="flex flex-col gap-2 p-4">
      {ItemsDefault.map((item, index) => (
        <SidebarItem
          key={index}
          items={item.label}
          isActive={activeIndex === index}
          onItemClick={handleItemClick}
          index={index}
          icons={item.icon}
        />
      ))}
    </ul>
  );
});
