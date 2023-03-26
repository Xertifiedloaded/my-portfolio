import React from 'react'
import { useRoutes } from 'react-router-dom'
import MainLayout from './layOut/mainLayout'
import Landing from './pages/landing/landing'


const PortfolioRouter = () => {
    return useRoutes([
        {
            path: "/",
            element: <MainLayout />,
            children: [
                {
                    path: "/",
                    element: <Landing/>
                }
            ]
        }
    ]

    )
}

export default PortfolioRouter;