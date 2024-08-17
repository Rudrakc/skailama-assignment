import { create } from "zustand";

const useStore = create((set) => ({
  user: null,
  setUser: (User) => {
    console.log("Hii in store", User);
    set((state) => {
      // Update the state
      const newState = { ...state, user: User };
      return newState;
    });
  },
}));

export default useStore;
