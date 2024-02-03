import { createContext, useState } from "react";
import { ChildrenType } from "types";

export const MarvelContent = createContext({} as any);

export default function MarvelProvider({ children }: ChildrenType) {
    const [perfilSelected, setPerfilSelected] = useState<any>("");
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
    async function GetPerfilAgentMarvel() {
        try {
            const publicKey = process.env.REACT_APP_PUBLIC_KEY!;
            const privateKey = process.env.REACT_APP_PRIVATE_KEY!;
            const offset = 1;
            const limit = 10;
            const response = await fetch(
                `https://gateway.marvel.com:443/v1/public/comics/1009144/characters?apikey=${publicKey}`
            );
            const { data } = await response.json();

            console.log("GetPerfilAgentMarvel", data);
            return data;
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <MarvelContent.Provider
            value={{
                GetSelectAgentMarvel,
                GetPerfilAgentMarvel,
                setPerfilSelected,
                perfilSelected,
            }}
        >
            {children}
        </MarvelContent.Provider>
    );
}
