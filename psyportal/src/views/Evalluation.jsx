import React from 'react'
import EVStudentAccess from '../components/Evalluation/EVStudentAccess'
import Submit from '../components/Evalluation/Submit'

function Evalluation() {
  return (
    <div>
        <div className='md:flex md:flex-cols-3 md:justify-center md:gap-x-40 m-5'>
            <div className='bg-red-600'>Class Codes</div>
            <div className='hidden md:flex md:flex-cols-3 md:gap-x-40'>
              <div className='bg-yellow-600'>Subject Description</div>
              <div className='bg-blue-600'>Instructors</div>
            </div>
            
        </div>

        <div >
          <EVStudentAccess />
        </div>
        
        
        
        
    </div>
  )
}

/*<div className='grid grid-cols-3 gap-x-2 mt-5 mx-[100px] w-[100rem]'>
            <div className='bg-red-600'>Class Codes</div>
            <div className='bg-yellow-600'>Subject Description</div>
            <div className='bg-blue-600'>Instructors</div>
*/
export default Evalluation