import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { useProfileStore } from "./profileStore";
import { axiosInstance } from "../api/axiosInstance";

export const useReservationStore = create(
  devtools((set) => ({
    loading: false,
    error: null,
    message: null,
    reservations: [],

    postReservation: async (reservationData) => {
      set({ loading: true, error: null, message: null });

      try {
        const response = await axiosInstance.post(`/bookings`, reservationData);

        if (response.status !== 201) {
          throw new Error("Error al intentar realizar la reserva");
        }

        set({ message: response.data.message });
        return true;
      } catch (err) {
        console.log(err);
        let messageError =
          err.response?.data?.error || "Problema de red. Intenta más tarde.";

        set({
          error: messageError,
        });
        return false;
      } finally {
        set({ loading: false });
      }
    },

    fetchReservations: async () => {
      set({ loading: true, error: null });

      try {
        const { role } = useProfileStore.getState();
        let endpoint = "";

        switch (role) {
          case "Admin":
            endpoint = "/bookings";
            break;
          case "Estudiante":
            endpoint = "/bookings/my-bookings";
            break;
          default:
            throw new Error("Rol de usuario no soportado");
        }

        const response = await axiosInstance.get(`${endpoint}`);

        set({ reservations: response.data, error: null });
      } catch (err) {
        set({
          error: err.response.data.message || "No se pudo cargar las reservas.",
        });
      } finally {
        set({ loading: false });
      }
    },
  }))
);
