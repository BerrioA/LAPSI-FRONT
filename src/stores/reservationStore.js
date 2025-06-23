import axios from "axios";
import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { useAuthStore } from "./authStore";
import { useProfileStore } from "./profileStore";

const BASE_URL = import.meta.env.VITE_API_URL;

export const useReservationStore = create(
  devtools((set) => ({
    loading: false,
    error: null,
    message: null,
    reservations: [],

    getValidToken: async () => {
      const { token, refreshAccessToken } = useAuthStore.getState();
      let currentToken = token;

      if (!currentToken) {
        currentToken = await refreshAccessToken();
        if (!currentToken) {
          console.warn("No se pudo obtener un token válido.");
          throw new Error("Problema de red. Intenta más tarde.");
        }
      }

      return currentToken;
    },

    postReservation: async (reservationData) => {
      set({ loading: true, error: null, message: null });

      try {
        const token = await useReservationStore.getState().getValidToken();
        if (!token) return false;

        const response = await axios.post(
          `${BASE_URL}/bookings`,
          reservationData,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        if (response.status !== 201) {
          throw new Error("Error al intentar realizar la reserva");
        }

        set({ message: response.data.message });
      } catch (err) {
        console.log(err);
        let messageError =
          err.response?.data?.error || "Problema de red. Intenta más tarde.";

        set({
          error: messageError,
        });
      } finally {
        set({ loading: false });
      }
    },

    fetchReservations: async () => {
      set({ loading: true, error: null });

      try {
        const token = await useReservationStore.getState().getValidToken();
        if (!token) return;

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

        const response = await axios.get(`${BASE_URL}${endpoint}`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        set({ reservations: response.data, error: null });
      } catch (err) {
        set({ error: err.response?.data?.error || "Error desconocido" });
      } finally {
        set({ loading: false });
      }
    },
  }))
);
