import { useState, useCallback } from "react";

export const useSidebar = (defaultActiveIndex = 0) => {
  const [activeIndex, setActiveIndex] = useState(defaultActiveIndex);

  const handleItemClick = useCallback((index) => {
    setActiveIndex(index);
  }, []);

  return {
    activeIndex,
    handleItemClick,
  };
};
