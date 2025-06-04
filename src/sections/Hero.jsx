import { useNavigate } from "react-router-dom";
import { SecondaryButton, Text } from "../components/UI";

export const Hero = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/login");
  };

  return (
    <div className="container mx-auto px-4 py-36 xl:py-15">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <div className="space-y-5 flex flex-col justify-center text-center md:text-left py-8 md:py-12 md:pr-8">
          <h1 className="text-4xl xl:text-5xl font-bold text-secondary leading-snug">
            Bienvenido a{" "}
            <span className="bg-gradient-to-r  from-primary via-from-primary  to-secondary text-transparent bg-clip-text font-bold">
              Lapsi
            </span>
            , tu plataforma para reservas de{" "}
            <span className="bg-gradient-to-r from-primary via-from-primary  to-secondary text-transparent bg-clip-text font-bold">
              Salas de Psicología
            </span>
          </h1>

          <Text>
            El laboratorio de psicología de la Corporación universitaria del
            Caribe es un espacio académico y de investigación que tiene como
            propósito apoyar la formación integral de los estudiantes del
            programa de psicología, así como fomentar la producción de
            conocimiento a través de proyectos sociales, investigativos y de
            intervención psicológica en contextos de vulnerabilidad. Este
            laboratorio busca ser un referente en la región, promoviendo la
            excelencia académica, la innovación y el impacto comunitario.
          </Text>

          <div className="mt-12 md:mt-6 xl:w-[30%] sm:w-full">
            <SecondaryButton
              text={"Reservar ahora"}
              type="button"
              onClick={handleClick}
            />
          </div>
        </div>

        {/* Imagen de la seccion del Hero */}
        <div className="hidden md:flex justify-center items-center">
          <img
            src="/StudentGirl.png"
            alt="Imagen Estudiante"
            className="w-full max-w-md md:max-w-lg xl:max-w-xl object-contain"
          />
        </div>
      </div>
    </div>
  );
};
