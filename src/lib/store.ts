import { create } from "zustand";

interface item {
  name: string;
  description: string;
  owner: string;
  email: string;
}

interface storeState {
  isLoggedIn: boolean;
  items: item[];
}

const initialState: storeState = {
  isLoggedIn: false,
  items: [
    {
      name: "name 1",
      description: "description with many words",
      owner: "the owner",
      email: "email@email.com",
    },
    {
      name: "name 2",
      description: "description with few words",
      owner: "a guy",
      email: "other@email.com",
    },
    {
      name: "name 2",
      description:
        "description with few words description with few wordsdescription with few words description with few words description with few words description with few wordsption with few wordsdescription with few words description with few words description with few words description with few wordsption with few wordsdescription with few words description with few words description with few words description with few wordsption with few wordsdescription with few words description with few words description with few words description with few words",
      owner: "a guy",
      email: "other@email.com",
    },
    {
      name: "name 2",
      description: "description with few words",
      owner: "a guy",
      email: "other@email.com",
    },
    {
      name: "name 2",
      description: "description with few words",
      owner: "a guy",
      email: "other@email.com",
    },
    {
      name: "name 2",
      description:
        "description with few words description with few wordsdescription with few wordsdescription with few wordsdescription with few wordsdescription with few words description with few wordsdescription with few wordsdescription with few words description with few words description with few words",
      owner: "a guy",
      email: "other@email.com",
    },
    {
      name: "name 2",
      description: "description with few words",
      owner: "a guy",
      email: "other@email.com",
    },
    {
      name: "name 2",
      description: "description with few words",
      owner: "a guy",
      email: "other@email.com",
    },
    {
      name: "name 2",
      description: "description with few words",
      owner: "a guy",
      email: "other@email.com",
    },
  ],
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
