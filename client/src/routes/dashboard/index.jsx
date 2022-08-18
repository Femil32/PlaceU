import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../../pages/dashboard'

const DashboardRoute = () => {
    return (
        <Routes>
            <Route index path='/' element={<Dashboard />} />
        </Routes>
    )
}

export default DashboardRoute