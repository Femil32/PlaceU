import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { ACCESS_TOKEN } from '../utils/constants'

const AuthRoutes = () => {
    const isAuthenticated = localStorage.getItem(ACCESS_TOKEN)
    return !isAuthenticated ? <Outlet /> : <Navigate to='/dashboard' />
}

export default AuthRoutes