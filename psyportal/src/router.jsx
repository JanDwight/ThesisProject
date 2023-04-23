import {createBrowserRouter, Navigate, Router, Routes } from "react-router-dom";
import Authenticate from "./components/AuthenticationLayout"
import Default from "./components/DefaultLayout"
import ManageAccounts from "./views/Accounts"
import Contact from "./views/Contact"
import Home from "./views/Home"
import Links from "./views/Links"
import Login from "./views/Login"
import PageNotFound from "./views/PageNotFound"
import UserProfile from "./views/UserProfile"
import PreRegistration from "./views/PreRegistration"
import Evalluation from "./views/Evalluation"

import TMPLogIn from "./TMPLogIn";
/* This is the router, through on the NavBar's(DefaultLayout.jsx) in the user will be directed to the page requested */

const router = createBrowserRouter([   

    
    {
        path: '/',
        element: <TMPLogIn/>,
        children: [
            {
                path: '/',
                element: <Default/>,
                    children: [
                    {
                        path: '/home',
                        element: <Navigate to = '/' />
                    },

                    {
                        path: '/evalluation',
                        element: <Evalluation />
                    },

                    {
                        path: '/preregistration',
                        element: <PreRegistration />
                    },

                    {
                        path: '/accounts',
                        element: <ManageAccounts />
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

                    {
                        path: '/login',
                        element: <TMPLogIn/>
                    }
                ]   
            }
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