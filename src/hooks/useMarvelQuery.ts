import { useQuery } from "react-query";
import { useStore } from "contexts/Marvel.context";

export function useMarvelQuery() {
    const { searchAgent, offset, limit, enable } = useStore();

    const {
        data: listMarvel,
        refetch: refetchListMarvel,
        isFetching: isLoadingListMarvel,
    } = useQuery(
        ["listMarvel"],
        async () => {
            let url = `${process.env.REACT_APP_BASE_URL}/characters?offset=${offset}&limit=${limit}&apikey=${process.env.REACT_APP_PUBLIC_KEY}`;

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

    return { listMarvel, refetchListMarvel, isLoadingListMarvel };
}
