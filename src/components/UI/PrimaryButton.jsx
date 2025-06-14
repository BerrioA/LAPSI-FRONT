// PrimaryButton.tsx
import { Button } from "@heroui/react";

export const PrimaryButton = ({ text, onClick, type }) => {
  return (
    <Button
      className="bg-gradient-to-tr xl:w-xl sm:w-full from-primary to-secondary text-white font-semibold shadow-lg"
      onClick={onClick}
      type={type}
    >
      {text || "Botón"}
    </Button>
  );
};
