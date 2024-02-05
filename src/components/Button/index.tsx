import { ButtonHTMLAttributes, ReactNode } from "react";
import * as S from "./style";

type ButtonType = ButtonHTMLAttributes<HTMLButtonElement> & {
    text: string;
    children?: ReactNode;
    color?: string;
    margin?: string;
    height?: string;
};

export default function Button({
    text,
    children,
    color,
    margin,
    height,
    ...props
}: ButtonType) {
    return (
        <S.Button height={height} color={color} margin={margin} {...props}>
            {text}
            {children}
        </S.Button>
    );
}
