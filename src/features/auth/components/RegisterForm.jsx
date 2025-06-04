import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  InputField,
  InputPassword,
  InputSelect,
  PrimaryButton,
} from "../../../components/UI";
import { useFormFields } from "../../../hooks";

export const RegisterForm = () => {
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
  const { getFieldProps } = useFormFields(initialState);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleRegisterUser = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    setError("");

    try {
      const response = await axios.post(
        "http://localhost:3000/api/lapsi/v1/users",
        {
          name: formData.name,
          middle_name: formData.middle_name,
          last_name: formData.last_name,
          second_last_name: formData.second_last_name,
          document_type: formData.document_type,
          document_number: formData.document_number,
          cellphone: formData.cellphone,
          email: formData.email,
          password: formData.password,
          confirmPassword: formData.confirmPassword,
        }
      );

      if (response.status === 200 || response.status === 201) {
        setSuccess(true);

        setFormData({
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
        });
      }
    } catch (error) {
      console.error("Error al registrar usuario:", error.response.data.error);
      if (error.response) {
        const errorMessage = error.response.data.error;

        setError(errorMessage);
      } else {
        setError("Ocurrió un error inesperado. Inténtalo de nuevo.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4 mb-72">
      <form
        onSubmit={handleRegisterUser}
        className="bg-white lg:w-full sm:w-full py-6 px-6 mx-auto rounded-lg shadow-lg border border-gray-100 overflow-y-auto"
      >
        <div className="flex flex-col w-full gap-6">
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-4">
              <p className="text-sm">{error}</p>
            </div>
          )}

          {success && (
            <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg mb-4">
              <p className="text-sm">
                ¡Registro exitoso! Bienvenido a la plataforma.
              </p>
            </div>
          )}

          <div className="grid xl:grid-cols-2 md:grid-cols-1 gap-6">
            <div className="block">
              <p className="font-semibold mb-2 text-gray-700">Nombre *</p>
              <InputField
                label="Primer nombre"
                name="name"
                {...getFieldProps("name")}
              />
            </div>

            <div className="block">
              <p className="font-semibold mb-2 text-gray-700">Segundo nombre</p>
              <InputField
                label={"Segundo nombre (Opcional)"}
                name="middle_name"
                {...getFieldProps("middle_name")}
                required={false}
              />
            </div>
          </div>

          <div className="grid xl:grid-cols-2 sm:grid-cols-1 gap-6">
            <div className="block">
              <p className="font-semibold mb-2 text-gray-700">
                Primer apellido *
              </p>
              <InputField
                label={"Primer apellido"}
                name="last_name"
                {...getFieldProps("last_name")}
              />
            </div>

            <div className="block">
              <p className="font-semibold mb-2 text-gray-700">
                Segundo apellido *
              </p>
              <InputField
                label={"Segundo apellido"}
                name="second_last_name"
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
                label={"Tipo de documento"}
                name="document_type"
                options={["CC", "TI"]}
                {...getFieldProps("document_type")}
              />
            </div>
            <div className="block">
              <p className="font-semibold mb-2 text-gray-700">
                Número de documento *
              </p>
              <InputField
                label={"Número de documento"}
                type={"text"}
                name="document_number"
                {...getFieldProps("document_number")}
              />
            </div>
          </div>

          <div className="grid xl:grid-cols-2 sm:grid-cols-1 gap-6">
            <div className="block">
              <p className="font-semibold mb-2 text-gray-700">Celular *</p>
              <InputField
                label={"Celular"}
                type={"tel"}
                name="cellphone"
                {...getFieldProps("cellphone")}
              />
            </div>

            <div className="block">
              <p className="font-semibold mb-2 text-gray-700">
                Correo electrónico *
              </p>
              <InputField
                label={"Correo"}
                type={"email"}
                name="email"
                {...getFieldProps("email")}
              />
            </div>
          </div>

          <div className="grid xl:grid-cols-2 sm:grid-cols-1 gap-6">
            <div className="block">
              <p className="font-semibold mb-2 text-gray-700">Contraseña *</p>
              <InputPassword
                label={"Contraseña"}
                name="password"
                placeholder={"Mínimo 6 caracteres"}
                {...getFieldProps("password")}
              />
            </div>

            <div className="block">
              <p className="font-semibold mb-2 text-gray-700">
                Confirmar contraseña *
              </p>
              <InputPassword
                label={"Confirmar contraseña"}
                name="confirmPassword"
                placeholder={"Confirmar contraseña"}
                {...getFieldProps("confirmPassword")}
              />
            </div>
          </div>

          <div className="block text-center mt-6">
            <PrimaryButton
              text={isLoading ? "Registrando..." : "Registrarse"}
              onClick={handleRegisterUser}
              type={"submit"}
              disabled={isLoading}
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
