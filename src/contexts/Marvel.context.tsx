import { createContext, useEffect, useState } from "react";
import { ChildrenType } from "types";
import { useQuery } from "react-query";

export const MarvelContent = createContext({} as any);

export default function MarvelProvider({ children }: ChildrenType) {
    const [searchAgent, setSearchAgent] = useState<string>("");
    const [perfilSelected, setPerfilSelected] = useState<any>("");
    const [offset, setOffSet] = useState<number>(0);
    const [limit] = useState<number>(10);
    const [enable, setEnable] = useState<boolean>(false);
    const publicKey = process.env.REACT_APP_PUBLIC_KEY!;
    const baseUrl = process.env.REACT_APP_BASE_URL!;

    const [currentPage, setCurrentPage] = useState<number>(0);

    useEffect(() => {
        const calculate = currentPage * limit;
        console.log("currentPage", currentPage);

        setOffSet(() => calculate);
        refetchListMarvel();
    }, [currentPage]);

    const handlePageClick = (data: any) => {
        const selectedPage = data.selected;
        console.log("aqui");
        setCurrentPage(selectedPage);
    };

    const calculateNextPage = () => {
        const nextPage = currentPage + 1;
        if (nextPage < limit) {
            setCurrentPage(nextPage);
        }
    };

    const calculatePrevPage = () => {
        const prevPage = currentPage - 1;
        if (prevPage >= 0) {
            setCurrentPage(prevPage);
        }
    };

    const {
        data: listMarvel,
        refetch: refetchListMarvel,
        isFetching: isLoadingListMarvel,
    } = useQuery(
        ["listMarvel"],
        async () => {
            let url = `${baseUrl}/characters?offset=${offset}&limit=${limit}&apikey=${publicKey}`;

            if (searchAgent) {
                url += `&nameStartsWith=${searchAgent}`;
            }
            const response = await fetch(url);
            const responseData = await response.json();
            return responseData.data.results;
        },
        {
            enabled: enable,
        }
    );
    return (
        <MarvelContent.Provider
            value={{
                isLoadingListMarvel,
                refetchListMarvel,
                listMarvel,
                setPerfilSelected,
                perfilSelected,
                setEnable,
                setSearchAgent,
                setOffSet,
                limit,
                handlePageClick,
                calculateNextPage,
                calculatePrevPage,
            }}
        >
            {children}
        </MarvelContent.Provider>
    );
}
