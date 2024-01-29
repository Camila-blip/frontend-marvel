import { ChildrenType } from "types";
import * as S from "./style";

export default function Container({ children }: ChildrenType) {
    return <S.Container>{children}</S.Container>;
}
