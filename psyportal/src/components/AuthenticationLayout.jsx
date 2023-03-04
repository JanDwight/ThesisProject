import React from 'react'
import {Outlet} from "react-router-dom"

function AuthenticationLayout() {
  return (
    <div>
        Authenticate
        <Outlet />
    </div>
  )
}

export default AuthenticationLayout