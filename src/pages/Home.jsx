import { PublicLayout } from "../layouts/PublicLayout"; 
import { Hero } from "../sections"; 

export const Home = () => {
  return (
    <>
      <PublicLayout>
        <div className="h-screen bg-off-white">
          <Hero />
        </div>
      </PublicLayout>
    </>
  );
};
