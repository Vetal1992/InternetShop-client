import React, { useContext } from "react";
import { Routes, Route, Navigate } from 'react-router-dom'
import { Context } from "../index.js";
import { authRouts, publickRoutes } from "../router.js";
import { SHOP_ROUTE } from "../utils/consts.js";

const AppRouter = () => {
    const {user} = useContext(Context)
    
    return (
        <>
            <Routes >
                {user.isAuth && authRouts.map(({ path, Component }) =>
                    <Route key={path} path={path} element={<Component />} exact />
                )}
                {publickRoutes.map(({ path, Component }) =>
                    <Route key={path} path={path} element={<Component />} exact />
                )}
                <Route  element={<Navigate to={SHOP_ROUTE} />} />
            </Routes >
        </>
    )
}

export default AppRouter;