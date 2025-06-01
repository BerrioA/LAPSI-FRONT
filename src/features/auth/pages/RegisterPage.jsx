import { PublicLayout } from "../../../layouts/PublicLayout";
import { RegisterForm } from "../components/RegisterForm"; 

export const RegisterPage = () => {
  return (
    <>
      <PublicLayout>
        <div className="h-[100%]">
          <div className="h-[50%] w-full bg-gradient-to-br from-secondary via-primary to-primary-dark rounded-b-3xl overflow-hidden z-10 absolute">
            <div className="relative z-10 container mx-auto px-4 py-16 md:py-20 lg:py-24">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-3xl md:text-4xl lg:text-4xl font-bold text-off-white mb-2 leading-tight">
                  CREAR UNA CUENTA
                </h1>

                <div className="max-w-2xl mx-auto">
                  <p className="text-base md:text-lg text-off-white font-light">
                    Completa el formulario y accede a herramientas profesionales
                    diseñadas para optimizar tu trabajo.
                  </p>
                </div>

                {/* Indicadores de beneficios */}
                <div className="flex flex-wrap justify-center gap-6 mt-4 text-off-white">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-off-white rounded-full"></div>
                    <span className="text-sm font-medium">
                      Gestión Simplificada
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-off-white rounded-full"></div>
                    <span className="text-sm font-medium">
                      Acceso Inmediato
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-off-whiterounded-full"></div>
                    <span className="text-sm font-medium">
                      Totalmente Seguro
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="z-20 relative top-64">
            <RegisterForm />
          </div>
        </div>
      </PublicLayout>
    </>
  );
};
