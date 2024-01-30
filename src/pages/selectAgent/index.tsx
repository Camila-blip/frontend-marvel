import { InputMain, MainTitle, Wrapper } from "components";
import * as S from "./style";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { DataProps } from "types";
import { SelectAgentSchema } from "schemas";

export default function SelectAgent() {
    const router = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<DataProps<typeof SelectAgentSchema>>({
        mode: "onBlur",
        resolver: zodResolver(SelectAgentSchema),
    });

    const submitForm = async (data: any) => {
        console.log(data);
    };
    return (
        <Wrapper>
            <MainTitle.Title
                name="Selecione o seu agente mais legal"
                subName="."
            />
            <MainTitle.SubTitle name="Tenha a visão completa do seu agente." />
            <S.Form onSubmit={handleSubmit(submitForm)}>
                <S.Padding>
                    <InputMain.Container>
                        <InputMain.Select></InputMain.Select>
                    </InputMain.Container>
                </S.Padding>
            </S.Form>
        </Wrapper>
    );
}
