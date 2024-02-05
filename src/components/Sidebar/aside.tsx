import { Home, Profile } from "assets/icons";
import { SidebarType } from "types";

export const ListaAside: Array<SidebarType> = [
    {
        title: "Home",
        icon: <Home />,
        url: "/home",
    },
    {
        title: "Perfil",
        icon: <Profile />,
        url: "/profile",
    },
];
