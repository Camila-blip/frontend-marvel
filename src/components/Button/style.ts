import styled from "styled-components";

type ButtonType = {
    color?: string;
    margin?: string;
    height?: string;
};

export const Button = styled.button<ButtonType>`
    margin-top: ${(props) => props.margin && props.margin};
    border-radius: 10px;
    display: flex;
    background-color: ${(props) =>
        props.color ? props.color : props.theme.primaryBlue};
    width: 100%;
    height: ${(props) => (props.height ? props.height : "57px")};
    align-items: center;
    justify-content: center;
    gap: 0.5em;
    border: none;
    font-weight: 700;
    font-size: ${(props) => (props.height ? "1rem" : "1.5rem")};
    color: ${(props) => props.theme.white};
    &:hover {
        cursor: pointer;
    }
`;
