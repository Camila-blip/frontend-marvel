import * as S from "./style";
import { LogoPontua } from "assets/icons";
import PredioLogin from "assets/images/PredioLogin.png";
import { ReactNode } from "react";

type WrapperType = {
    children: ReactNode;
    height?: string;
};

export default function Wrapper({ children, height }: WrapperType) {
    return (
        <S.Wrapper>
            <S.Flex>
                <S.LogoPontua>
                    <LogoPontua />
                </S.LogoPontua>
                <S.Container>
                    <S.PredioLogin src={PredioLogin} alt="" />

                    <S.Content height={height}>{children}</S.Content>
                </S.Container>
            </S.Flex>
        </S.Wrapper>
    );
}
