import { useState } from "react";
import { useFormik } from "formik";
import { InputField } from "../../../components/UI/InputField";
import { PrimaryButton } from "../../../components/UI/PrimaryButton";
import { LockClosedIcon } from "@heroicons/react/24/solid";
import { useAuthStore, userStore } from "../../../stores";
import { useNavigate } from "react-router-dom";

export const ChangePassword = () => {
  const { logout } = useAuthStore();
  const { updatePassword } = userStore();
  const navigate = useNavigate();

  const [message, setMessage] = useState(null);
  const [messageType, setMessageType] = useState("success");
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    },

    onSubmit: async (values) => {
      setMessage(null);
      const { currentPassword, newPassword, confirmPassword } = values;

      // Validaciones
      if (!currentPassword || !newPassword || !confirmPassword) {
        setMessage("Todos los campos son obligatorios.");
        setMessageType("error");
        return;
      }

      if (newPassword.length < 6) {
        setMessage("La nueva contraseña debe tener al menos 6 caracteres.");
        setMessageType("error");
        return;
      }

      if (newPassword === currentPassword) {
        setMessage("La nueva contraseña no puede ser igual a la actual.");
        setMessageType("error");
        return;
      }

      if (newPassword !== confirmPassword) {
        setMessage("Las contraseñas no coinciden.");
        setMessageType("error");
        return;
      }

      setLoading(true);
      const { success, message } = await updatePassword({
        currentPassword,
        newPassword,
      });
      setLoading(false);

      setMessage(message);
      setMessageType(success ? "success" : "error");

      if (success) {
        formik.resetForm();
        logout();
        setTimeout(() => navigate("/"), 3000);
      }

      setTimeout(() => setMessage(null), 4000);
    },
  });

  const { handleSubmit, getFieldProps } = formik;

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-2xl">
      <div className="flex items-center gap-3 mb-6">
        <LockClosedIcon className="w-8 h-8 text-primary" />
        <h2 className="text-2xl font-bold text-secondary">
          Cambiar Contraseña
        </h2>
      </div>

      {message && (
        <div
          className={`mb-4 p-3 rounded ${
            messageType === "success"
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {message}
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="space-y-6"
      >
        <InputField
          type="password"
          label="Contraseña actual"
          {...getFieldProps("currentPassword")}
        />
        <InputField
          type="password"
          label="Nueva contraseña"
          {...getFieldProps("newPassword")}
        />
        <InputField
          type="password"
          label="Confirmar nueva contraseña"
          {...getFieldProps("confirmPassword")}
        />

        <div className="flex justify-end">
          <PrimaryButton
            text={loading ? "Guardando..." : "Guardar cambios"}
            type="submit"
            disabled={loading}
          />
        </div>
      </form>
    </div>
  );
};
