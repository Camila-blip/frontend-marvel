import { Wrapper } from "components";
import * as S from "./style";
import PredioLogin from "../../assets/images/PredioLogin.png";

export default function Login() {
    return (
        <Wrapper>
            <S.Container>
                <div>
                    <S.LogoPontua src={PredioLogin} alt="" />
                </div>
                <div>
                    <div>
                        <S.PredioLogin src={PredioLogin} alt="" />
                    </div>
                    <div>
                        <h3>Bemvindo</h3>
                    </div>
                </div>
            </S.Container>
        </Wrapper>
    );
}
