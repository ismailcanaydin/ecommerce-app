import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

function ProtectedRouteAdmin() {
    const { user } = useAuth();
    
    return (
        <>
            {user?.role !== "admin" && <Navigate to={"/"} replace />}
            
            <Outlet />
        </>
    )
}

export default ProtectedRouteAdmin