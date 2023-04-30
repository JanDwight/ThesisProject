import React from 'react'

function SearchModal({visible, onClose}) {

    if(!visible) return null;

  return (

/*Background*/
    <div onClick={onClose} className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm
                    flex justify-center items-center'>

{/*Body*/}
        <div className='w-72 bg-white h-[500px]'>
            <div className='block m-5'>

                <div>
                <input 
                type="text" 
                className='shadow appearance-none border rounded 
                            w-full py-2 px-3 text-gray-700  
                            focus:outline-none focus:shadow-outline'
                placeholder="Search"
                />
                </div>

                  
            </div>


{/*Buttons*/}
            <div className='flex justify-center m-5'>
            <button onClick={onClose} class="bg-red-600 hover:bg-blue-700 
                            text-white font-bold py-2 px-4 rounded">
                Cancel
            </button>
            {/*Not Working Yet*/}
            <button class="bg-green-600 ml-5 hover:bg-green-300 
                            text-white font-bold py-2 px-4 rounded">
                Search
            </button>
            </div>

            <div>
                <div className='ml-3 mb-2'>Tags</div>
                <button className='bg-green-600 ml-5 hover:bg-green-300 
                            text-white text-xs font-bold py-2 px-4 rounded'>
                    Department
                </button>

                <button className='bg-green-600 ml-5 hover:bg-green-300 
                            text-white text-xs font-bold py-2 px-4 rounded'>
                    Class
                </button>
            </div>
        </div>
    </div>
  )
}

export default SearchModal