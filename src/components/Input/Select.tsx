import React, { SelectHTMLAttributes, useId } from "react";
import * as S from "./style";

type SelectType = SelectHTMLAttributes<HTMLSelectElement>;

const Select = React.forwardRef<HTMLSelectElement, SelectType>(
    ({ name = "", ...props }, ref) => {
        const inputId = useId();

        return (
            <S.Select ref={ref} id={inputId} name={name} {...props}>
                <option value="in progress">Selecione um agente</option>
            </S.Select>
        );
    }
);

export default Select;
