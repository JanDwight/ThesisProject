import React from 'react'

function Students() {

  

  return (
    <div className='flex justify-center bg-green-400 p-5 m-1 rounded'>
      <div className='relative h-full w-full'>
        <input type="checkbox" id="input" className='absolute peer opacity-0 h-full w-full'/>
        <label htmlFor="input" className='font-bold flex justify-center'>Students</label>
        <div></div>
        <div className='max-h-0 overflow-hidden peer-checked:max-h-full flex flex-col '>
          <div className='bg-black w-full h-1 mb-5 mt-1'></div>
          <button className='py-2 m-2 bg-green-600 rounded'>Student 1</button>
          <button className='py-2 m-2 bg-green-600 rounded'>Student 2</button>
          <button className='py-2 m-2 bg-green-600 rounded'>Student 3</button>
        </div>
      </div>
    </div>
  )
}

export default Students