import { useState } from "react";
import {
  ChevronDoubleDownIcon,
  ChevronDoubleUpIcon,
} from "@heroicons/react/24/outline";

export const Chevron = () => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {isOpen ? (
        <ChevronDoubleUpIcon
          className="w-4 h-4"
          onClick={() => setIsOpen(!isOpen)}
        />
      ) : (
        <ChevronDoubleDownIcon
          className="w-4 h-4 sm:w-4 sm:h-4"
          onClick={() => setIsOpen(!isOpen)}
        />
      )}
    </>
  );
}
