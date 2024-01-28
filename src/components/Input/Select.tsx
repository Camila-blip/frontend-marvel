import React, { SelectHTMLAttributes, useId } from "react";
import * as S from "./style";
import { HelperText } from "components";

type SelectType = SelectHTMLAttributes<HTMLSelectElement> & {
    helperText?: string;
};

const Select = React.forwardRef<HTMLSelectElement, SelectType>(
    ({ name = "", helperText = "", ...props }, ref) => {
        const inputId = useId();
        const hasError = helperText.length > 0;
        return (
            <S.Container>
                <S.Select
                    ref={ref}
                    id={inputId}
                    name={name}
                    hasError={hasError}
                    {...props}
                >
                    <option value="in progress">Selecione um agente</option>
                </S.Select>

                {hasError && <HelperText helperText={helperText} />}
            </S.Container>
        );
    }
);

export default Select;
