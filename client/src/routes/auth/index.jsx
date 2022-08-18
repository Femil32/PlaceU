import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginPage from '../../pages/LoginPage/LoginPage'

const Auth = () => {
    return (
        <Routes>
            <Route index path='/' element={<LoginPage />} />
        </Routes>
    )
}

export default Auth