import { ThemeProvider } from "styled-components";
import MainRoutes from "routes";
import theme from "styles/themes/colors";
import GlobalStyle from "styles";
import MarvelProvider from "contexts/Marvel.context";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { QueryClient, QueryClientProvider } from "react-query";
export default function App() {
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                refetchOnWindowFocus: false,
            },
        },
    });
    return (
        <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={theme}>
                <MarvelProvider>
                    <GlobalStyle />
                    <ToastContainer autoClose={1000} />
                    <MainRoutes />
                </MarvelProvider>
            </ThemeProvider>
        </QueryClientProvider>
    );
}
