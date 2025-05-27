import { Input } from "@heroui/react";

export const InputField = ({ label, type, onChange }) => {
  return (
    <div className="w-full flex flex-col">
      <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
        {/* <Input
          label={label}
          type={type}
          variant="bordered"
          onChange={onChange}
        /> */}
        <Input label={label} type={type} onChange={onChange} />
      </div>
    </div>
  );
};

