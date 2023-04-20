import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import user from '../assets/user.png'
import bell from '../assets/bell.png'

const navigation = [
    { name: 'Home', to: '/'},
    { name: 'Evalluation', to: '/evalluation'},
    { name: 'Pre-Registration', to: '/preregistration'},
    { name: 'Links', to: '/links'},
    { name: 'Accounts', to: '/accounts'},
    { name: 'Contact', to: '/contact'}
  ]
  
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

function DefaultLayout() {
    return (
        <div className='flex flex-row justify-center mx-auto max-w-screen-2xl '>
            <div className='h-screen bg-green-600 hidden sm:block w-52'>
              
              <div className='ml-20 h-1 w-10 '>
                <div className='mb-5 mt-5'>
                  <NavLink to={'/userprofile'}>
                    <img src={user} alt="" />
                  </NavLink>
                </div>
    
                <button>
                  <img src={bell} alt="" />
                </button> 
              </div>
    
              <div className="flex flex-col mt-[150px]">
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
            
            {/*Loads the content on the right side of the screen */}
            <div className='w-full h-100% bg-green-300 sm:ml-5 max-w-5xl h-fit'>
              <div >
                <Outlet />
              </div >
            </div>
        </div>
      )
}

export default DefaultLayout