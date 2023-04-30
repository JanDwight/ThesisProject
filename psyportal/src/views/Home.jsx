import PostContainer from '../components/Home/PostContainer'
import SearchButton from '../components/Home/SearchButton';



export default function Home() {
  const postCounter = ["Spring", "Summer", "Autumn", "Winter"];

  return (
  <>
    <div className='flex justify-center items-center mt-5 '>
      <SearchButton />
    </div>

    <div className="flex justify-center origin-center  mx-auto">
      <ul className=''>
      {postCounter.map(() => (
        <div className="flex justify-center origin-center m-5 mx-auto">
          <PostContainer />
          
          </div>
        ))}
      </ul>
    </div>

    <div>
      <h1 className='flex justify-center font-bold m-5'>--End Post--</h1>
    </div>
    </>
  )
}

