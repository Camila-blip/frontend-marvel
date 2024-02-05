import { ReactElement } from "react";
import * as S from "./style";

type SubTitleType = {
    name: string;
};
export default function SubTitle({ name }: SubTitleType): ReactElement {
    return <S.SubTitle>{name}</S.SubTitle>;
}
