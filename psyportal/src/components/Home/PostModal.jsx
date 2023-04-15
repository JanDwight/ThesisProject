import React from 'react'

function PostModal({visible, onClose}) {

    if(!visible) return null;

  return (

/*Background*/
    <div className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm
                    flex justify-center items-center'>

{/*Body*/}
        <div className='w-6/12 bg-white w-4/5'>
            <div className='block m-5'>
                <input 
                type="text" 
                className='shadow appearance-none border rounded 
                            w-full py-2 px-3 text-gray-700 leading-tight 
                            focus:outline-none focus:shadow-outline'
                placeholder="Title"
                />

                <input 
                type="text" 
                className='shadow appearance-none border rounded overflow-auto mt-5
                            w-full h-40 py-2 px-3 text-gray-700 leading-tight 
                            focus:outline-none focus:shadow-outline'
                placeholder="Content"            
                />  
            </div>


{/*Buttons*/}
            <div className='flex justify-end items-end m-5'>
            <button onClick={onClose} class="bg-red-600 hover:bg-blue-700 
                            text-white font-bold py-2 px-4 rounded">
                Cancel
            </button>
            {/*Not Working Yet*/}
            <button class="bg-green-600 ml-5 hover:bg-blue-700 
                            text-white font-bold py-2 px-4 rounded">
                Post
            </button>
            </div>
        </div>
    </div>
  )
}

export default PostModal