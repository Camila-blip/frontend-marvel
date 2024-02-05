import { LogoPontuaBlue, Exit } from "assets/icons";
import * as S from "./style";
import { ReactElement } from "react";
import { ListaAside } from "./aside";
import { SidebarType } from "types";
import { useNavigate, useLocation } from "react-router-dom";

export default function Sidebar(): ReactElement {
    const route = useNavigate();
    const location = useLocation();
    function handleLogout() {
        localStorage.removeItem("token");
        route("/login");
    }
    return (
        <S.Aside>
            <S.Logo>
                <LogoPontuaBlue />
            </S.Logo>
            <S.Content>
                <ul>
                    {ListaAside.map((item: SidebarType, index: number) => (
                        <S.ListHeader
                            key={index}
                            active={location.pathname == item.url && true}
                            onClick={() => route(item.url)}
                        >
                            {item.icon} <S.Title>{item.title}</S.Title>
                        </S.ListHeader>
                    ))}
                </ul>
            </S.Content>
            <S.Exit onClick={handleLogout}>
                <Exit />
                <S.Title>Sair</S.Title>
            </S.Exit>
        </S.Aside>
    );
}
