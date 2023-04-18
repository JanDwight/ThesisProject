import React from 'react'
import YearLevelButton from '../components/Manage Accounts/YearLevelButton'

function Accounts() {
  return (
    <div>
      <div className='flex items-center flex-col font-bold text-xl m-5'>Manage Accounts</div>

      <div className='flex flex-row'>
        <YearLevelButton/>
        <div>
          <button className='bg-red-600 p-5 m-1 rounded'>Delete</button>
        </div>
      </div>
    </div>
    

  )
}

export default Accounts