import React, { useState } from 'react'
import EVModal from './EVModal';

function EVButton() {
    
    const [showEVModal, setShowEVModal] = useState(false);
    const handleOnClose = () => setShowEVModal(false);

  return (
    <div className="bg-green-600 rounded h-10 mt-3">
        <button onClick={() => setShowEVModal(true)} className='flex  items-center h-full w-full'>
            <div className='grid grid-cols-3 gap-x-[270px]'>
                <div>IT101</div>
                <div>Intro to IT</div>
                <div>Sir X</div>
            </div>
        </button>

        <EVModal onClose={handleOnClose} visible={showEVModal}/>
    </div>
  )
}

export default EVButton