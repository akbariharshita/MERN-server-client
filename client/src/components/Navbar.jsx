import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import { useAuth } from '../store/auth';;
import { FiMenu } from "react-icons/fi";
import { ImCross } from "react-icons/im";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { isLoggedIn } = useAuth();

  const toggleNavbar = () => {
    setOpen(!open);
  }

  return (
    <>
      <nav className='w-full bg-gray-50 p-10'>
        <div className='flex flex-row justify-between items-center'>
          <div className='font-bold text-4xl ms-4'>
            Thapa Technical
          </div>

          <div className='md:hidden text-3xl'>
            {open ?
              <ImCross onClick={toggleNavbar} />
              : <FiMenu onClick={toggleNavbar} />
            }
          </div>

          <div className="text-base md:block hidden">
            <ul className="flex flex-row space-x-4 mr-11 text-black font-semibold text-[15px]">
              <li className='mt-4 md:mt-0'> <NavLink to="/" className="nav-link">Home</NavLink> </li>
              <li> <NavLink to="/about" className="nav-link">About</NavLink> </li>
              <li> <NavLink to="/service" className="nav-link">Services</NavLink> </li>
              <li> <NavLink to="/contact" className="nav-link">Contact</NavLink> </li>
              {isLoggedIn ?
                <li> <NavLink to="/logout" className="nav-link">Logout</NavLink> </li>
                :
                <>
                  <li> <NavLink to="/login" className="nav-link">Login</NavLink> </li>
                  <li> <NavLink to="/register" className="nav-link">Registration</NavLink> </li>
                </>
              }
            </ul>
          </div>
        </div>

        {open &&
          (
            <div className="text-base block md:hidden">
              <ul className="flex flex-col text-black text-center font-semibold text-[15px]">
                <li className='mt-4 md:mt-0'> <NavLink to="/" className="nav-link">Home</NavLink> </li>
                <li> <NavLink to="/about" className="nav-link">About</NavLink> </li>
                <li> <NavLink to="/service" className="nav-link">Services</NavLink> </li>
                <li> <NavLink to="/contact" className="nav-link">Contact</NavLink> </li>
                {isLoggedIn ?
                  <li> <NavLink to="/logout" className="nav-link">Logout</NavLink> </li>
                  :
                  <>
                    <li> <NavLink to="/login" className="nav-link">Login</NavLink> </li>
                    <li> <NavLink to="/register" className="nav-link">Registration</NavLink> </li>
                  </>
                }
              </ul>
            </div>
          )}
      </nav>
    </>
  )
}

export default Navbar;