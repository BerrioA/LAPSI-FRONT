import axios from "axios";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

const BASE_URL = import.meta.env.VITE_API_URL;

export const userStore = create(
  devtools((set) => ({
    users: [],
    loading: false,
    error: null,
    refreshToken: null,

    fetchUsers: async () => {
      set({ loading: true, error: null });
      try {
        const res = await axios.get(`${BASE_URL}/users`);
        set({ users: res.data });

        console.log(res.data);
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
