import { Header, InputMain, Pagination } from "components";
import ContentHome from "./ContentHome";
import { useContext, useState } from "react";
import { MarvelContent } from "contexts/Marvel.context";
import { CiSearch } from "react-icons/ci";
import * as S from "./style";
export default function Home() {
    const [search, setSearch] = useState("");
    const {
        refetchListMarvel,
        setOffSet,
        setSearchAgent,
        listMarvel,
        isLoadingListMarvel,
    } = useContext(MarvelContent);

    function handleSearch() {
        refetchListMarvel();
    }

    return (
        <>
            <Header>
                <S.Search>
                    <CiSearch onClick={handleSearch} />

                    <InputMain.Text
                        placeholder="Busque um agente"
                        value={search}
                        onChange={(e) => {
                            setSearch(e.target.value);
                            setSearchAgent(e.target.value);
                        }}
                    />
                </S.Search>
            </Header>
            <S.WrapperHome>
                <ContentHome
                    listAgent={listMarvel}
                    isLoading={isLoadingListMarvel}
                />

                <Pagination />
            </S.WrapperHome>
        </>
    );
}
