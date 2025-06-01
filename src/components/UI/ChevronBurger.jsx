import { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { Bars3CenterLeftIcon } from "@heroicons/react/24/outline";

export const ChevronBurger = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {isOpen ? (
        <Bars3CenterLeftIcon
          className="w-6 h-6"
          onClick={() => setIsOpen(!isOpen)}
        />
      ) : (
        <Bars3Icon className="w-6 h-6" onClick={() => setIsOpen(!isOpen)} />
      )}
    </>
  );
};
