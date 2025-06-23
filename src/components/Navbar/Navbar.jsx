import { Chevron, ChevronBurger, InputSearch } from "../UI";
import { UserProfile } from "../Navbar";

export const Navbar = ({ setIsSidebarOpen }) => {
  return (
    <header className="w-full bg-light-gray px-4 h-14 flex items-center justify-between shadow-sm">
      <div className="flex items-center gap-4">
        <button
          onClick={() => setIsSidebarOpen((prev) => !prev)}
          className="md:hidden"
        >
          <ChevronBurger />
        </button>
        <div className="hidden md:block">
          <InputSearch placeholder="Buscar aquí..." />
        </div>
      </div>

      <div className="flex items-center gap-2">
        <UserProfile />
        <Chevron />
      </div>
    </header>
  );
};

