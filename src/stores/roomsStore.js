import axios from "axios";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

export const useRoomsStore = create(
  devtools((set) => ({
    rooms: [],
    loading: false,
    error: null,

    fetchRooms: async () => {
      set({ loading: true, error: null });
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/rooms`);
        set({ rooms: res.data });
      } catch (error) {
        set({ error: error.message });
      } finally {
        set({ loading: false });
      }
    },
  }))
);
