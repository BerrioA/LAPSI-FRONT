import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  InputField,
  InputPassword,
  InputSelect,
  PrimaryButton,
} from "../../../components/UI";

export const RegisterForm = () => {
  const [formData, setFormData] = useState({
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
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
    if (error) setError("");
  };

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
      } else if (error.request) {
        setError(
          "No se pudo conectar con el servidor. Verifica tu conexión a internet."
        );
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
          {/* Mensajes de estado */}
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

          {/* Nombres */}
          <div className="grid xl:grid-cols-2 md:grid-cols-1 gap-6">
            <div className="block">
              <p className="font-semibold mb-2 text-gray-700">Nombre *</p>
              <InputField
                label={"Primer nombre"}
                type={"text"}
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                required={true}
                disabled={isLoading}
              />
            </div>

            <div className="block">
              <p className="font-semibold mb-2 text-gray-700">Segundo nombre</p>
              <InputField
                label={"Segundo nombre (Opcional)"}
                type={"text"}
                value={formData.middle_name}
                onChange={(e) =>
                  handleInputChange("middle_name", e.target.value)
                }
                required={false}
                disabled={isLoading}
              />
            </div>
          </div>

          {/* Apellidos */}
          <div className="grid xl:grid-cols-2 sm:grid-cols-1 gap-6">
            <div className="block">
              <p className="font-semibold mb-2 text-gray-700">
                Primer apellido *
              </p>
              <InputField
                label={"Primer apellido"}
                type={"text"}
                value={formData.last_name}
                onChange={(e) => handleInputChange("last_name", e.target.value)}
                required={true}
                disabled={isLoading}
              />
            </div>

            <div className="block">
              <p className="font-semibold mb-2 text-gray-700">
                Segundo apellido *
              </p>
              <InputField
                label={"Segundo apellido"}
                type={"text"}
                value={formData.second_last_name}
                onChange={(e) =>
                  handleInputChange("second_last_name", e.target.value)
                }
                required={true}
                disabled={isLoading}
              />
            </div>
          </div>

          {/* Documento */}
          <div className="grid xl:grid-cols-2 sm:grid-cols-1 gap-6">
            <div className="block">
              <p className="font-semibold mb-2 text-gray-700">
                Tipo de documento *
              </p>
              <InputSelect
                label={"Tipo de documento"}
                value={formData.document_type}
                onChange={(e) =>
                  handleInputChange("document_type", e.target.value)
                }
                required={true}
                disabled={isLoading}
              />
            </div>
            <div className="block">
              <p className="font-semibold mb-2 text-gray-700">
                Número de documento *
              </p>
              <InputField
                label={"Número de documento"}
                type={"text"}
                value={formData.document_number}
                onChange={(e) =>
                  handleInputChange("document_number", e.target.value)
                }
                required={true}
                disabled={isLoading}
              />
            </div>
          </div>

          {/* Contacto */}
          <div className="grid xl:grid-cols-2 sm:grid-cols-1 gap-6">
            <div className="block">
              <p className="font-semibold mb-2 text-gray-700">Celular *</p>
              <InputField
                label={"Celular"}
                type={"tel"}
                value={formData.cellphone}
                onChange={(e) => handleInputChange("cellphone", e.target.value)}
                required={true}
                disabled={isLoading}
              />
            </div>

            <div className="block">
              <p className="font-semibold mb-2 text-gray-700">
                Correo electrónico *
              </p>
              <InputField
                label={"Correo"}
                type={"email"}
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                required={true}
                disabled={isLoading}
              />
            </div>
          </div>

          {/* Contraseñas */}
          <div className="grid xl:grid-cols-2 sm:grid-cols-1 gap-6">
            <div className="block">
              <p className="font-semibold mb-2 text-gray-700">Contraseña *</p>
              <InputPassword
                label={"Contraseña"}
                placeholder={"Mínimo 6 caracteres"}
                value={formData.password}
                onChange={(e) => handleInputChange("password", e.target.value)}
                required={true}
                disabled={isLoading}
              />
            </div>

            <div className="block">
              <p className="font-semibold mb-2 text-gray-700">
                Confirmar contraseña *
              </p>
              <InputPassword
                label={"Confirmar contraseña"}
                placeholder={"Confirmar contraseña"}
                value={formData.confirmPassword}
                onChange={(e) =>
                  handleInputChange("confirmPassword", e.target.value)
                }
                required={true}
                disabled={isLoading}
              />
            </div>
          </div>

          {/* Botón de registro */}
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
