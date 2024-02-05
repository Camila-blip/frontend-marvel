import { Button, InputMain, MainTitle, Wrapper } from "components";
import { ReactElement, useState } from "react";
import * as S from "./style";
import { useForm } from "react-hook-form";
import { LoginSchema } from "schemas";
import { DataProps } from "types";
import { zodResolver } from "@hookform/resolvers/zod";
import { BiAt } from "react-icons/bi";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { LoginAlt, ForgotPassword } from "assets/icons";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { useMarvelQuery } from "hooks/useMarvelQuery";
import { useStore } from "contexts/Marvel.context";
import { KJUR } from "jsrsasign";
export default function Login(): ReactElement {
    const router = useNavigate();
    const { setEnable } = useStore();
    const { refetchListMarvel } = useMarvelQuery();

    const [showPassword, setShowPassword] = useState<boolean>(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<DataProps<typeof LoginSchema>>({
        mode: "onBlur",
        resolver: zodResolver(LoginSchema),
    });

    const submitForm = async (data: any) => {
        const { email, password } = data;
        const emailCompare = "douglas@pontua.com.br";
        const passwordCompare = "Pontua@2024";

        if (email === emailCompare && password === passwordCompare) {
            const header = { alg: "HS256", typ: "JWT" };
            const payload = { usuario: emailCompare };
            const token = KJUR.jws.JWS.sign("HS256", header, payload, {
                utf8: process.env.REACT_APP_CHAVE_SECRETA!,
            });

            localStorage.setItem("token", token);

            setEnable(true);
            refetchListMarvel();
            router("/selectAgent");
        } else {
            toast.error("E-mail ou senha incorretos.");
            reset();
        }
    };
    return (
        <Wrapper>
            <MainTitle.Title name="Bem-vindo" subName="." />
            <MainTitle.SubTitle name="Informe as suas credenciais de acesso ao portal" />
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

                    <InputMain.Container>
                        <InputMain.Text
                            {...register("password")}
                            type={showPassword ? "text" : "password"}
                            name="password"
                            placeholder="Informe sua senha"
                            autoComplete="current-password"
                        />
                        <InputMain.Icon
                            handleFunctionIcon={() =>
                                setShowPassword(!showPassword)
                            }
                        >
                            {showPassword ? (
                                <FiEyeOff size={25} color="#B7B7B7" />
                            ) : (
                                <FiEye size={25} color="#B7B7B7" />
                            )}
                        </InputMain.Icon>
                        {errors?.password?.message && (
                            <InputMain.Error
                                helperText={errors?.password?.message}
                            />
                        )}
                    </InputMain.Container>

                    <Button text="entrar">
                        <LoginAlt />
                    </Button>
                    <S.Span onClick={() => router("/recoverPassword")}>
                        <span>
                            {" "}
                            <ForgotPassword /> Esqueceu a senha?
                        </span>
                    </S.Span>
                </S.Padding>
            </S.Form>
        </Wrapper>
    );
}
