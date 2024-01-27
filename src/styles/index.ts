import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Epilogue:wght@100;200;300;400;500;600;700&family=Inter:wght@100;200;300;400;500;600;700&display=swap');

    html {
        height: 100%;
        box-sizing: border-box;
    }
    *, *:before, *:after {
        box-sizing: inherit;
    }

    body {
        background-color:  ${(props) => props.theme.grayBackground};
        margin: 0;
        font-family: 'Epilogue', Inter;
        font-size: 100%;
        font-weight: 400;
        line-height: 1.5;
        color: ${(props) => props.theme.black};
        height: 100%;
    }

    #root {
        height: 100%;
    }

`;

export default GlobalStyle;
