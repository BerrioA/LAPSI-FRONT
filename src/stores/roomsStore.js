import axios from "axios";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

const BASE_URL = import.meta.env.VITE_API_URL;

export const useRoomsStore = create(
  devtools((set) => ({
    rooms: [],
    loading: false,
    error: null,

    fetchRooms: async () => {
      set({ loading: true, error: null });
      try {
        const res = await axios.get(`${BASE_URL}/rooms`);
        set({ rooms: res.data });
      } catch (error) {
        let messageError =
          error.message.error || "Problema de red. Intenta más tarde.";

        set({ error: messageError });
      } finally {
        set({ loading: false });
      }
    },
  }))
);
