import React from 'react'
import EVStudentAccess from '../components/Evalluation/EVStudentAccess'
import Submit from '../components/Evalluation/Submit'

function Evalluation() {
  return (
    <div>
        <div className='grid grid-cols-3 gap-x-2 mt-5 mx-[100px] w-[100rem]'>
            <div className='bg-red-600'>Class Codes</div>
            <div className='bg-yellow-600'>Subject Description</div>
            <div className='bg-blue-600'>Instructors</div>
        </div>

        /*<EVStudentAccess />*/
        
        
        
    </div>
  )
}

/*<div className='grid grid-cols-3 gap-x-2 mt-5 mx-[100px] w-[100rem]'>
            <div className='bg-red-600'>Class Codes</div>
            <div className='bg-yellow-600'>Subject Description</div>
            <div className='bg-blue-600'>Instructors</div>
*/
export default Evalluation