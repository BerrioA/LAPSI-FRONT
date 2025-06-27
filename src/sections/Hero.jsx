import { useNavigate } from "react-router-dom";
import { SecondaryButton } from "../components/UI";

export const Hero = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/login");
  };

  return (
    <section className="bg-off-white w-full min-h-screen px-4 flex items-center">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
        <div className="flex justify-center lg:justify-end order-1 lg:order-2">
          <div className="relative w-[160px] sm:w-[200px] md:w-[260px] lg:w-[300px] xl:w-[460px]">
            <img
              src="/StudentGirl.png"
              alt="Estudiante en laboratorio"
              className="w-full object-cover rounded-3xl"
              loading="lazy"
            />
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary opacity-10 blur-xl rounded-3xl z-[-1]" />
          </div>
        </div>

        <div className="space-y-8 text-center lg:text-left order-2 lg:order-1">
          <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold leading-tight text-secondary">
            Plataforma de reservas para{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              salas de Psicología
            </span>
          </h1>

          <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed max-w-xl mx-auto lg:mx-0">
            Bienvenido a <strong>Lapsi</strong>, un espacio académico que apoya
            la formación de estudiantes de psicología y fomenta proyectos de
            impacto social, investigativo e innovador.
          </p>

          <div className="flex justify-center lg:justify-start">
            <SecondaryButton
              text="Reservar ahora"
              onClick={handleClick}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
