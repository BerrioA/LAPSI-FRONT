import { Select, SelectItem } from "@heroui/react";

export const InputSelect = ({ label, name, value, onChange, options }) => {
  return (
    <div className="w-full flex flex-col">
      <Select
        label={label}
        selectedKeys={value ? [value] : []}
        onSelectionChange={(keys) => {
          const selectedValue = Array.from(keys)[0];
          onChange({
            target: {
              name,
              value: selectedValue,
            },
          });
        }}
        required
      >
        {options.map((opt) => (
          <SelectItem key={opt.key}>{opt.label}</SelectItem>
        ))}
      </Select>
    </div>
  );
};
