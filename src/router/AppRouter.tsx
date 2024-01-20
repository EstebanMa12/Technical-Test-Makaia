

import { BrowserRouter, Route, Routes } from "react-router-dom";
// import PublicRoutes from "./PublicRouter";
import Login from "../pages/Login";
import Register from "../pages/Register";
import LoginWithPhone from "../pages/LoginWithPhone";

function AppRouter(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="Login" element={<Login/>} />
                <Route path="loginWithPhone" element={<LoginWithPhone/>} />
                <Route path="Register" element={<Register/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter;