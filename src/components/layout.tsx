import { Sidebar } from "components";
import { Outlet } from "react-router-dom";
import * as S from "./style";

export default function Layout() {
    return (
        <S.Wrapper>
            <Sidebar />
            <Outlet />
        </S.Wrapper>
    );
}
