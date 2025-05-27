import { InputField } from "../../../components/UI/InputField";
import { InputPassword } from "../../../components/UI/InputPassword";
import { SecondaryButton } from "../../../components/UI/SecondaryButton";

export const LoginForm = () => {
  return (
    <div className="w-full max-w-xl mx-auto p-4">
      <form className=" lg:w-full sm:w-full py-6 px-6 mx-auto rounded-lg">
        <div className="flex flex-col w-full gap-6">
          {/* Contacto */}
          <div className="grid grid-cols-1 gap-6">
            <div className="block">
              <p className="font-semibold mb-2 text-off-white">
                Correo electrónico *
              </p>
              <InputField label={"Correo"} type={"email"} required={true} />
            </div>

            <div className="block">
              <p className="font-semibold mb-2 text-off-white">Contraseña *</p>
              <InputPassword
                label={"Contraseña"}
                placeholder={"Contraseña"}
                required={true}
              />
            </div>
          </div>

          <div className="block text-center mt-2 ">
            <SecondaryButton type={"submit"} text={"Iniciar Sesión"} />
          </div>

          <div className="text-center">
            <p className="text-sm text-off-white">
              ¿No tienes una cuenta?,{" "}
              <span className="text-secondary font-semibold">
                <to>registrate aquí</to>
              </span>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};
