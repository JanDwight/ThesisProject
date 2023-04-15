import React from 'react'

function Links() {
  return (
    <div>
      <div className='flex justify-center mt-2 text-xl font-bold'>Google Class</div>
      <div className='grid grid-cols-2 '>
        <button className='py-3 px-5 m-2 bg-green-600'>Subject 1</button>
        <button className='py-3 px-5 m-2 bg-green-600'>Subject 2</button>
        <button className='py-3 px-5 m-2 bg-green-600'>Subject 3</button>
        <button className='py-3 px-5 m-2 bg-green-600'>Subject 4</button>
      </div>
    </div>
  )
}

export default Links