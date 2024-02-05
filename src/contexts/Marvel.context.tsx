import { create } from "zustand";
interface State {
    currentPage: number;
    setCurrentPage: (page: number) => void;
    searchAgent: string;
    setSearchAgent: (agent: string) => void;
    perfilSelected: any;
    setPerfilSelected: (perfil: any) => void;
    offset: number;
    setOffSet: (offset: number) => void;
    limit: number;
    enable: boolean;
    setEnable: (enable: boolean) => void;
}

export const useStore = create<State>((set) => ({
    currentPage: 0,
    setCurrentPage: (page) => set({ currentPage: page }),
    searchAgent: "",
    setSearchAgent: (agent) => set({ searchAgent: agent }),
    perfilSelected: "",
    setPerfilSelected: (perfil) => set({ perfilSelected: perfil }),
    offset: 0,
    setOffSet: (offset) => set({ offset: offset }),
    limit: 10,
    enable: false,
    setEnable: (enable) => set({ enable: enable }),
}));
