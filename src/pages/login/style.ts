import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1.5fr 1fr;
`;
export const LogoPontua = styled.div``;
export const PredioLogin = styled.img``;
export const Span = styled.div`
    width: 100%;
    color: ${(props) => props.theme.secondaryDarkOrange};
    display: flex;
    justify-content: flex-end;
    align-items: center;
    font-size: 0.7em;
    span {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5em;
        &:hover {
            cursor: pointer;
        }
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    grid-gap: 20px;
`;

export const Padding = styled.div`
    display: flex;
    flex-direction: column;
    grid-gap: 1.5em;
`;

export const Teste = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid #b7b7b7;
    border-radius: 10px;
`;
