import React from 'react'

function Students() {

  

  return (
    <div className='flex justify-center bg-green-600 p-5 m-1 rounded w-full'>
      <div className='relative h-full w-full'>
        <input type="checkbox" id="input" className='absolute peer opacity-0 h-full w-full'/>
        <label htmlFor="input" className='font-bold flex justify-center'>Students</label>
        <div></div>
        <div className='max-h-0 overflow-hidden peer-checked:max-h-full flex flex-col'>
          <button>Student 1</button>
          <button>Student 2</button>
          <button>Student 3</button>
        </div>
      </div>
    </div>
  )
}

export default Students