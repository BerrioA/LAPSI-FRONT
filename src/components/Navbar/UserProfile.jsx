import { useProfileStore } from "../../stores";

export const UserProfile = () => {
  const { name, last_name, email } = useProfileStore();

  return (
    <div className="flex items-center gap-3 max-w-[160px] sm:max-w-[220px] overflow-hidden truncate">
      <img
        src="/student.webp"
        alt="Imagen perfil usuario"
        className="w-9 h-9 rounded-xl object-cover shrink-0"
      />
      {/* Texto oculto en pantallas pequeñas */}
      <div className="hidden sm:flex flex-col truncate min-w-0">
        <p className="font-semibold text-secondary truncate">
          {name} {last_name}
        </p>
        <span className="text-sm text-gray-500 truncate">{email}</span>
      </div>
    </div>
  );
};
