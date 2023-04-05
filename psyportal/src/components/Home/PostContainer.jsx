import React from 'react'

function PostContainer() {
  return (
    <div className='flex flex-col w-4/5 max-h-[90rem] bg-slate-50 p-0'>
        <div className='m-2 font-semibold'>
            <h1>Lorem ipsum dolor sit amet. Non quasi quidem quo aliquam corrupti qui</h1>
        </div>

        <div className=' max-h-96'>
            <img
                className="object-contain h-56 w-auto mx-auto"
                src="https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
            />
        </div>

        <div className='m-2'>
            Lorem ipsum dolor sit amet. Sit accusantium reprehenderit aut quia voluptatibus
            sit nostrum quae! Est dolorem dolore ad distinctio porro qui voluptates sint in
            repellat. Id quia sunt nam reiciendis debitis ut reiciendis galisum! Ex nesciunt
            repudiandae aut dolores obcaecati non nesciunt dicta qui fugiat omnis sed delectus 
            eveniet. Ea unde deserunt qui animi magnam et magni totam et beatae laboriosam et
            amet internos. Qui magnam libero vel temporibus aliquam eos error aperiam aut
            velit molestias ab magnam quas est quas temporibus qui temporibus repellat.
        </div>
    </div>
  )
}

export default PostContainer