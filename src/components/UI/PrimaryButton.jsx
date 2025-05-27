// PrimaryButton.tsx
import { Button } from "@heroui/react";

export const PrimaryButton = ({ text, onClick }) => {
  return (
    <Button
      className="bg-gradient-to-tr from-primary to-secondary text-white shadow-lg"
      onClick={onClick}
    >
      {text || "Botón"}
    </Button>
  );
};
