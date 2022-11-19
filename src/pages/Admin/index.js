import React from 'react'
import './styles.css'
import { BrowserRouter, Link, Outlet, Route, Routes } from 'react-router-dom'
import { Box } from '@chakra-ui/react'
import Home from './Home'
import Products from './Products'
import Orders from './Orders'

function Admin() {
    return (
        <div>
            <nav>
                <ul className='admin-menu'>
                    <li>
                        <Link to={"/admin/home"}>Home</Link>
                    </li>
                    <li>
                        <Link to={"/admin/orders"}>Orders</Link>
                    </li>
                    <li>
                        <Link to={'/admin/products'}>Products</Link>
                    </li>
                </ul>
            </nav>

            <Box mt={10}>

                    {/* <Routes>
                        <Route path='home' element={<Home />} />
                        <Route path='orders' element={<Orders />} />
                        <Route path='products' element={<Products />} />
                    </Routes> */}

            </Box>
        </div>
    )
}

export default Admin