import { ReactNode } from "react";
import * as S from "./style";

type IconType = {
    children: ReactNode;
    handleFunctionIcon?: () => void;
};
export default function Icon({ children, handleFunctionIcon }: IconType) {
    return <S.SVG onClick={handleFunctionIcon}>{children}</S.SVG>;
}
