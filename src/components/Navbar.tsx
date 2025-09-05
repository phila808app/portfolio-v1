import React from 'react'



const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 text-white px-4 py-3 flex justify-between items-center ">
      <h1 className="text-xl font-bold hover:bg-red-700">PHILANI ZIKALALA</h1>
      <h1 className='hover:bg-gray-700'><a href='#'>About</a></h1>
      <h1 className='hover:bg-gray-700'><a href='#'>Contact</a></h1>
      <h1 className='hover:bg-gray-700'><a href='#'>Projects</a></h1>
      <h1 className='hover:bg-gray-700'><a href='#'>Download CV</a></h1>
    </nav>
  )
}

export default Navbar

