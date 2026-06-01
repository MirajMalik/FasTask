import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between bg-slate-800 text-white hover:bg-slate-600 hover:text-slate-900 py-3 transition-colors duration-500'>
        <div className='h-6em p-1.5em transition-300 cursor-pointer'>
            <span className='font-bold text-xl mx-10 transition-colors duration-300'>fasTask</span>
        </div>
        <ul className="flex gap-8 mx-9">
            <li className='cursor-pointer hover:font-bold transition-all '>Home</li>
            <li className='cursor-pointer hover:font-bold transition-all '>Your Tasks</li>
        </ul>    
    </nav>
  )
}

export default Navbar
