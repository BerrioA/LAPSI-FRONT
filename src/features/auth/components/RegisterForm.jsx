import { Link, useNavigate } from "react-router-dom";
import {
  InputField,
  InputPassword,
  InputSelect,
  PrimaryButton,
} from "../../../components/UI";
import { useFormFields } from "../../../hooks";
import { useAuthStore } from "../../../stores";

const validateRegister = (values) => {
  const errors = {};
  if (!values.name) errors.name = "Este campo es obligatorio.";
  if (!values.email) errors.email = "Email requerido.";
  if (values.password !== values.confirmPassword) {
    errors.confirmPassword = "Las contraseñas no coinciden.";
  }
  return errors;
};

export const RegisterForm = () => {
  const navigate = useNavigate();
  const { register, loading, error } = useAuthStore();
  const initialState = {
    name: "",
    middle_name: "",
    last_name: "",
    second_last_name: "",
    document_type: "",
    document_number: "",
    cellphone: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const { getFieldProps, handleSubmit, errors } = useFormFields(
    initialState,
    validateRegister
  );

  const dateRegister = async (data) => {
    const userRegister = await register(data);
    console.log(userRegister);
    if (userRegister) navigate("/login");
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4 mb-72">
      <form
        onSubmit={(e) => handleSubmit(e, dateRegister)}
        className="bg-white lg:w-full sm:w-full py-6 px-6 mx-auto rounded-lg shadow-lg border border-gray-100 overflow-y-auto"
      >
        <div className="flex flex-col w-full gap-6">
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-4">
              <p className="text-sm">{error}</p>
            </div>
          )}

          {/* {errors && (
            <div className="bg-red-100 border border-red-300 text-red-800 px-4 py-3 rounded-lg mb-4">
              <p className="text-sm">{errors}</p>
            </div>
          )} */}

          <div className="grid xl:grid-cols-2 md:grid-cols-1 gap-6">
            <div className="block">
              <p className="font-semibold mb-2 text-gray-700">Nombre *</p>
              <InputField
                label="Primer nombre"
                {...getFieldProps("name")}
                error={errors.name}
              />
            </div>

            <div className="block">
              <p className="font-semibold mb-2 text-gray-700">Segundo nombre</p>
              <InputField
                label="Segundo nombre"
                {...getFieldProps("middle_name")}
              />
            </div>
          </div>

          <div className="grid xl:grid-cols-2 sm:grid-cols-1 gap-6">
            <div className="block">
              <p className="font-semibold mb-2 text-gray-700">
                Primer apellido *
              </p>
              <InputField
                label="Primer apellido"
                {...getFieldProps("last_name")}
              />
            </div>

            <div className="block">
              <p className="font-semibold mb-2 text-gray-700">
                Segundo apellido *
              </p>
              <InputField
                label="Segundo apellido"
                {...getFieldProps("second_last_name")}
              />
            </div>
          </div>

          <div className="grid xl:grid-cols-2 sm:grid-cols-1 gap-6">
            <div className="block">
              <p className="font-semibold mb-2 text-gray-700">
                Tipo de documento *
              </p>
              <InputSelect
                label="Tipo de documento"
                name="type_document"
                {...getFieldProps("type_document")}
                options={[
                  { key: "CC", label: "Cédula de ciudadanía" },
                  { key: "TI", label: "Tarjeta de identidad" },
                ]}
              />
            </div>
            <div className="block">
              <p className="font-semibold mb-2 text-gray-700">
                Número de documento *
              </p>
              <InputField
                label="Número de documento"
                {...getFieldProps("document_number")}
              />
            </div>
          </div>

          <div className="grid xl:grid-cols-2 sm:grid-cols-1 gap-6">
            <div className="block">
              <p className="font-semibold mb-2 text-gray-700">Celular *</p>
              <InputField label="Celular" {...getFieldProps("cellphone")} />
            </div>

            <div className="block">
              <p className="font-semibold mb-2 text-gray-700">
                Correo electrónico *
              </p>
              <InputField
                label="Correo electrónico"
                type="email"
                {...getFieldProps("email")}
                error={errors.email}
              />
            </div>
          </div>

          <div className="grid xl:grid-cols-2 sm:grid-cols-1 gap-6">
            <div className="block">
              <p className="font-semibold mb-2 text-gray-700">Contraseña *</p>
              <InputPassword
                name="password"
                placeholder={"Mínimo 6 caracteres"}
                label="Contraseña"
                type="password"
                {...getFieldProps("password")}
              />
            </div>

            <div className="block">
              <p className="font-semibold mb-2 text-gray-700">
                Confirmar contraseña *
              </p>
              <InputPassword
                name="confirmPassword"
                placeholder={"Confirmar contraseña"}
                label="Confirmar contraseña"
                type="password"
                {...getFieldProps("confirmPassword")}
                error={errors.confirmPassword}
              />
            </div>
          </div>

          <div className="block text-center mt-6">
            <PrimaryButton
              text={loading ? "Registrando..." : "Registrarse"}
              type={"submit"}
              disabled={loading}
            />
          </div>

          <div className="text-center">
            <p className="text-sm text-gray-500 font-semibold">
              ¿Ya tienes una cuenta?,{" "}
              <span className="text-primary">
                <Link to={"/login"}>inicia sesión aquí</Link>
              </span>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};
