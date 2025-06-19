import { useProfileStore } from "../../stores";

export const UserProfile = () => {
  const { name, last_name, email } = useProfileStore();

  return (
    <div className="flex w-[220px] items-center gap-4">
      <img
        src="/student.webp"
        alt="Imagen perfil usuario"
        className="w-9 h-9 bg-slate-400 rounded-xl"
      />
      <div className="flex flex-col">
        <p className="font-semibold text-secondary">
          {name} {last_name}
        </p>
        <span className="text-sm text-gray-500">{email}</span>
      </div>
      <div></div>
    </div>
  );
};
