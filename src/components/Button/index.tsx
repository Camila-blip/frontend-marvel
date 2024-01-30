import { ButtonHTMLAttributes, ReactNode } from "react";
import * as S from "./style";

type ButtonType = ButtonHTMLAttributes<HTMLButtonElement> & {
    text: string;
    children?: ReactNode;
    color?: string;
    margin?: string;
};

export default function Button({
    text,
    children,
    color,
    margin,
    ...props
}: ButtonType) {
    return (
        <div>
            <S.Button color={color} margin={margin} {...props}>
                {text}
                {children}
            </S.Button>
        </div>
    );
}
