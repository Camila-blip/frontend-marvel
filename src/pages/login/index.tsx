import { InputMain, MainTitle, Wrapper } from "components";
import { ReactElement } from "react";
import * as S from "./style";
import { useForm } from "react-hook-form";
import { LoginSchema } from "schemas";
import { DataProps } from "types";
import { zodResolver } from "@hookform/resolvers/zod";

export default function Login(): ReactElement {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<DataProps<typeof LoginSchema>>({
        mode: "onBlur",
        resolver: zodResolver(LoginSchema),
    });

    const submitForm = async (data: any) => {
        console.log(data);
    };
    return (
        <Wrapper>
            <MainTitle.Title name="Bem-vindo" subName="." />
            <MainTitle.SubTitle name="Informe as suas credenciais de acesso ao portal" />
            <S.Form onSubmit={handleSubmit(submitForm)}>
                <S.Padding>
                    <InputMain.Text
                        {...register("email")}
                        type="text"
                        name="email"
                        placeholder="Type your e-mail"
                        autoComplete="email"
                        helperText={errors?.email?.message}
                    />
                    <InputMain.Text
                        {...register("password")}
                        type={"password"}
                        name="password"
                        placeholder="Informe sua senha"
                        autoComplete="current-password"
                        helperText={errors?.password?.message}
                    />
                </S.Padding>
            </S.Form>
        </Wrapper>
    );
}
