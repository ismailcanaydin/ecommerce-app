import React from 'react'
import './styles.css'
import { BrowserRouter, Link, Outlet, Route, Routes } from 'react-router-dom'
import { Box } from '@chakra-ui/react'
import Home from './Home'
import Orders from './Orders'
import AdminProducts from './Products'
import ProtectedRouteAdmin from './ProtectedRoute'

function Admin() {
    return (
        <div>
            <nav>
                <ul className='admin-menu'>
                    <li>
                        <Link to={"/admin/home"}>Home</Link>
                    </li>
                    <li>
                        <Link to="/admin/orders">Orders</Link>
                    </li>
                    <li>
                        <Link to={'/admin/products'}>Products</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </div>
    )
}

export default Admin