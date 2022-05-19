import React from 'react'
import { AiFillCalculator } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Navbar = ({ title }) => {
  return (
    <>
      <nav className='navbar mb-12 shadow-lg bg-base-300 text-base-content'>
        <div className='container mx-auto'>
          <div className='flex-none px-2 mx-2'></div>
          <AiFillCalculator className='inline pr-2 text-3xl' />
          <Link to='/' className='text-lg font-bold align-middle'>
            {title}
          </Link>
        </div>
      </nav>
    </>
  )
}
Navbar.defaultProps = {
  title: 'Calculator',
}
export default Navbar
