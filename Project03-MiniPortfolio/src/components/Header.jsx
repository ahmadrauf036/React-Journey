import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
    <header className='flex w-screen h-20 justify-around items-center shadow-lg'>
        <h1 className='text-3xl font-bold'>your<span className='text-amber-700'>Logo</span></h1>
        <nav className='w-2/5 flex justify-around text-xl'>
            <Link className='hover:text-amber-700 focus:text-amber-700' to="/">Home</Link>
            <Link className='hover:text-amber-700 focus:text-amber-700' to="/about">About</Link>
            <Link className='hover:text-amber-700 focus:text-amber-700' to="/contact">Contact</Link>
            <Link className='hover:text-amber-700 focus:text-amber-700' to="/github">Github</Link>
        </nav>
        <div id="btn" className='w-1/7 flex justify-around'>
            <button className="btn hover:text-amber-700 focus:text-amber-700 text-xl">Log in</button>
            <button className="btn transition-all text-base p-2 hover:bg-white hover:text-amber-700 hover:border-amber-700 hover:border-2 bg-amber-700 rounded-xl text-white">Get Started</button>
        </div>
    </header>
    <hr className='border-gray-400 '/>
    </>
  )
}

export default Header