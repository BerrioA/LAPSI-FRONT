import { PublicLayout } from "../../../layouts/PublicLayout";
import { LoginForm } from "../components/LoginForm"; 

export const LoginPage = () => {
  return (
    <>
      <PublicLayout>
        <div className="h-screen bg-off-white">
          <div className="h-[100%] w-full bg-gradient-to-br from-secondary via-primary to-primary-dark overflow-hidden z-10 absolute">
            <div className="relative z-10 container mx-auto px-4 py-16 md:py-20 lg:py-24">
              <div className="max-w-4xl mx-auto text-center mt-24">
                <h1 className="text-3xl md:text-4xl lg:text-4xl font-bold text-off-white mb-2 leading-tight">
                  INICIAR SESIÓN
                </h1>

                <div className="max-w-2xl mx-auto">
                  <p className="text-base md:text-lg text-off-white font-light">
                    ¡Bienvenido de nuevo! 👋
                  </p>
                  <p className="text-base md:text-lg text-off-white font-light">
                    Conéctese para acceder a su panel de control personalizado.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="z-20 relative top-72">
            <LoginForm />
          </div>
        </div>
      </PublicLayout>
    </>
  );
};
