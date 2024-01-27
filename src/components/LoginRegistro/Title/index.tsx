import { ReactNode } from "react";

type TitleType = {
    name: string;
};
export default function Title({ name }: TitleType): ReactNode {
    return (
        <div>
            <h1>{name}</h1>
        </div>
    );
}
