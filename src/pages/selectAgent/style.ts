import styled from "styled-components";

import Select from "react-select";

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    grid-gap: 20px;
`;

export const Padding = styled.div`
    margin-top: 0.8em;
    display: flex;
    flex-direction: column;
    grid-gap: 1.5em;
`;

export const DivSelect = styled.div`
    display: flex;
    align-items: center;
    gap: 0.8em;

    img {
        width: 24px;
        height: 24px;
        border-radius: 50%;
    }
`;

export const ContentSelect = styled(Select)`
    width: 98%;
    font-family: Inter Variable;
    font-weight: 500;
    color-scheme: #101828;
    div {
        border: none !important;
    }
`;

export const Selected = styled.div`
    display: flex;
    padding: 10px 20px;
    width: 100%;
`;

export const Active = styled.div`
    padding: 10px 0;
    width: 100%;
    background-color: #f9fafb;
    display: flex;
    align-items: center;
    justify-content: space-between;
    svg {
        color: ${(props) => props.theme.primaryDarkBlue};
        margin-right: 0.8em;
    }
`;
export const DefaultValue = styled.div`
    display: flex;
    align-items: center;
    gap: 0.6em;
    svg {
        width: 20px;
    }
`;
export const ContentButton = styled.div`
    display: flex;
    width: 100%;
    justify-content: end;
    button {
        width: 88px;
    }
`;
