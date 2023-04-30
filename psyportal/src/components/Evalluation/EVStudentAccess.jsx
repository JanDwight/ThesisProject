import EVButton from "./EVButton";
import React from 'react'

function EVStudentAccess() {
    
    const postCounter = ["Spring", "Summer", "Autumn", "Winter"];
    

  return (
    <div className='mt-3 mx-[100px] w-[100rem]'>
          <ul className=''>
            {postCounter.map(() => (
               <EVButton />
            ))}
          </ul>
    </div>
  )
}

export default EVStudentAccess