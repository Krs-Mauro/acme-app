import { create } from "zustand";

interface item {
  name: string;
  description: string;
}

interface storeState {
  isLoggedIn: boolean;
  items: item[];
}

const initialState: storeState = {
  isLoggedIn: false,
  items: [],
};

type storeActions = {
  toggleLogin: () => void;
  addItem: (item: item) => void;
  removeItem: (id: number) => void;
};

const useStore = create<storeState & storeActions>((set) => ({
  ...initialState,
  toggleLogin: () =>
    set((state: storeState) => ({ isLoggedIn: !state.isLoggedIn })),

  addItem: (item: item) =>
    set((state: storeState) => ({
      items: [...state.items, item],
    })),

  removeItem: (index: Number) =>
    set((state: storeState) => ({
      items: state.items.filter((_, i) => i !== index),
    })),
}));

export default useStore;
