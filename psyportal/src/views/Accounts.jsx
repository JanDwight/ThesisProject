import React from 'react'
import Students from '../components/Manage Accounts/Students'
import AddStudent from '../components/Manage Accounts/AddStudent'
import Staff from '../components/Manage Accounts/Staff'
import Admin from '../components/Manage Accounts/Admin'

function Accounts() {
  return (
    <div className='h-fit'>
      <div className='flex items-center flex-col font-bold text-xl m-5'>Manage Accounts</div>

      <div className='flex justify-center m-3 p-5 rounded'>
        <AddStudent/>
      </div>

      <Students/>

      <Staff/>

      <Admin/>
    </div>
    

  )
}

export default Accounts