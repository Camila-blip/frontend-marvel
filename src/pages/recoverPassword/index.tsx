import { zodResolver } from "@hookform/resolvers/zod";
import { MainTitle, Wrapper, InputMain, Button } from "components";
import { useForm } from "react-hook-form";
import { BiAt } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { DataProps } from "types";
import * as S from "./style";
import { RecoverPasswordSchema } from "schemas";

export default function RecoverPassword() {
    const router = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<DataProps<typeof RecoverPasswordSchema>>({
        mode: "onBlur",
        resolver: zodResolver(RecoverPasswordSchema),
    });

    const submitForm = async (data: any) => {
        console.log(data);
        router("/successRecoverPassword");
    };
    return (
        <Wrapper>
            <MainTitle.Title name="Recuperar senha" subName="." />
            <MainTitle.SubTitle name="Informe o e-mail do seu cadastro. Nós estaremos realizando o envio de um link com as instruções para você redefinir a sua senha." />
            <S.Form onSubmit={handleSubmit(submitForm)}>
                <S.Padding>
                    <InputMain.Container>
                        <InputMain.Text
                            {...register("email")}
                            type="text"
                            name="email"
                            placeholder="Informe seu e-mail"
                            autoComplete="email"
                        />
                        <InputMain.Icon>
                            <BiAt size={25} color="#B7B7B7" />
                        </InputMain.Icon>
                        {errors?.email?.message && (
                            <InputMain.Error
                                helperText={errors?.email?.message}
                            />
                        )}
                    </InputMain.Container>
                    <Button type="submit" text="enviar link" color="#C3C3C3" />
                </S.Padding>
            </S.Form>
        </Wrapper>
    );
}
