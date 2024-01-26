import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children }: any) {
    const storedIsAuthenticated = localStorage.getItem("isAuthenticated");

    if (storedIsAuthenticated) {
        return children;
    }
    return <Navigate to="/login" replace />;
}
