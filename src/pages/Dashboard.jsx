import { Navbar } from "../components/Navbar/Navbar";
import { Sidebar } from "../components/Sidebar/Sidebar";

export const Dashboard = () => {
  return (
    <div className="flex w-full h-14">
      <Sidebar />
      <Navbar />
    </div>
  );
};
