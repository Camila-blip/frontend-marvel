import { ThemeProvider } from "styled-components";
import MainRoutes from "routes";
import theme from "styles/themes/colors";
import GlobalStyle from "styles";

export default function App() {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <MainRoutes />
        </ThemeProvider>
    );
}
