import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export const InputSearch = ({ placeholder }) => {
  return (
    <div
      className={`flex items-center bg-white rounded-xl px-3 py-2 gap-2 shadow-sm ring-1 ring-gray-300 focus-within:ring-2 focus-within:ring-primary transition`}
    >
      <MagnifyingGlassIcon className="w-5 h-5 text-gray-500" />
      <input
        type="text"
        placeholder={placeholder}
        className="xl:w-72 md:w-56 outline-none bg-transparent text-sm text-gray-700 placeholder-gray-400"
      />
    </div>
  );
};
