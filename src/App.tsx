import { ThemeProvider } from "styled-components";
import MainRoutes from "routes";
import theme from "styles/themes/colors";
import GlobalStyle from "styles";
import MarvelProvider from "contexts/Marvel.context";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
    return (
        <ThemeProvider theme={theme}>
            <MarvelProvider>
                <GlobalStyle />
                <ToastContainer autoClose={1000} />
                <MainRoutes />
            </MarvelProvider>
        </ThemeProvider>
    );
}
