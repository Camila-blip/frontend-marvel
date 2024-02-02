import { Sidebar } from "components";
import { Outlet } from "react-router-dom";
import * as S from "./style";

export default function Layout() {
    return (
        <S.Wrapper>
            <Sidebar />
            <S.ContainerOutlet>
                <Outlet />
            </S.ContainerOutlet>
        </S.Wrapper>
    );
}
