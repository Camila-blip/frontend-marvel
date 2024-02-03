import { Button, InputMain, MainTitle, Wrapper } from "components";
import * as S from "./style";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { MarvelContent } from "contexts/Marvel.context";
import { BsCheck2 } from "react-icons/bs";
import { BiUser } from "react-icons/bi";

export default function SelectAgent() {
    const { GetSelectAgentMarvel, setPerfilSelected } =
        useContext(MarvelContent);
    const [selectedOption, setSelectedOption] = useState<any>({
        value: "",
        label: (
            <S.DefaultValue>
                <BiUser /> Selecione um agente
            </S.DefaultValue>
        ),
    });
    const handleChange = (selected: any) => {
        setSelectedOption(selected);
    };
    const [dataAgents, setDataAgents] = useState<any>([]);
    useEffect(() => {
        (async () => {
            const { results } = await GetSelectAgentMarvel();
            const defaultOption = {
                value: "",
                label: "Selecione um agente",
            };
            setDataAgents([
                defaultOption,
                ...results.map((item: any) => ({
                    value: item,
                    label: (
                        <S.DivSelect>
                            <img
                                src={`${item?.thumbnail.path}.${item?.thumbnail.extension}`}
                                alt={item.name}
                            />{" "}
                            {item.name}
                        </S.DivSelect>
                    ),
                })),
            ]);
        })();
    }, []);

    const router = useNavigate();

    const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setPerfilSelected(selectedOption.value);
        router("/profile");
    };

    const customOptionLabel = ({ label, innerProps, isSelected }: any) => (
        <S.Selected {...innerProps}>
            {isSelected && (
                <S.Active>
                    {label} <BsCheck2 />
                </S.Active>
            )}
            <div>{!isSelected && label}</div>
        </S.Selected>
    );
    return (
        <Wrapper height="319px">
            <MainTitle.Title
                name="Selecione o seu agente mais legal"
                subName="."
            />
            <MainTitle.SubTitle name="Tenha a visão completa do seu agente." />
            <S.Form onSubmit={submitForm}>
                <S.Padding>
                    <InputMain.Container>
                        <S.ContentSelect
                            options={dataAgents}
                            value={selectedOption}
                            onChange={handleChange}
                            components={{ Option: customOptionLabel }}
                            isSearchable
                        />
                    </InputMain.Container>
                    <S.ContentButton>
                        <Button type="submit" text="Entrar" height="48px" />
                    </S.ContentButton>
                </S.Padding>
            </S.Form>
        </Wrapper>
    );
}
