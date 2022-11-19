import React from 'react'
import { Outlet } from 'react-router-dom'

function Orders() {
  return (
    <div>Orders
      <Outlet />
    </div>
  )
}

export default Orders