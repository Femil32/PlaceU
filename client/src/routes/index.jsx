import React, { Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import LazyLoader from '../components/MasterLayout/LazyLoader'
import DefaultLayout from '../layouts/default'
import { ToastContainer } from 'react-toastify'

// pages
import HomePage from '../pages/home'
import ProtectedRoutes from './ProtectedRoutes'
import DashboardRoute from './dashboard'
import AuthRoutes from './AuthRoutes'
import Auth from './auth'

const index = () => {
    return (
        <Suspense fallback={<LazyLoader />}>
            <ToastContainer position='bottom-right' />
            <Routes>
                <Route path='/' element={<DefaultLayout />}>

                    <Route index element={<HomePage />} />

                    <Route element={<ProtectedRoutes />}>
                        <Route path='dashboard/*' element={<DashboardRoute />} />
                    </Route>

                    <Route element={<AuthRoutes />}>
                        <Route path='auth/*' element={<Auth />} />
                    </Route>

                    <Route
                        path="*"
                        element={<Navigate to="dashboard" replace={true} />}
                    ></Route>
                </Route>
            </Routes>
        </Suspense>
    )
}

export default index