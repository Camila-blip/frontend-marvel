import styled from "styled-components";
export const WrapperHome = styled.div`
    display: flex;
    gap: 0.5em;
    flex-wrap: wrap;
`;

export const Search = styled.div`
    display: flex;
    align-items: center;
    padding-left: 20px;
    svg {
        width: 20px;
        height: 20px;
        color: ${(props) => props.theme.primaryLigthBlue};

        &:hover {
            transform: scale(1.1);
            cursor: pointer;
        }
    }
    input {
        font-size: 0.7rem;
        font-weight: 500;
    }
`;

export const Container = styled.div`
    padding: 20px;
    gap: 0.5em;
    margin-top: 4em;

    display: flex;
    flex-wrap: wrap;
`;

export const ContentMarvel = styled.div`
    background-color: ${(props) => props.theme.ligthGray};
    border-radius: 15px;
    padding: 10px;
    display: flex;
    gap: 0.8em;
    height: 160px;
    overflow: auto;
    @media (min-width: 900px) {
        flex: 1 0 23%;
    }
    img {
        width: 84px;
        height: 138px;
        border-radius: 9px;
    }
    h5 {
        font-size: 1rem;
        margin: 0;
    }
    span {
        font-size: 0.75rem;
        font-weight: 300;
        line-height: 1.1;
        display: inline-block;
        &:hover {
            cursor: pointer;
            text-decoration: underline;
        }
    }
`;

export const Description = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.3em;
`;
