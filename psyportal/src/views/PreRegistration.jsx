import React from 'react'
import PreRegistrationForm from '../components/PreRegistration/PRFormStudentAccess'

function PreRegistration() {
  return (
    <div className='flex justify-center items-center'>

        {/*Paper Background*/}
        <div className='bg-zinc-300 w-[816px] h-[1250px] m-5'>

            <PreRegistrationForm />
            
            <div className='flex justify-center'>
                <button className='bg-green-600 m-5 px-5 py-3 rounded shadow-xl  hover:shadow-2xl'>
                  Submit
                </button>

                
            </div>

        </div>
    </div>
  )
}

export default PreRegistration