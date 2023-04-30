import React, { useState } from 'react'
import PostModal from './SearchModal';

function SearchButton() {

    const [showPostModal, setShowPostModal] = useState(false);
    const handleOnClose = () => setShowPostModal(false);

  return (
    <div className='shadow-lg hover:shadow-2xl'>
        <button onClick={() => setShowPostModal(true)} className='bg-green-600 rounded hover:bg-green-300 hover:text-black px-5 py-2'>
            Search
        </button>

        <PostModal onClose={handleOnClose} visible={showPostModal}/>
    </div>
  )
}

export default SearchButton