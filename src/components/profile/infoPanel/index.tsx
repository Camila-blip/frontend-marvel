import * as S from "./style";

export default function InfoPanel({ activeTab, perfilSelected, tabs }: any) {
    const filteredTab = tabs[activeTab].toLowerCase();
    return (
        <S.Ul>
            {perfilSelected[filteredTab]?.items?.map(
                (item: any, index: number) => (
                    <li key={index}>{item.name}</li>
                )
            )}
        </S.Ul>
    );
}
