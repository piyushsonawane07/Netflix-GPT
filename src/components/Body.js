import React, { useEffect } from 'react'
import Login from './Login'
import Browse from './Browse'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home, { SignUp, SignUpDetails } from './Home'


const Body = () => {

    

    const appRouter = createBrowserRouter([
        {
            path: '/',
            element: <Home/>
        },
        {
            path: '/login',
            element: <Login/>
        },
        {
            path: '/sign-up',
            element: <SignUp/>
        },
        {
            path: '/signup/regform',
            element: <SignUpDetails/>
        },
        {
            path:'/home',
            element: <Browse/>
        }
    ])

    
  return (
    <div>
        <RouterProvider router={appRouter}></RouterProvider>
    </div>
  )
}

export default Body