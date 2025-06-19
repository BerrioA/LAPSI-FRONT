import axios from "axios";
import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { useAuthStore } from "./authStore";

const BASE_URL = import.meta.env.VITE_API_URL;

export const useReservationStore = create(
  devtools((set) => ({
    loading: false,
    error: null,
    message: null,

    reserve: async (data) => {
      const { token, refreshAccessToken } = useAuthStore.getState();

      let currentToken = token;

      if (!currentToken) {
        currentToken = await refreshAccessToken();

        if (!currentToken) {
          console.warn("No se pudo obtener un token válido.");
          return null;
        }
      }
      const {
        activity_type,
        other_activity,
        study_area,
        area_test,
        user_quantity,
        partners,
        teachers_name,
        bookingDate,
        roomId,
        bookingTimeBlockId,
      } = data;

      set({ loading: true, error: null });

      try {
        const response = await axios.post(
          `${BASE_URL}/bookings`,
          {
            activity_type,
            other_activity,
            study_area,
            area_test,
            user_quantity,
            partners,
            teachers_name,
            bookingDate,
            roomId,
            bookingTimeBlockId,
          },
          {
            headers: {
              Authorization: `Bearer ${currentToken}`,
            },
          }
        );

        if (response.status !== 201) {
          throw new Error("Error al intentar relizar la reserva");
        }

        set({ message: response.data.message });

        return true;
      } catch (err) {
        set({ error: err.response?.data?.error });
        return false;
      } finally {
        set({ loading: false });
      }
    },
  }))
);
