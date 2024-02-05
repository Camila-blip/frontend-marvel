import React, { InputHTMLAttributes, useId } from "react";
import * as S from "./style";

type InputType = InputHTMLAttributes<HTMLInputElement>;

const Input = React.forwardRef<HTMLInputElement, InputType>(
    ({ type = "text", name = "", ...props }, ref) => {
        const inputId = useId();
        return (
            <S.Input
                ref={ref}
                type={type}
                id={inputId}
                name={name}
                {...props}
            />
        );
    }
);

export default Input;
