import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "pages/login";
import Layout from "components/layout";
import PrivateRoute from "./PrivateRoute";
import Register from "pages/register";

// import ConfirmMail from "pages/confirmemail";
// import NotFound from "pages/notfound";

import Home from "pages/home";

export default function MainRoutes() {
    return (
        <Router>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Login />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    {/* <Route
                        path="/confirm-email/:token"
                        element={<ConfirmMail />}
                    /> */}

                    <Route
                        path="/home"
                        element={
                            <PrivateRoute>
                                <Home />
                            </PrivateRoute>
                        }
                    />
                </Route>
                {/* <Route path="*" element={<NotFound />} /> */}
            </Routes>
        </Router>
    );
}
