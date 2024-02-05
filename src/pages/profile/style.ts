import styled from "styled-components";

type TabButton = {
    active: boolean;
};
export const Container = styled.div`
    padding: 20px;
    margin-top: 4em;
`;

export const Title = styled.div`
    display: flex;
    align-items: center;
    gap: 0.2em;
    h1 {
        font-size: 1.5rem;
        color: ${(props) => props.theme.primaryBlue};
        margin: 0;
        strong {
            color: ${(props) => props.theme.secondaryOrange};
        }
    }
    span {
        font-size: 1.5rem;
        font-weight: 300;
        color: ${(props) => props.theme.darkGray};
    }
`;

export const TabsButton = styled.button<TabButton>`
    font-size: 0.8rem;
    color: ${(props) =>
        props.active ? props.theme.primaryBlue : props.theme.darkGray};
    font-weight: 500;
    border: 0;
    border-bottom: ${(props) =>
        props.active ? `2px solid ${props.theme.primaryBlue}` : "none"};

    background: transparent;
    padding: 10px;
    transition: 0.1s ease-in-out;
    &:hover {
        cursor: pointer;
        color: ${(props) => props.theme.primaryBlue};
        border-bottom: ${(props) => `2px solid ${props.theme.primaryBlue}`};
    }
`;

export const Tabs = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.8em;
    border-bottom: 1px solid #ebeff2;
    margin-top: 1em;
`;
