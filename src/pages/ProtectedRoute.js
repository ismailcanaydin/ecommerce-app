import React from 'react'
import { Outlet, Navigate, redirect } from 'react-router-dom';

function ProtectedRoute() {
    let auth = { 'token': true };

    return (
        <>
            {auth.token ? <Outlet /> : <Navigate to="/" />}
        </>
    )


}

export default ProtectedRoute;