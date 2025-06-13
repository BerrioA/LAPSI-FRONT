import { PrimaryButton } from "../components/UI";

export const NotFound = () => {
  const handleBack = () => {
    window.history.back();
  };
  return (
    <div className=" flex flex-col text-center justify-center aliing-center h-screen">
      <h1 className="text-9xl font-bold text-secondary">404</h1>
      <p className="text-xl mt-4 text-secondary">
        Página no encontrada, se encuentra en desarrollo.
      </p>
      <div className="mx-auto m-8">
        <PrimaryButton text={"Regresar"} onClick={handleBack} />
      </div>
    </div>
  );
};
