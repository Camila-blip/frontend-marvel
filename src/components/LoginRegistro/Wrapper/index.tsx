import { ChildrenType } from "types";
import * as S from "./style";
import { LogoPontua } from "assets/icons";
import PredioLogin from "assets/images/PredioLogin.png";

export default function Wrapper({ children }: ChildrenType) {
    return (
        <S.Wrapper>
            <S.Flex>
                <S.LogoPontua>
                    <LogoPontua />
                </S.LogoPontua>
                <S.Container>
                    <div>
                        <S.PredioLogin src={PredioLogin} alt="" />
                    </div>
                    <S.Content>{children}</S.Content>
                </S.Container>
            </S.Flex>
        </S.Wrapper>
    );
}
