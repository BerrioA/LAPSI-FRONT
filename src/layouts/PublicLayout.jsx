import { Footer, Nav } from "../components/UI"; 

export const PublicLayout = ({ children }) => {
  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>
  );
};
