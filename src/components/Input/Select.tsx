import React, { SelectHTMLAttributes, useId } from "react";
import * as S from "./style";

type SelectType = SelectHTMLAttributes<HTMLSelectElement>;

const Select = React.forwardRef<HTMLSelectElement, SelectType>(
    ({ name = "", children, ...props }, ref) => {
        const inputId = useId();

        return (
            <S.Select ref={ref} id={inputId} name={name} {...props}>
                {children}
            </S.Select>
        );
    }
);

export default Select;
