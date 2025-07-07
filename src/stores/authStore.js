import axios from "axios";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { useProfileStore } from "./profileStore";
import { userStore } from "./userStore";

const BASE_URL = import.meta.env.VITE_API_URL;

export const useAuthStore = create(
  persist(
    (set) => ({
      token: null,
      isLoggedIn: false,
      loading: false,
      error: null,
      refreshToken: null,
      initialized: false,

      login: async ({ email, password }) => {
        set({ loading: true, error: null });

        try {
          const response = await axios.post(
            `${BASE_URL}/auth/login`,
            { email, password },
            { withCredentials: true }
          );

          if (response.status !== 200) {
            throw new Error("Error al iniciar sesión");
          }

          const chargeProfile = useProfileStore.getState().profile;
          await chargeProfile();

          const chargeUsers = userStore.getState().fetchUsers;
          await chargeUsers();

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
            throw new Error("Error al intentar realizar el registro");
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

          set({ token, isLoggedIn: true, initialized: true });

          return token;
        } catch (err) {
          set({
            error: err.response?.data?.message,
            isLoggedIn: false,
            token: null,
            initialized: true,
          });
          return null;
        }
      },

      logout: async () => {
        set({ loading: true, error: null });

        try {
          await axios.post(
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

          sessionStorage.removeItem("profile-storage");
          sessionStorage.removeItem("session-user");

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
    }),
    {
      name: "session-user",
      storage: {
        getItem: (key) => sessionStorage.getItem(key),
        setItem: (key, value) => sessionStorage.setItem(key, value),
        removeItem: (key) => sessionStorage.removeItem(key),
      },
      partialize: (state) => ({
        isLoggedIn: state.isLoggedIn,
      }),
    }
  )
);
