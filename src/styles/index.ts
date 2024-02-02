import { createGlobalStyle } from "styled-components";
import "@fontsource-variable/epilogue";
import "@fontsource-variable/inter";

const GlobalStyle = createGlobalStyle`

    html {
        height: 100%;
        box-sizing: border-box;
    }
    *, *:before, *:after {
        box-sizing: inherit;
    }

    body {
        background-color:  ${(props) => props.theme.white};
        margin: 0;
        font-family: 'Epilogue Variable', Inter Variable, sans-serif;
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
