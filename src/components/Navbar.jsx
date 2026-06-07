import React from 'react'
import { Link } from 'react-router-dom'
import { PlusIcon } from 'lucide-react'

const Navbar = () => {
  return (
    <nav className='bg-base-300 border-b border-base-content/10'>
        <div className='mx-auto max-w-6xl p-4'>
            <div className='flex items-center justify-between'>
              <h1 className='font-bold text-3xl font-mono tracking-tighter'>FasTask</h1>
              <div className='flex items-center gap-4'>
                <Link to={"/create"} className='btn btn-primary'>
                  <PlusIcon className='size-5' /> 
                  <span>New Task</span>
                </Link>
              </div>
            </div>
        </div>
         
    </nav>
  )
}

export default Navbar
