import { ChildrenType } from "types";
import * as S from "./style";
import { LogoPontua } from "assets/icons";
import PredioLogin from "assets/images/PredioLogin.png";

export default function Wrapper({ children }: ChildrenType) {
    return (
        <S.Wrapper>
            <S.Container>
                <div>
                    <S.LogoPontua>
                        <LogoPontua />
                    </S.LogoPontua>

                    <div>
                        <S.PredioLogin src={PredioLogin} alt="" />
                    </div>
                </div>
                <div>{children}</div>
            </S.Container>
        </S.Wrapper>
    );
}
