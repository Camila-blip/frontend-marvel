import styled from "styled-components";

export const Wrapper = styled.div`
    height: 100vh;
    width: 100%;
    background-color: ${(props) => props.theme.primaryDarkBlue};

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1.5fr 1fr;
`;
export const LogoPontua = styled.div``;
export const PredioLogin = styled.img`
    max-width: 614px;
`;
