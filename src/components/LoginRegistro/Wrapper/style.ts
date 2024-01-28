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
    align-items: center;
    gap: 3em;
`;
export const LogoPontua = styled.div``;
export const PredioLogin = styled.img``;

export const Content = styled.div`
    background-color: ${(props) => props.theme.white};
    width: 380px;
    height: 433px;
    border-radius: 28px;
    padding: 1em 2em;
`;
export const Flex = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1em;
`;
