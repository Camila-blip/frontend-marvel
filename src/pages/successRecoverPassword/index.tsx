import { Button, MainTitle, Wrapper } from "components";
import * as S from "./style";
import { useNavigate } from "react-router-dom";

export default function SuccessRecoverPassword() {
    const router = useNavigate();
    return (
        <Wrapper>
            <MainTitle.Title name="Tudo certo" subName=";)" />
            <MainTitle.SubTitle name="Foi enviado um e-mail para você com instruções de como redefinir a sua senha." />

            <S.Padding>
                <Button
                    text="voltar para o login"
                    margin="1em"
                    onClick={() => router("/login")}
                />
            </S.Padding>
        </Wrapper>
    );
}
