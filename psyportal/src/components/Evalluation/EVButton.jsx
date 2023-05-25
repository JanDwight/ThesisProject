import React, { useState } from 'react'
import EVModal from './EVModal';

function EVButton() {
    
    const [showEVModal, setShowEVModal] = useState(false);
    const handleOnClose = () => setShowEVModal(false);

  return (
    <div className="bg-green-600 rounded h-10 mt-3 shadow-xl hover:bg-green-300 hover:shadow-2xl mx-5 ">
        <button onClick={() => setShowEVModal(true)} className='h-full w-full'>
            <div className='flex justify-center md:gap-x-52'>
                <div>Code</div>

                <div className='hidden md:flex md:justify-center md:gap-x-52'>
                 <div>Description</div>
                <div>Sir X</div> 
                </div>
                
            </div>
        </button>

        <EVModal onClose={handleOnClose} visible={showEVModal}/>
    </div>
  )
}

export default EVButton