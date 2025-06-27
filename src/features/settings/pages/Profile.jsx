import { useState } from "react";
import { useFormik } from "formik";
import { InputField } from "../../../components/UI/InputField";
import { InputSelect } from "../../../components/UI/InputSelect";
import { PrimaryButton } from "../../../components/UI/PrimaryButton";
import { useProfileStore, userStore } from "../../../stores";
import { tiposDeDocumentos } from "../../../const/itemsInputSelect";
import {
  UserCircleIcon,
  EnvelopeIcon,
  DevicePhoneMobileIcon,
  FingerPrintIcon,
} from "@heroicons/react/24/outline";

export const Profile = () => {
  const profile = useProfileStore();
  const updateUser = userStore((state) => state.updateUser);
  const [message, setMessage] = useState(null);
  const [messageType, setMessageType] = useState("success");

  const {
    uid,
    name,
    middle_name,
    last_name,
    second_last_name,
    type_document,
    document_number,
    cellphone,
    email,
  } = profile;

  const [documentType, setDocumentType] = useState(type_document || "");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: name || "",
      middle_name: middle_name || "",
      last_name: last_name || "",
      second_last_name: second_last_name || "",
      type_document: type_document || "",
      document_number: document_number || "",
      cellphone: cellphone || "",
      email: email || "",
    },
    onSubmit: async (data) => {
      setIsSubmitting(true);
      const { success, message } = await updateUser(data);
      setIsSubmitting(false);

      setMessage(message);
      setMessageType(success ? "success" : "error");

      setTimeout(() => setMessage(null), 4000);
    },
  });

  const { handleSubmit, getFieldProps, errors, setFieldValue } = formik;

  const handleDocumentTypeChange = (value) => {
    setDocumentType(value);
    setFieldValue("type_document", value);
  };

  return (
    <div className="min-h-screen w-full flex justify-center items-start py-10 px-4">
      <div className="w-full max-w-5xl bg-full-white rounded-2xl shadow-lg overflow-hidden">
        <div className="bg-secondary text-white px-6 py-6 flex flex-col md:flex-row items-center gap-4">
          <UserCircleIcon className="w-20 h-20 text-primary bg-white rounded-full p-1" />
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold">
              {name} {middle_name} {last_name} {second_last_name}
            </h2>
            <p className="text-sm text-gray-200 flex items-center gap-1">
              <FingerPrintIcon className="w-4 h-4" /> {uid}
            </p>
            <p className="text-sm text-gray-200 flex items-center gap-1">
              <EnvelopeIcon className="w-4 h-4" /> {email}
            </p>
            <p className="text-sm text-gray-200 flex items-center gap-1">
              <DevicePhoneMobileIcon className="w-4 h-4" /> {cellphone}
            </p>
          </div>
        </div>
        {message && (
          <div
            className={`mb-6 px-4 py-3 rounded text-white font-semibold ${
              messageType === "success" ? "bg-green-500" : "bg-red-500"
            }`}
          >
            {message}
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="px-6 py-10"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InputField
              label="Primer nombre"
              {...getFieldProps("name")}
              error={errors.name}
            />
            <InputField
              label="Segundo nombre"
              {...getFieldProps("middle_name")}
              error={errors.middle_name}
            />
            <InputField
              label="Primer apellido"
              {...getFieldProps("last_name")}
              error={errors.last_name}
            />
            <InputField
              label="Segundo apellido"
              {...getFieldProps("second_last_name")}
              error={errors.second_last_name}
            />
            <InputSelect
              label="Tipo de documento"
              name="type_document"
              value={documentType}
              onChange={handleDocumentTypeChange}
              options={tiposDeDocumentos}
              placeholder="Tipo de documento"
            />
            <InputField
              label="Número de documento"
              {...getFieldProps("document_number")}
              error={errors.document_number}
            />
            <InputField
              label="Celular"
              {...getFieldProps("cellphone")}
              error={errors.cellphone}
            />
            <InputField
              label="Correo electrónico"
              {...getFieldProps("email")}
              error={errors.email}
            />
          </div>

          <div className="flex justify-end mt-10">
            <PrimaryButton
              text={isSubmitting ? "Guardando..." : "Guardar cambios"}
              type="submit"
            />
          </div>
        </form>
      </div>
    </div>
  );
};
