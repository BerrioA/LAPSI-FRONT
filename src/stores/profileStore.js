import axios from "axios";
import { useAuthStore } from "./authStore";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import CryptoJS from "crypto-js";

const BASE_URL = import.meta.env.VITE_API_URL;
const SECRET_KEY = import.meta.env.VITE_SECRET_KEY;

export const useProfileStore = create(
  persist(
    (set) => ({
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
        } catch (error) {
          console.error("Error al obtener el perfil:", error);
          return null;
        }
      },
    }),
    {
      name: "profile-storage",
      storage: {
        getItem: (name) => {
          const encrypted = localStorage.getItem(name);
          if (!encrypted) return null;
          try {
            const bytes = CryptoJS.AES.decrypt(encrypted, SECRET_KEY);
            const decrypted = bytes.toString(CryptoJS.enc.Utf8);
            return JSON.parse(decrypted);
          } catch (e) {
            console.warn("Error al desencriptar perfil:", e);
            return null;
          }
        },
        setItem: (name, value) => {
          try {
            const json = JSON.stringify(value);
            const encrypted = CryptoJS.AES.encrypt(json, SECRET_KEY).toString();
            localStorage.setItem(name, encrypted);
          } catch (e) {
            console.warn("Error al encriptar perfil:", e);
          }
        },
        removeItem: (name) => localStorage.removeItem(name),
      },
      partialize: (state) => ({
        uid: state.uid,
        name: state.name,
        last_name: state.last_name,
        email: state.email,
        role: state.role,
      }),
    }
  )
);
