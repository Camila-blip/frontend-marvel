import styled, { css } from "styled-components";

const padding = "20px";
export const Aside = styled.aside`
    height: 100vh;
    width: 256px;
    background-color: ${(props) => props.theme.white};
    box-shadow: 6px 0 18px 0 #0000000f;
`;

export const Logo = styled.div`
    padding: ${padding} ${padding} 10px ${padding};
    height: 60px;
`;
export const Content = styled.div`
    border-top: 1px solid #ebeff2;

    border-bottom: 1px solid #ebeff2;
    ul {
        list-style: none;
        margin: 0;
        padding: ${padding};
        display: flex;
        width: 100%;
        flex-direction: column;
        gap: 1em;
        &:hover {
            cursor: pointer;
        }
    }
`;

export const ListHeader = styled.li<{ active?: boolean }>`
    display: flex;
    gap: 1em;
    align-items: center;
    font-size: 0.9rem;
    font-weight: 500;
    ${({ active }) =>
        active &&
        css`
            color: ${(props) => props.theme.secondaryDarkOrange};
            svg {
                path {
                    stroke: ${(props) => props.theme.secondaryDarkOrange};
                }
            }
        `}
    &:hover {
        color: ${(props) => props.theme.secondaryDarkOrange};
        svg {
            path {
                stroke: ${(props) => props.theme.secondaryDarkOrange};
            }
        }
    }
`;
export const Title = styled.span`
    margin-top: 5px;
`;
export const Exit = styled.div`
    padding: ${padding};
    display: flex;
    gap: 1em;
    align-items: center;
    &:hover {
        cursor: pointer;
        color: ${(props) => props.theme.secondaryDarkOrange};
        svg {
            path {
                stroke: ${(props) => props.theme.secondaryDarkOrange};
            }
        }
    }
`;
