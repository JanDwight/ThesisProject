import {createBrowserRouter, Navigate } from "react-router-dom";
import Authenticate from "./components/AuthenticationLayout"
import Default from "./components/DefaultLayout"
import About from "./views/AboutUs"
import Contact from "./views/Contact"
import Home from "./views/Home"
import Links from "./views/Links"
import Login from "./views/Login"
import PageNotFound from "./views/PageNotFound"
import UserProfile from "./views/UserProfile"

const router = createBrowserRouter([

                                            
        {
        path: '/',
        element: <Default/>,
        children: [
            {
                path: '/home',
                element: <Navigate to = '/' />
            },

            {
                path: '/about',
                element: <About />
            },
        
            {
                path: '/contact',
                element: <Contact />
            },
        
            {
                path: '/',
                element: <Home />
            },
        
            {
                path: '/links',
                element: <Links />
            },
        
            {
                path: '/pagenotfound',
                element: <PageNotFound />
            },
        
            {
                path: '/userprofile',
                element: <UserProfile />
            },
        ]
    },

    

    {
        path: '/',
        element: <Authenticate/>,
        children: [
            {
                path: 'login',
                element: <Login />
            },
        ]
    },

    

  
    
])

export default router;