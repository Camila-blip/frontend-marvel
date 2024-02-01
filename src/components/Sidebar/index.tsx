import { LogoPontuaBlue, Exit } from "assets/icons";
import * as S from "./style";
import { ReactElement } from "react";
import { ListaAside } from "./aside";
import { SidebarType } from "types";

export default function Sidebar(): ReactElement {
    return (
        <S.Aside>
            <S.Logo>
                <LogoPontuaBlue />
            </S.Logo>
            <S.Content>
                <ul>
                    {ListaAside.map((item: SidebarType, index: number) => (
                        <li key={index}>
                            {item.icon} <S.Title>{item.title}</S.Title>
                        </li>
                    ))}
                </ul>
            </S.Content>
            <S.Exit>
                <Exit />
                <S.Title>Sair</S.Title>
            </S.Exit>
        </S.Aside>
    );
}
