import { AiFillWarning } from "react-icons/ai";
import * as S from "./style";
import { ReactElement } from "react";

type HelperType = {
    helperText?: string;
};

export default function HelperText({ helperText }: HelperType): ReactElement {
    return (
        <S.HelperText>
            <AiFillWarning size={15} />
            {helperText}
        </S.HelperText>
    );
}
