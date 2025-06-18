import { Select, SelectItem } from "@nextui-org/react";

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
      onChange={(e) => onChange(e.target.value)}
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
