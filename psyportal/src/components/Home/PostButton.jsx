import React, { useState } from 'react'
import PostModal from '../Home/PostModal';

function PostButton() {

    const [showPostModal, setShowPostModal] = useState(false);
    const handleOnClose = () => setShowPostModal(false);

  return (
    <div>
        <button onClick={() => setShowPostModal(true)} className='bg-green-600 rounded hover:bg-green-500 hover:text-black px-5 py-2'>
            Post
        </button>

        <PostModal onClose={handleOnClose} visible={showPostModal}/>
    </div>
  )
}

export default PostButton