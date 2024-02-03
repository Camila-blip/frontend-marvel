import styled from "styled-components";
type WrapperType = {
    height?: string;
};
export const Wrapper = styled.div`
    height: 100vh;
    width: 100%;
    background-color: ${(props) => props.theme.primaryDarkBlue};

    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1em;
`;

export const Container = styled.div`
    display: grid;

    align-items: center;
    gap: 3em;
    @media (min-width: 1100px) {
        grid-template-columns: 1.5fr 1fr;
    }
`;
export const LogoPontua = styled.div``;
export const PredioLogin = styled.img`
    @media (max-width: 1100px) {
        display: none;
    }
`;

export const Content = styled.div<WrapperType>`
    background-color: ${(props) => props.theme.white};
    height: ${(props) => (props.height ? props.height : "440px")};
    border-radius: 28px;
    padding: 1em 2em;
    display: flex;
    flex-direction: column;
    gap: 0.3em;
    @media (min-width: 1100px) {
        width: 400px;
    }
    @media (max-width: 1100px) {
        max-width: 380px;
    }
`;
export const Flex = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1em;
`;
