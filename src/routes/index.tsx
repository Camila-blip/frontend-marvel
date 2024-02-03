import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "pages/login";
import Layout from "components/layout";
import PrivateRoute from "./PrivateRoute";
import Home from "pages/home";
import { ReactElement } from "react";
import RecoverPassword from "pages/recoverPassword";
import SuccessRecoverPassword from "pages/successRecoverPassword";
import SelectAgent from "pages/selectAgent";
import Profile from "pages/profile";

export default function MainRoutes(): ReactElement {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<Login />} />
                <Route path="recoverPassword" element={<RecoverPassword />} />
                <Route
                    path="successRecoverPassword"
                    element={<SuccessRecoverPassword />}
                />
                <Route path="selectAgent" element={<SelectAgent />} />
                <Route element={<Layout />}>
                    <Route path="/home" element={<Home />} />

                    <Route path="home" element={<Home />} />
                    <Route path="profile" element={<Profile />} />

                    {/* <Route
                        path="/home"
                        element={
                            <PrivateRoute>
                                <Home />
                            </PrivateRoute>
                        }
                    /> */}
                </Route>

                {/* <Route path="*" element={<NotFound />} /> */}
            </Routes>
        </Router>
    );
}
