import { create } from "zustand";
import axios from "axios";
import { devtools } from "zustand/middleware";
import { useProfileStore } from "./profileStore";

const BASE_URL = import.meta.env.VITE_API_URL;

export const useAuthStore = create(
  devtools((set) => ({
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

        const chargeProfile = useProfileStore.getState().profile;
        await chargeProfile();

        set({ token: response.data.token, isLoggedIn: true });
        return true;
      } catch (err) {
        set({ error: err.response?.data?.message });
        return false;
      } finally {
        set({ loading: false });
      }
    },

    register: async (data) => {
      const {
        name,
        middle_name,
        last_name,
        second_last_name,
        type_document,
        document_number,
        cellphone,
        email,
        password,
      } = data;
      set({ loading: true, error: null });

      try {
        const response = await axios.post(`${BASE_URL}/users`, {
          name,
          middle_name,
          last_name,
          second_last_name,
          type_document,
          document_number,
          cellphone,
          email,
          password,
        });

        if (response.status !== 201) {
          throw new Error("Error al intentar relizar el registro");
        }

        return true;
      } catch (err) {
        set({ error: err.response?.data?.error });
        return false;
      } finally {
        set({ loading: false });
      }
    },

    refreshAccessToken: async () => {
      try {
        const response = await axios.get(`${BASE_URL}/auth/refresh`, {
          withCredentials: true,
        });

        const { token } = response.data;

        set({ token, isLoggedIn: true });

        return token;
      } catch (err) {
        set({
          error: err.response?.data?.message,
          isLoggedIn: false,
          token: null,
        });
        return null;
      }
    },

    logout: async () => {
      set({ loading: true, error: null });
      console.log("Cerrar sesionn clickeado!");
      try {
        const response = await axios.post(
          `${BASE_URL}/auth/logout`,
          {},
          { withCredentials: true }
        );

        set({
          loading: false,
          isLoggedIn: false,
          token: null,
          refreshToken: null,
        });

        return true;
      } catch (err) {
        set({
          error: err.response?.data?.message,
          isLoggedIn: true,
          token: true,
        });
        return null;
      }
    },
  }))
);
