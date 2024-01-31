import { ThemeProvider } from "styled-components";
import MainRoutes from "routes";
import theme from "styles/themes/colors";
import GlobalStyle from "styles";
import MarvelProvider from "contexts/Marvel.context";

export default function App() {
    return (
        <ThemeProvider theme={theme}>
            <MarvelProvider>
                <GlobalStyle />
                <MainRoutes />
            </MarvelProvider>
        </ThemeProvider>
    );
}
