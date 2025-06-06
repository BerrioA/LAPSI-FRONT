import { Button } from "@heroui/react";

export const SecondaryButton = ({ text, onClick, type = "button" }) => {
  return (
    <Button
      className="bg-gradient-to-tr xl:w-xl sm:w-full bg-secondary text-white font-semibold shadow-lg"
      onClick={onClick}
      type={type}
    >
      {text || "Botón"}
    </Button>
  );
};
