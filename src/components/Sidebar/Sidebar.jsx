import { SidebarHeader, SidebarItemList } from "../Sidebar";
import clsx from "clsx";

export const Sidebar = ({ isOpen, setIsOpen }) => {
  return (
    <>
      <div
        className={clsx(
          "bg-off-white h-screen w-72 fixed md:static top-0 left-0 z-40 transition-transform duration-300",
          {
            "-translate-x-full md:translate-x-0": !isOpen,
            "translate-x-0": isOpen,
          }
        )}
      >
        <SidebarHeader />
        <SidebarItemList />
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};
