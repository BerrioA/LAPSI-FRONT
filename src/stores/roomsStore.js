import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { axiosInstance } from "../api/axiosInstance";

export const useRoomsStore = create(
  devtools((set) => ({
    rooms: [],
    loading: false,
    error: null,

    fetchRooms: async () => {
      set({ loading: true, error: null });
      try {
        const res = await axiosInstance.get(`/rooms`);
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
