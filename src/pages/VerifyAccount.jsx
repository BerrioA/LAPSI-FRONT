import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const VerifyAccount = () => {
  const { code } = useParams();
  const navigate = useNavigate();
  const [status, setStatus] = useState("Verificando...");
  const [success, setSuccess] = useState(null);

  useEffect(() => {
    const verifyCode = async () => {
      try {
        const encodedCode = encodeURIComponent(code);
        const response = await axios.patch(
          `http://localhost:3000/api/lapsi/v1/users/verify-account/${encodedCode}`
        );

        console.log(response.data);
        setStatus("Cuenta verificada con éxito. Redirigiendo al login...");
        setSuccess(true);

        setTimeout(() => {
          navigate("/dashboard");
        }, 3000);
      } catch (error) {
        setStatus(error.response.error);
        console.error(error.response.error);
        setSuccess(false);
      }
    };

    if (code) verifyCode();
  }, [code, navigate]);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 px-4">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full text-center">
        <h1 className="text-2xl font-bold mb-4">
          {success === null
            ? "Verificando cuenta"
            : success
            ? "✅ Verificado"
            : "❌ Error"}
        </h1>
        <p className="text-gray-700">{status}</p>
      </div>
    </div>
  );
};

export default VerifyAccount;
