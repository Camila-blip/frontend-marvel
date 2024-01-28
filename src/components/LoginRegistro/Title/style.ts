import styled from "styled-components";

export const Wrapper = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100vh;
`;

export const Title = styled.h1`
    color: ${(props) => props.theme.primaryBlue};
    font-weight: 700;
    font-size: 2.25rem;
    margin: 0.5em 0 0.2em 0;
    strong {
        color: ${(props) => props.theme.secondaryOrange};
    }
`;

export const SubTitle = styled.span`
    font-size: 1rem;
    color: ${(props) => props.theme.darkGray};
`;
