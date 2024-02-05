import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    width: 100%;
    grid-gap: 5px;
    align-items: center;
    justify-content: space-around;
    border: 1px solid #b7b7b7;
    border-radius: 10px;
    position: relative;
    &:focus-within {
        border: 1px solid #293d71;
        svg {
            color: #293d71 !important;
        }
    }
`;

export const HelperText = styled.div`
    color: ${(props) => props.theme.secondaryDarkOrange};
    font-size: 0.8rem;
    display: flex;
    align-items: center;
    position: absolute;
    bottom: -1.8em;
    left: 0;
`;

export const Input = styled.input`
    padding: 12px 8px;
    font-size: 1rem;
    height: 57px;
    font-weight: 700;
    color: #293d71;
    border: none;
    outline: none;
    background: transparent;
`;

export const Select = styled.select`
    border: 1px solid ${(props) => props.theme.primaryColorLight};
    border-radius: 4px;
    outline: none;
    padding: 12px 8px;
    font-size: 14px;
    &:focus {
        border: 1px solid ${(props) => props.theme.primaryColor};
    }
`;

export const SVG = styled.div`
    display: flex;
    svg {
        color: #293d71;
    }
`;
