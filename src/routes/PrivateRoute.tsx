import { KJUR } from "jsrsasign";
import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children }: any) {
    const token = localStorage.getItem("token");
    if (token) {
        const isValid = KJUR.jws.JWS.verify(
            token,
            process.env.REACT_APP_CHAVE_SECRETA!,
            ["HS256"]
        );
        console.log("aqui isValid", isValid);
        if (isValid) {
            return children;
        }
    }
    return <Navigate to="/login" replace />;
}
