import React from 'react'
import PreRegistrationForm from '../components/PreRegistration/PRFormStudentAccess'

function PreRegistration() {
  return (
    <div className='flex justify-center items-center'>

        {/*Paper Background*/}
        <div className='bg-zinc-300 w-[816px] h-[1250px] m-5'>

            <PreRegistrationForm />
            
            {/*<div>
                <h1 className='font-bold ml-15'>
                    PRE-REGISTRATION FORM
                </h1>
            </div>*/}
        </div>
    </div>
  )
}

export default PreRegistration