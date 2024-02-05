import { ReactElement } from "react";
import * as S from "./style";

type TitleType = {
    name: string;
    subName: string;
};
export default function Title({ name, subName }: TitleType): ReactElement {
    return (
        <S.Title>
            {name}
            <strong>{subName}</strong>
        </S.Title>
    );
}
