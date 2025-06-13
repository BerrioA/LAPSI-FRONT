import { PublicLayout } from "../layouts/PublicLayout";
import { Hero, MissionVision } from "../sections";

export const Home = () => {
  return (
    <>
      <PublicLayout>
        <div className="h-screen bg-off-white">
          <Hero />
        </div>
        <MissionVision />
      </PublicLayout>
    </>
  );
};
