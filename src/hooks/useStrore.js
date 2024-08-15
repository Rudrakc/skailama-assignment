import { create } from "zustand";

const useStore = create((set) => ({
  user: {
    name: "Rudra Chuahan",
    username: "rudra",
    email: "rudra@gmail.com",
  },
  setUser: (User) => {
    console.log("Hii in store", User);
    set((state) => {
      // Update the state
      const newState = { ...state, user: User };

      // Log the updated state
      console.log("State after update:", newState);

      return newState;
    });
  },
}));

export default useStore;
