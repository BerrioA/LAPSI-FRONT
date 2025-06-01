import { Chevron, ChevronBurger, InputSearch } from "../UI";
import { UserProfile } from "../Navbar";

export const Navbar = () => {
  return (
    <div className="flex items-center px-4 justify-between bg-light-gray w-full">
      <div className="flex items-center gap-4">
        <ChevronBurger />
        <InputSearch placeholder={"Buscar aquí..."} width={"280px"} />
      </div>

      <div className="flex items-center">
        <UserProfile />
        <Chevron />
      </div>
    </div>
  );
};
