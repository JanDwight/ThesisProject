import {Outlet } from 'react-router-dom'

export default function Home() {
  const seasons = ["Spring", "Summer", "Autumn", "Winter"];

  return (
    <div className="flex justify-center origin-center m-10 mx-auto">
      <ul className=''>
      {seasons.map((season) => (
        <div className="flex justify-center origin-center m-10 mx-auto">
          <Outlet />
          </div>
        ))}
      </ul>
    </div>
  )
}

