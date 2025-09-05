import React from 'react'



const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 text-white px-4 py-3 flex justify-between items-center">
      <h1 className="text-xl font-bold">PHILANI ZIKALALA</h1>
      <h1>About</h1>
      <h1><a href='#'>Contact</a></h1>
      <h1>Projects</h1>
      <h1>Download CV</h1>
    </nav>
  )
}

export default Navbar

