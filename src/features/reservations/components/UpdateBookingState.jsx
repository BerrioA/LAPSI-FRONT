// components/Reservations/UpdateBookingState.jsx
import { useState } from "react";
import { useReservationStore } from "../../../stores";
import { PrimaryButton } from "../../../components/UI/PrimaryButton";
import { SecondaryButton } from "../../../components/UI";

export const UpdateBookingState = ({ bookingId }) => {
  const { changeBookingState } = useReservationStore();

  const [statusToUpdate, setStatusToUpdate] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [messageType, setMessageType] = useState("success");

  const handleUpdate = async (status) => {
    setStatusToUpdate(status);
    setMessage(null);
    setLoading(true);

    const { success, message } = await changeBookingState(bookingId, status);
    setLoading(false);

    setMessage(message);
    setMessageType(success ? "success" : "error");

    setTimeout(() => {
      setMessage(null);
      setStatusToUpdate("");
    }, 4000);
  };

  return (
    <div className="space-y-2">
      {message && (
        <div
          className={`p-2 rounded text-sm ${
            messageType === "success"
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {message}
        </div>
      )}

      <div className="flex gap-3 flex-wrap">
        <PrimaryButton
          text={
            statusToUpdate === "aprobada" && loading
              ? "Aprobando..."
              : "Aprobar"
          }
          type="button"
          disabled={loading}
          onClick={() => handleUpdate("aprobada")}
        />

        <SecondaryButton
          text={
            statusToUpdate === "cancelada" && loading
              ? "Cancelando..."
              : "Cancelar"
          }
          type="button"
          disabled={loading}
          onClick={() => handleUpdate("cancelada")}
          className="!bg-red-100 !text-red-700 hover:!bg-red-200"
        />
      </div>
    </div>
  );
};
