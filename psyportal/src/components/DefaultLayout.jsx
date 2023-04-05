import React from 'react'
import { Navigate, NavLink, Outlet } from 'react-router-dom'

const navigation = [
    { name: 'Home', to: '/'},
    { name: 'Links', to: '/links'},
    { name: 'About', to: '/about'},
    { name: 'Contact', to: '/contact'},
    { name: 'Login', to: '/login'}
  ]
  
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  function searchField(){
    return (
      <h1>Searchdsrhdfjghjfhgjdgj</h1>
    )
  }

function DefaultLayout() {
  return (
    <div className='flex justify-center mx-auto max-w-screen-2xl'>
      
        <div className='h-screen bg-green-600 hidden sm:block w-52'>
          
        
            <div className="flex flex-col items-center mt-5">
                {/* This will handle the clicks on the buttons*/}
                {navigation.map((item) => (
                    <NavLink
                        key={item.name}
                        to={item.to}
                        className={({isActive}) => classNames(
                        isActive ? 'bg-green-300 text-black' : 'text-black hover:bg-green-300 hover:text-black',
                        'rounded-md px-10 py-2 text-medium font-bold')}>
                        {item.name}
                    </NavLink>
                ))}
            </div>
        </div>
{/**For the newsfeed column. Loads the code from Home.jsx */}
        <div className='w-full h-100% bg-green-300 sm:ml-5  max-w-5xl'>

        <div>
          <searchField/>
          </div>
          
          <Outlet />
        </div>
    </div>

    
  )
}

export default DefaultLayout