import { InputMain, MainTitle, Wrapper } from "components";
import * as S from "./style";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { DataProps } from "types";
import { SelectAgentSchema } from "schemas";
import { useContext, useEffect, useState } from "react";
import { MarvelContent } from "contexts/Marvel.context";

export default function SelectAgent() {
    const { GetSelectAgentMarvel } = useContext(MarvelContent);
    const [dataAgents, setDataAgents] = useState<[]>([]);
    useEffect(() => {
        (async () => {
            const { results } = await GetSelectAgentMarvel();
            setDataAgents(results);
            console.log("result", results);
        })();
    }, []);

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
                        {dataAgents &&
                            dataAgents.map((item: any) => (
                                <InputMain.Select key={item?.id}>
                                    {item?.name}
                                </InputMain.Select>
                            ))}
                    </InputMain.Container>
                </S.Padding>
            </S.Form>
        </Wrapper>
    );
}
