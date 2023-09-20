import React from 'react'
import NavBar from './Navbar'
import HeroComponent from './HeroComponent'

const Header = () => {
  return (
    <div className='flex flex-col'>
        <NavBar />
        <HeroComponent />
    </div>
  )
}

export default Header