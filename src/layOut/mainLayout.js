import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/uI/footer/footer'
import Header from '../components/uI/header/header'

const MainLayout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default MainLayout