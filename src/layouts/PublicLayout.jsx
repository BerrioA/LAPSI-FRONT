import { Footer } from "../components/UI/Footer";
import { Nav } from "../components/UI/Nav";

export const PublicLayout = ({ children }) => {
  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>
  );
};
