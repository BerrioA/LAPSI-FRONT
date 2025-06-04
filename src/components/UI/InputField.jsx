import { Input } from "@heroui/react";

export const InputField = ({
  label,
  name,
  type = "text",
  value,
  onChange,
  required = true,
  disabled = false,
}) => {
  return (
    <div className="w-full flex flex-col">
      <div className="flex w-full flex-wrap md:flex-nowrap gap-4 ">
        <Input
          id={name}
          label={label}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          required={required}
          disabled={disabled}
        />
      </div>
    </div>
  );
};
