import React from 'react'

function EVModal({visible, onClose}) {

    if(!visible) return null;

  return (
    /*Background*/
    <div className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm
                    flex justify-center items-center'>

{/*Body*/}
        <div className='w-6/12 bg-white w-4/5'>
            <div className='relative border-4 border-green-600 m-5 h-96'>
              <div className='flex justify-center items-center bg-green-600 text-lg h-12 w-[400px]'>
                Aspects Related to Teaching Performance
              </div>

              <div className='absolute top-0 right-[20%]'>
                Scale
              </div>
            </div>


{/*Buttons*/}
            {/* Here is the Cancel Button on the Problem #1 */}
            <div className='flex justify-end items-end m-5'>
            <button onClick={onClose} class="bg-red-600 hover:bg-blue-700 
                            text-white font-bold py-2 px-4 rounded">
                Cancel
            </button>
            {/*Not Working Yet*/}
            <button class="bg-green-600 ml-5 hover:bg-blue-700 
                            text-white font-bold py-2 px-4 rounded">
                Submit
            </button>
            </div>
        </div>
    </div>
  
  )
}

export default EVModal