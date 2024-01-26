// import { Header, Footer } from "components";
import { Outlet } from "react-router-dom";
import * as S from "./style";

export default function Layout() {
    return (
        <S.Wrapper>
            {/* <Header /> */}
            <Outlet />
        </S.Wrapper>
    );
}
