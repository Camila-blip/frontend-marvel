import { ReactNode } from "react";
import * as S from "./style";

type ButtonType = {
    text: string;
    children: ReactNode;
};
export default function Button({ text, children }: ButtonType) {
    return (
        <div>
            <S.Button type="submit">
                {text}
                {children}
            </S.Button>
        </div>
    );
}
