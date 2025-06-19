import { create } from "zustand";

export const useGlobalStore = create((set) => ({
  dark: false,
  roomId: null,

  getIdRoom: (id) => set({ roomId: id }),
}));
