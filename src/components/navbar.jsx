import { useState } from 'react';
import { useNavigate, NavLink } from 'react-router-dom'

import { HiBars3BottomRight, HiXMark, HiOutlineHome, HiOutlineNewspaper } from 'react-icons/hi2'
import { RxDashboard } from 'react-icons/rx'
import { RiLogoutCircleRLine } from 'react-icons/ri'

const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false);

  const navigate = useNavigate();

  return (
    <nav className="max-w-screen-xl mx-auto h-14 px-6 p-4 flex justify-between items-center border-b border-zinc-800">

      <div className='flex justify-start items-center'>
        <h2 className='text-2xl font-bold'>Afzlog</h2>
      </div>

      <ul className='list-none font-medium hidden sm:flex justify-end items-center flex-1 space-x-4'>
        <li>
          <NavLink className='hover:text-blue-500 transition duration-100' to={'/'}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className='hover:text-blue-500 transition duration-100' to={'/logs'}>
            Blog
          </NavLink>
        </li>

        {localStorage.getItem('token') &&
          <>
            <li>
              <NavLink className='hover:text-blue-500 transition duration-100' to={'/admin'}>
                Dashboard
              </NavLink>
            </li>
            <li>
              <span className='cursor-pointer hover:text-blue-500 transition duration-100' onClick={() => {
                localStorage.removeItem('token');
                navigate('/')
              }}>
                Logout
              </span>
            </li>
          </>
        }
      </ul>


      <div className='sm:hidden flex flex-1 justify-end items-center'>
        <button onClick={() => setToggleMenu(!toggleMenu)} className='hover:bg-zinc-800 p-2 rounded-full'>
          {!toggleMenu ?
            <HiBars3BottomRight className='w-7 h-7' /> :

            <HiXMark className='w-7 h-7' />
          }
        </button>


        <div className={`${toggleMenu ? 'flex' : 'hidden'} p-6 bg-zinc-900 absolute top-16 right-4 px-2 py-4 min-w-[140px] rounded`}>
          <ul className="space-y-2 w-[180px]">
            <li>
              <NavLink to={'/'} onClick={() => setToggleMenu(setToggleMenu(false))} className="flex items-center p-2 text-gray-50 hover:bg-zinc-800/50 rounded-lg ">
                <HiOutlineHome className="w-6 h-6  transition duration-75 text-gray-400" />
                <span className="flex-1 ml-3 whitespace-nowrap">Home</span>
              </NavLink>
            </li>
            <li>
              <NavLink to={'/logs'} onClick={() => setToggleMenu(setToggleMenu(false))} className="flex items-center p-2 text-gray-50 hover:bg-zinc-800/50 rounded-lg ">
                <HiOutlineNewspaper className="flex-shrink-0 w-6 h-6  transition duration-75 text-gray-400" />
                <span className="flex-1 ml-3 whitespace-nowrap">Blog</span>

              </NavLink>
            </li>

            {localStorage.getItem('token') &&
              <>
                <li>
                  <NavLink to={'/admin'} onClick={() => setToggleMenu(setToggleMenu(false))} className="flex items-center p-2 text-gray-50 hover:bg-zinc-800/50 rounded-lg ">
                    <RxDashboard className="flex-shrink-0 w-6 h-6  transition duration-75 text-gray-400" />
                    <span className="flex-1 ml-3 whitespace-nowrap">Dashboard</span>

                  </NavLink>
                </li>
                <li>
                  <button onClick={() => {
                    setToggleMenu(false);
                    localStorage.removeItem('token');
                    navigate('/')
                  }}
                    className="flex w-full text-left items-center p-2 text-gray-50 hover:bg-zinc-800/50 rounded-lg ">
                    <RiLogoutCircleRLine className="flex-shrink-0 w-6 h-6  transition duration-75 text-gray-400" />
                    <span className="flex-1 ml-3 whitespace-nowrap">Logout</span>
                  </button>
                </li>
              </>
            }

          </ul>
        </div>
      </div>

    </nav>
  )
}
export default Navbar