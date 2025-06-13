import axios from "axios";
import { useAuthStore } from "./authStore";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

const BASE_URL = import.meta.env.VITE_API_URL;

export const useProfileStore = create(
  devtools((set) => ({
    uid: null,
    name: null,
    last_name: null,
    role: null,
    email: null,
    isVerified: null,

    profile: async () => {
      const { token, refreshAccessToken } = useAuthStore.getState();

      let currentToken = token;

      if (!currentToken) {
        currentToken = await refreshAccessToken();

        if (!currentToken) {
          console.warn("No se pudo obtener un token válido.");
          return null;
        }
      }

      try {
        const response = await axios.get(`${BASE_URL}/auth/profile`, {
          headers: {
            Authorization: `Bearer ${currentToken}`,
          },
        });

        set({
          uid: response.data.uid,
          name: response.data.name,
          last_name: response.data.last_name,
          role: response.data.role,
          email: response.data.email,
          isVerified: response.data.isVerified,
        });
        // return response.data;
      } catch (error) {
        console.error("Error al obtener el perfil:", error);
        return null;
      }
    },
  }))
);
