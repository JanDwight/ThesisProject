import EVButton from "./EVButton";
import React from 'react'

function EVStudentAccess() {
    
    const postCounter = ["Spring", "Summer", "Autumn", "Winter"];
    

  return (
    <div className='mt-3 mx-5 '>
          <ul className=''>
            {postCounter.map(() => (
               <EVButton />
            ))}
          </ul>
    </div>
  )
}

export default EVStudentAccess