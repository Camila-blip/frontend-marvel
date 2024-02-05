import styled from "styled-components";

export const WrapperOverview = styled.div`
    display: flex;
    gap: 2em;
    box-shadow: 0px 6px 18px 0px #0000000f;
    margin-top: 2em;
    border-radius: 15px;
    padding: 2em 2em 4em 2em;
    max-width: 95%;
`;
export const Title = styled.h1`
    font-size: 1.5rem;
    color: ${(props) => props.theme.primaryBlue};
    margin: 0;
`;
export const Description = styled.span`
    color: #717171;
    font-size: 1rem;
    font-weight: 600;
`;
export const ImageOverview = styled.div`
    img {
        width: 91px;
        height: 91px;
        object-fit: cover;
        border-radius: 50%;
    }
`;

export const ContentOverview = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.7em;
`;
