import { PrimaryButton } from "../components/UI";

export const Unauthorized = () => {
  const handleBack = () => {
    window.history.back();
  };

  return (
    <div className="flex flex-col text-center justify-center items-center h-screen bg-white">
      <h1 className="text-9xl font-bold text-secondary">403</h1>
      <p className="text-xl mt-4 text-gray-700">
        Acceso denegado. No tienes permiso para ver esta página.
      </p>
      <p className="text-sm mt-2 text-gray-500">
        Si crees que esto es un error, contacta al administrador.
      </p>
      <div className="mx-auto m-8">
        <PrimaryButton
          text={"Regresar"}
          onClick={handleBack}
        />
      </div>
    </div>
  );
};
