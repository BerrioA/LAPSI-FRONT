import { Select, SelectItem } from "@heroui/react";

export const InputSelect = ({
  label,
  name,
  value,
  onChange,
  options = [],
  placeholder = "Seleccione una opción",
  isRequired = false,
  className = "",
}) => {
  return (
    <Select
      name={name}
      label={label}
      selectedKeys={value ? [value] : []}
      onSelectionChange={(keys) => {
        const selectedValue = Array.from(keys)[0];
        onChange(selectedValue);
      }}
      className={className}
      placeholder={placeholder}
      isRequired={isRequired}
      size="sm"
    >
      {options.map((item) => (
        <SelectItem key={item.key} value={item.key}>
          {item.label}
        </SelectItem>
      ))}
    </Select>
  );
};
