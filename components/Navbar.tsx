import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const Navbar = () => {
  return (
    <header className='w-full'>
      <nav className='nav'>
        <Link href='/' className='flex items-center gap-1'>
          <Image 
            src="/assets/icons/logo.svg"
            width={27}
            height={27}
            alt='logo'
          />
          <p className='nav-logo'></p>
        </Link>
      </nav>
    </header>
  )
}

export default Navbar
