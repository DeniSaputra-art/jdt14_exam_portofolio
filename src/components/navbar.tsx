import React from 'react'

const Navbar = () => {
  return (
    <div className='flex flex-row w-full justify-between px-8 py-5 shadow-md'>
        <h2 className='text-base'>Squirrel</h2>
        <div className='flex flex-row gap-10'>
            <a href="#">Home</a>
            <a href="#summary">Summary</a>
            <a href="#project">Project</a>
            <a href="#education">Education</a>
        </div>
    </div>
  )
}

export default Navbar