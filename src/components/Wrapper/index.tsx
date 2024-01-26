import { ChildrenType } from "types";
import * as S from "./style";

export default function Wrapper({ children }: ChildrenType) {
    return <S.Wrapper>{children}</S.Wrapper>;
}
