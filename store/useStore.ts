import { create } from 'zustand';

interface AppState {
  selectedId: string | null;
  setSelectedId: (id: string) => void;
}

export const useStore = create<AppState>((set) => ({
  selectedId: null,
  setSelectedId: (id) => set({ selectedId: id }),
}));
