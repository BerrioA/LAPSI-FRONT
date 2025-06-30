import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { useProfileStore } from "./profileStore";
import { axiosInstance } from "../api/axiosInstance";

export const userStore = create(
  devtools((set) => ({
    users: [],
    loading: false,
    error: null,
    refreshToken: null,
    message: null,

    fetchUsers: async () => {
      set({ loading: true, error: null });
      try {
        const res = await axiosInstance.get(`/users`);
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
        const res = await axiosInstance.patch(`/users`, data);

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
