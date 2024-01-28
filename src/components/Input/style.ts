import styled, { css } from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    grid-gap: 5px;
`;

export const HelperText = styled.div`
    color: ${(props) => props.theme.red};
    font-size: 0.8rem;
    display: flex;
    align-items: center;
`;

export const Input = styled.input<{ hasError?: boolean }>`
    border: 1px solid #b7b7b7;
    border-radius: 10px;
    outline: none;
    padding: 12px 8px;
    font-size: 1rem;
    height: 57px;
    font-weight: 700;
    color: #293d71;
    &:focus {
        border: 1px solid #293d71;
    }
    ${({ hasError }) =>
        hasError &&
        css`
            border-color: ${(props) => props.theme.red};
        `}
`;

export const Select = styled.select<{ hasError?: boolean }>`
    border: 1px solid ${(props) => props.theme.primaryColorLight};
    border-radius: 4px;
    outline: none;
    padding: 12px 8px;
    font-size: 14px;
    &:focus {
        border: 1px solid ${(props) => props.theme.primaryColor};
    }
    ${({ hasError }) =>
        hasError &&
        css`
            border-color: ${(props) => props.theme.red};
        `}
`;

export const Svg = styled.div`
    background-color: ${(props) => props.theme.white};
`;

export const StyledFileInputContainer = styled.div`
    display: inline-block;
    position: relative;
    width: 100%;
`;

export const StyledFileInput = styled.input`
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0;
    height: 10em;
    width: 100%;
    cursor: pointer;
`;

export const StyledButton = styled.button`
    border: dashed 2px ${(props) => props.theme.primaryColor};
    border-radius: 10px;
    color: black;
    padding: 8px 16px;
    cursor: pointer;
    height: 10em;
    width: 100%;
    box-shadow: 0px 1px 10px 0px ${(props) => props.theme.primaryColor};
`;
