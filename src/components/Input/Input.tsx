import React, { InputHTMLAttributes, useId } from "react";
import * as S from "./style";
import { HelperText } from "components";

type InputType = InputHTMLAttributes<HTMLInputElement> & {
    helperText?: string;
};

const Input = React.forwardRef<HTMLInputElement, InputType>(
    ({ type = "text", name = "", helperText = "", ...props }, ref) => {
        const inputId = useId();
        const hasError = helperText.length > 0;
        return (
            <S.Container>
                <S.Input
                    ref={ref}
                    type={type}
                    id={inputId}
                    name={name}
                    hasError={hasError}
                    {...props}
                />

                {hasError && <HelperText helperText={helperText} />}
            </S.Container>
        );
    }
);

export default Input;
