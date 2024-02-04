import { Header, InfoPanel, Overview } from "components";
import * as S from "./style";
import { useContext, useState } from "react";
import { MarvelContent } from "contexts/Marvel.context";

export default function Profile() {
    const [activeTab, setActiveTab] = useState<number>(0);

    const handleTabClick = (index: number) => {
        setActiveTab(index);
    };

    const { perfilSelected } = useContext(MarvelContent);

    const TabsButton = ["Visão Geral", "Teams", "Powers", "Species", "Authors"];

    return (
        <>
            <Header />
            <S.Container>
                <S.Title>
                    <h1>
                        Perfil<strong>/</strong>
                    </h1>
                    <span>{perfilSelected?.name}</span>
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
                        name={perfilSelected?.name}
                        description={perfilSelected?.description}
                        urlImg={perfilSelected?.thumbnail?.path}
                        extension={perfilSelected?.thumbnail?.extension}
                    />
                ) : (
                    <InfoPanel />
                )}
            </S.Container>
        </>
    );
}
