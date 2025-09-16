import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <header className="flex justify-between items-center px-8 py-4">
        
        <div className="text-2xl font-bold">
          BLACK<span className="text-red-500 italic">Friday</span>
        </div>

        
        <nav className="space-x-8 uppercase text-sm">
          <NavLink to="/" className="text-red-500 font-semibold">
            Home
          </NavLink>
          <NavLink to="/shop" className="text-red-500 font-semibold">
            Shop
          </NavLink>
          <NavLink to="/" className="text-red-500 font-semibold">
            About US
          </NavLink>
          <NavLink to="/" className="text-red-500 font-semibold">
            Contact
          </NavLink>
         
        </nav>

        
       
      </header>
    </div>
  )
}

export default Navbar
