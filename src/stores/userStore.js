import axios from "axios";
import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { useAuthStore } from "./authStore";
import { useProfileStore } from "./profileStore";

const BASE_URL = import.meta.env.VITE_API_URL;

export const userStore = create(
  devtools((set) => ({
    users: [],
    loading: false,
    error: null,
    refreshToken: null,
    message: null,

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

    fetchUsers: async () => {
      set({ loading: true, error: null });
      try {
        const res = await axios.get(`${BASE_URL}/users`);
        set({ users: res.data });
      } catch (error) {
        let messageError =
          error.message.error || "Problema de red. Intenta más tarde.";

        set({ error: messageError });
      } finally {
        set({ loading: false });
      }
    },

    updateUser: async (data) => {
      const uid = useProfileStore.getState().uid;

      if (!uid) {
        set({ error: "Usuario no autenticado." });
        return { success: false, message: "No autenticado" };
      }

      set({ loading: true, error: null });

      try {
        const { token, refreshAccessToken } = useAuthStore.getState();
        let currentToken = token;

        if (!currentToken) {
          currentToken = await refreshAccessToken();
          if (!currentToken)
            return { success: false, message: "Token inválido" };
        }

        const res = await axios.patch(`${BASE_URL}/users/`, data, {
          headers: {
            Authorization: `Bearer ${currentToken}`,
          },
        });

        await useProfileStore.getState().profile();


        const message = res.data.message || "Datos actualizados correctamente.";
        set({ message });
        return { success: true, message };
        
      } catch (error) {
        const messageError =
          error?.response?.data?.error || "Error inesperado al actualizar.";
        return { success: false, message: messageError };
      } finally {
        set({ loading: false });
      }
    },
  }))
);
