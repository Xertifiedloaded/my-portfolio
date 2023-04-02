import React from 'react'
import { useRoutes } from 'react-router-dom'
import MainLayout from './layOut/mainLayout'
import Landing from './pages/landing/landing'
import Works from './pages/works/works'


const PortfolioRouter = () => {
    return useRoutes([
        {
            path: "/",
            element: <MainLayout />,
            children: [
                {
                    path: "/",
                    element: <Landing/>
                },
                {
                    path: "/works",
                    element: <Works/>
                },
            ]
        }
    ]

    )
}

export default PortfolioRouter;