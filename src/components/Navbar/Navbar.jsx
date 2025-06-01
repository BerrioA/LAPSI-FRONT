import { Chevron } from "../UI/Chevron";
import { ChevronBurger } from "../UI/ChevronBurger";
import { InputSearch } from "../UI/InputSearch";
import { UserProfile } from "./UserProfile";

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
