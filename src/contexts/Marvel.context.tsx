import { createContext } from "react";
import { ChildrenType } from "types";

type MarvelType = {
    GetSelectAgentMarvel: any;
};
export const MarvelContent = createContext({} as MarvelType);

export default function MarvelProvider({ children }: ChildrenType) {
    async function GetSelectAgentMarvel() {
        try {
            const publicKey = process.env.REACT_APP_PUBLIC_KEY!;
            const privateKey = process.env.REACT_APP_PRIVATE_KEY!;
            const offset = 1;
            const limit = 7;
            const response = await fetch(
                `https://gateway.marvel.com:443/v1/public/characters?offset=${offset}&limit=${limit}&apikey=${publicKey}`
            );
            const { data } = await response.json();

            console.log(data);
            return data;
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <MarvelContent.Provider
            value={{
                GetSelectAgentMarvel,
            }}
        >
            {children}
        </MarvelContent.Provider>
    );
}
