import { Chevron, ChevronBurger, InputSearch } from "../UI";
import { UserProfile } from "../Navbar";

export const Navbar = ({ setIsSidebarOpen }) => {
  return (
    <header className="w-full bg-light-gray px-4 h-14 flex items-center justify-between shadow-sm overflow-x-auto">
      <div className="flex items-center gap-2 min-w-0">
        <button
          onClick={() => setIsSidebarOpen((prev) => !prev)}
          className="md:hidden"
        >
          <ChevronBurger />
        </button>

        {/* Haz que el buscador sea opcionalmente visible si se requiere en móviles */}
        <div className="hidden md:block max-w-[200px]">
          <InputSearch placeholder="Buscar aquí..." />
        </div>
      </div>

      <div className="flex items-center gap-2 min-w-0">
        <UserProfile />
        <Chevron />
      </div>
    </header>
  );
};

