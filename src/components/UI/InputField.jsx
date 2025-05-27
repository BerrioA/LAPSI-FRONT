import { Input } from "@heroui/react";

export const InputField = ({ label, type, onChange, required }) => {
  return (
    <div className="w-full flex flex-col">
      <div className="flex w-full flex-wrap md:flex-nowrap gap-4 ">
        <Input
          label={label}
          type={type}
          onChange={onChange}
          required={required}
        />
      </div>
    </div>
  );
};
