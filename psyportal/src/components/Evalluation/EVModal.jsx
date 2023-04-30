import React from 'react'
import EVForm from '../../assets/EVForm.png'

function EVModal({visible, onClose}) {

    if(!visible) return null;

  return (
    /*Background*/
    <div onClick={onClose} className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm
                    flex justify-center items-center'>

{/*Body*/}
        <div className='bg-white'>
            <div className='w-fit h-fit'>
              
              <img src={EVForm} alt="" />
              
            </div>


{/*Buttons*/}
            {/* Here is the Cancel Button on the Problem #1 */}
            <div className='flex justify-center  m-5'>
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