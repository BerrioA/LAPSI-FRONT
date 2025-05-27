import { Select, SelectItem } from "@heroui/react";

export const documentTypes = [
  { key: "CC", label: "CC" },
  { key: "TI", label: "TI" },
];

export const InputSelect = ({ label, onChange }) => {
  return (
    <div className="w-full flex flex-col">
      <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
        <Select label={label} required onChange={onChange}>
          {documentTypes.map((type) => (
            <SelectItem key={type.key}>{type.label}</SelectItem>
          ))}
        </Select>
      </div>
    </div>
  );
};
