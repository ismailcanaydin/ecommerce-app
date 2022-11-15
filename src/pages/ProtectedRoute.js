import React from 'react'
import {  Outlet, Navigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

function ProtectedRoute({ component: Component, ...rest }) {
    const { loggedIn } = useAuth();

    return loggedIn ? <Outlet /> : <Navigate to="/" />;
}

export default ProtectedRoute