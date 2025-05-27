import { useState } from "react";
import { InputField } from "../../../components/UI/InputField";
import { InputPassword } from "../../../components/UI/InputPassword";
import { InputSelect } from "../../../components/ui/InputSelect";
import { PrimaryButton } from "../../../components/UI/PrimaryButton";

export const RegisterForm = () => {
  const [name, setName] = useState("");
  const [middle_name, setMiddleName] = useState("");
  const [last_name, setLastName] = useState("");
  const [second_last_name, setSecondLastName] = useState("");
  const [document_type, setDocumentType] = useState("");
  const [document_number, setDocumentNumber] = useState("");
  const [cellphone, setCellphone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  return (
    <form className="lg:flex sm:block bg-full-white w-[950px] items-center justify-center py-4 px-4 mx-auto mt-4 rounded-2xl shadow-md">
      <div className="w-[570px] text-center justify-center">
        <img src="/Register.svg" alt="Vector Register" />
        <div>
          <h1 className="font-bold">CAMPOS</h1>
          {name}
          {middle_name}
          {last_name}
          {second_last_name}
          {document_type}
          {document_number}
          {cellphone}
          {email}
          {password}
          {confirmPassword}
        </div>
      </div>

      <div className="flex flex-col w-[630px] gap-4">
        <InputField
          label={"Primer nombre"}
          type={"text"}
          onChange={(e) => setName(e.target.value)}
        />
        <InputField
          label={"Segundo nombre (Opcional)"}
          type={"text"}
          onChange={(e) => setMiddleName(e.target.value)}
        />

        <InputField
          label={"Primer apellido"}
          type={"text"}
          onChange={(e) => setLastName(e.target.value)}
        />
        <InputField
          label={"Segundo apellido"}
          type={"text"}
          onChange={(e) => setSecondLastName(e.target.value)}
        />

        <InputSelect
          label={"Tipo de documento"}
          onChange={(e) => setDocumentType(e.target.value)}
        />
        <InputField
          label={"Número de documento"}
          type={"text"}
          onChange={(e) => setDocumentNumber(e.target.value)}
        />

        <InputField
          label={"Celular"}
          type={"text"}
          onChange={(e) => setCellphone(e.target.value)}
        />
        <InputField
          label={"Correo"}
          type={"email"}
          onChange={(e) => setEmail(e.target.value)}
        />

        <InputPassword
          label={"Contraseña"}
          placeholder={"Ingrese una contraseña"}
          onChange={(e) => setPassword(e.target.value)}
        />
        <InputPassword
          label={"Confirmar contraseña"}
          placeholder={"Confirmar contraseña"}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <PrimaryButton text={"Registrarse"} />
      </div>
    </form>
  );
};
