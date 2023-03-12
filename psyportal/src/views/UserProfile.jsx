import React from 'react'

import { userStateContext } from '../contect/contextprovider'

function UserProfile() {
  
  const { currentUser } = userStateContext();
  console.log(currentUser.name);
  
  return (
    <div className="ml-3">
        <div className="text-base font-medium leading-none text-white">{currentUser.name}</div>
        <div className="text-sm font-medium leading-none text-gray-400">{currentUser.email}</div>
      </div>
      
  )
}

export default UserProfile