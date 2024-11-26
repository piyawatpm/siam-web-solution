// app/store/useLogoStore.ts
import { create } from "zustand";

interface LogoState {
  isLogoCenter: boolean;
  setLogoCenter: (value: boolean) => void;
}

export const useLogoStore = create<LogoState>((set) => ({
  isLogoCenter: false,
  setLogoCenter: (value: boolean) => set({ isLogoCenter: value }),
}));
