import { create } from "zustand";

interface SideMenuState {
  isSidebarOpen: boolean;
  setSidebarOpen: (value: boolean) => void;
}

export const useSideMenuStore = create<SideMenuState>((set) => ({
  isSidebarOpen: false,
  setSidebarOpen: (value: boolean) => set({ isSidebarOpen: value }),
}));
