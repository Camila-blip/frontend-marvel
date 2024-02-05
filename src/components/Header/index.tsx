import { ReactElement } from "react";
import * as S from "./style";
type HeaderType = {
    children?: ReactElement;
};
export default function Header({ children }: HeaderType): ReactElement {
    return <S.Header>{children}</S.Header>;
}
