export const UserProfile = () => {
  return (
    <div className="flex w-[220px] items-center gap-4">
      <img
        src="/student.webp"
        alt="Imagen perfil usuario"
        className="w-9 h-9 bg-slate-400 rounded-xl"
      />
      <div className="flex flex-col">
        <p className="font-semibold text-secondary">Alejandro Berrio</p>
        <span className="text-sm text-gray-500">alejandro@cecar.edu.co</span>
      </div>
      <div></div>
    </div>
  );
};
