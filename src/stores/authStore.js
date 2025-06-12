import { create } from "zustand";
import axios from "axios";
import { devtools } from "zustand/middleware";

const BASE_URL = import.meta.env.VITE_API_URL;

export const useAuthStore = create(
  devtools((set) => ({
    user: null,
    token: null,
    isLoggedIn: false,
    loading: false,
    error: null,
    refreshToken: null,

    login: async ({ email, password }) => {
      set({ loading: true, error: null });

      try {
        const response = await axios.post(
          `${BASE_URL}/auth/login`,
          {
            email,
            password,
          },
          { withCredentials: true }
        );

        if (response.status !== 200) {
          throw new Error("Error al iniciar sesión");
        }

        set({ token: response.data.token, isLoggedIn: true });
        return true;
      } catch (err) {
        set({ error: err.response?.data?.message });
        return false;
      } finally {
        set({ loading: false });
      }
    },

    // refreshAccessToken: async () => {
    //   try {
    //     const response = await axios.post(`${BASE_URL}/auth/refresh`, {
    //       withCredentials: true,
    //     });

    //     if (response.status !== 200) {
    //       throw new Error("Error al intentar generar el refreshToken");
    //     }

    //     console.log(response.data);

    //     set({ refreshToken: response.data });
    //   } catch (err) {
    //     console.log("Error en el Refresh", err);
    //     set({ error: err.response?.data?.message });
    //   }
    // },

    logout: () => set({ user: null }),
  }))
);
