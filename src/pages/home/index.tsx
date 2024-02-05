import { Header, InputMain, Pagination } from "components";
import ContentHome from "./ContentHome";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import * as S from "./style";
import { useMarvelQuery } from "hooks/useMarvelQuery";
import { useStore } from "contexts/Marvel.context";

export default function Home() {
    const [search, setSearch] = useState("");

    const { refetchListMarvel, listMarvel, isLoadingListMarvel } =
        useMarvelQuery();

    const { setSearchAgent } = useStore();

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
