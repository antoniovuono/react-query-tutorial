import { create } from "zustand";

interface IUserState {
    name: string;
    updateName: (name: string) => void;
}

const useUserStore = create<IUserState>((set) => ({
    name: "",
    updateName: (name: string) => set(() => ({ name })),
}));

export { useUserStore };
