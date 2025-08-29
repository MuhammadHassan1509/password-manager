import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-slate-800 text-white'> 
    <div className="mycontainer flex justify-between items-center px-4 h-8 py-9">

    <div className="logo font-bold text-2xl">
        <span className="text-green-600">&lt;</span>
        Pass
        <span className="text-green-600">OP/&gt;</span>
        </div>
    {/* <ul>
        <li className='flex gap-4'>
            <a className='hover:font-bold' href="#">About</a>
            <a className='hover:font-bold' href="#">Home</a>
            <a className='hover:font-bold' href="#">Contact</a>
        </li>
    </ul> */}
    <button className='text-white bg-green-700 rounded-lg flex gap-2 items-center'>
      <img className='invert w-8' src="/icons/github.png" alt="github logo" /><span className='text-center pr-2'>GitHub</span>
    </button>
    </div>
    </nav>
  )
}

export default Navbar