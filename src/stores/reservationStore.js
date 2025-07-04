import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { useProfileStore } from "./profileStore";
import { axiosInstance } from "../api/axiosInstance";

export const useReservationStore = create(
  devtools((set, get) => ({
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

    updateReservation: async (bookingId, updatedData) => {
      set({ loading: true, error: null, message: null });

      try {
        const res = await axiosInstance.patch(
          `/bookings/${bookingId}`,
          updatedData
        );

        set({
          message: res.data.message || "Reserva actualizada correctamente.",
        });

        await get().fetchReservations();

        return true;
      } catch (error) {
        const msg =
          error?.response?.data?.error || "Error al actualizar la reserva.";
        set({ error: msg });
        return false;
      } finally {
        set({ loading: false });
      }
    },

    changeBookingState: async (bookingId, newStatus) => {
      set({ loading: true, error: null });

      try {
        const res = await axiosInstance.patch(`/bookings/${bookingId}`, {
          status: newStatus,
        });

        // Refresca la lista después de cambiar el estado
        await get().fetchReservations();

        return { success: true, message: res.data.message };
      } catch (error) {
        return {
          success: false,
          message:
            error?.response?.data?.error || "Error al actualizar el estado.",
        };
      } finally {
        set({ loading: false });
      }
    },
  }))
);
