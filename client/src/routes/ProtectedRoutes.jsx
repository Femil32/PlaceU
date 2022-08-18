import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { ACCESS_TOKEN } from '../utils/constants'

const ProtectedRoutes = () => {
    const isAuthenticated = localStorage.getItem(ACCESS_TOKEN)
    console.log(isAuthenticated);
    return isAuthenticated ? <Outlet /> : <Navigate to='/auth' replace />
}

export default ProtectedRoutes