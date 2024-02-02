import { Header, InfoPanel, Overview } from "components";
import * as S from "./style";
import { useContext, useEffect, useState } from "react";
import { MarvelContent } from "contexts/Marvel.context";

export default function Profile() {
    const [activeTab, setActiveTab] = useState<number>(0);

    const handleTabClick = (index: number) => {
        setActiveTab(index);
    };

    const { GetSelectAgentMarvel, GetPerfilAgentMarvel } =
        useContext(MarvelContent);
    const [dataAgents, setDataAgents] = useState<any>();
    useEffect(() => {
        (async () => {
            const { results } = await GetSelectAgentMarvel();
            setDataAgents(results[0]);
            console.log("result", results[0]);
            const teste = await GetPerfilAgentMarvel();
            console.log("teste", teste);
        })();
    }, []);

    const TabsButton = ["Visão Geral", "Teams", "Powers", "Species", "Authors"];

    return (
        <>
            <Header />
            <S.Container>
                <S.Title>
                    <h1>
                        Perfil<strong>/</strong>
                    </h1>
                    <span>{dataAgents?.name}</span>
                </S.Title>
                <S.Tabs>
                    {TabsButton.map((item, index) => (
                        <S.TabsButton
                            key={index}
                            active={index === activeTab}
                            onClick={() => handleTabClick(index)}
                        >
                            {item}
                        </S.TabsButton>
                    ))}
                </S.Tabs>
                {activeTab == 0 ? (
                    <Overview
                        name={dataAgents?.name}
                        description={dataAgents?.description}
                        urlImg={dataAgents?.thumbnail.path}
                        extension={dataAgents?.thumbnail.extension}
                    />
                ) : (
                    <InfoPanel />
                )}
            </S.Container>
        </>
    );
}
