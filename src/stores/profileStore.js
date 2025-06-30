import { useAuthStore } from "./authStore";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import CryptoJS from "crypto-js";
import { axiosInstance } from "../api/axiosInstance";

const SECRET_KEY = import.meta.env.VITE_SECRET_KEY;

export const useProfileStore = create(
  persist(
    (set) => ({
      uid: null,
      name: null,
      middle_name: null,
      last_name: null,
      second_last_name: null,
      type_document: null,
      document_number: null,
      cellphone: null,
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
          const response = await axiosInstance.get(`/auth/profile`);

          set({
            uid: response.data.uid,
            name: response.data.name,
            middle_name: response.data.middle_name,
            last_name: response.data.last_name,
            second_last_name: response.data.second_last_name,
            type_document: response.data.type_document,
            document_number: response.data.document_number,
            cellphone: response.data.cellphone,
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
        name: state.name,
        middle_name: state.middle_name,
        last_name: state.last_name,
        second_last_name: state.second_last_name,
        type_document: state.type_document,
        document_number: state.document_number,
        cellphone: state.cellphone,
        email: state.email,
        role: state.role,
        uid: state.uid,
      }),
    }
  )
);
