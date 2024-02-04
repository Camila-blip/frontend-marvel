import styled from "styled-components";
import ReactPaginate from "react-paginate";

export const Paginate = styled(ReactPaginate)`
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    border-radius: 8px;
    .previous {
        margin-left: -2.5em;
        border: none;
        color: ${(props) => props.theme.primaryLigthBlue};
    }
    .next {
        color: ${(props) => props.theme.primaryLigthBlue};
    }
    .active {
        background-color: #f9fafb;
        color: ${(props) => props.theme.primaryBlueLigth};
    }
    border: 1px solid #d0d5dd;
    li {
        color: ${(props) => props.theme.primaryLigthBlue};
        border-left: 1px solid #d0d5dd;
        font-size: 0.8rem;
        padding: 10px 20px;
        font-weight: 500;

        a {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.5em;
        }
        &:hover {
            cursor: pointer;
            background-color: #f9fafb;
            color: ${(props) => props.theme.primaryBlueLigth};
        }
    }
`;

export const Container = styled.div`
    display: flex;
    border-top: 1px solid #ebeff2;
    width: 100%;
    justify-content: center;
`;
