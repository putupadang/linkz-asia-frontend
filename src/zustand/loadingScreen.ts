import { create } from "zustand";

interface LoadingScreenState {
  showLoadingScreen: boolean;
  setShowLoadingScreen: (value: boolean) => void;
}

const useLoadingScreen = create<LoadingScreenState>((set) => ({
  showLoadingScreen: false,
  setShowLoadingScreen: (value: boolean) => set({ showLoadingScreen: value }),
}));

export default useLoadingScreen;
