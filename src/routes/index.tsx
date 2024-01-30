import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "pages/login";
import Layout from "components/layout";
import PrivateRoute from "./PrivateRoute";
import Register from "pages/register";
import Home from "pages/home";
import { ReactElement } from "react";
import RecoverPassword from "pages/recoverPassword";
import SuccessRecoverPassword from "pages/successRecoverPassword";

export default function MainRoutes(): ReactElement {
    return (
        <Router>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Login />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route
                        path="recoverPassword"
                        element={<RecoverPassword />}
                    />
                    <Route
                        path="/home"
                        element={
                            <PrivateRoute>
                                <Home />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="successRecoverPassword"
                        element={<SuccessRecoverPassword />}
                    />
                </Route>

                {/* <Route path="*" element={<NotFound />} /> */}
            </Routes>
        </Router>
    );
}
