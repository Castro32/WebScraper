import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const navIcons=[
  {src: '/assets/search.png', alt:'search'},
  {src: '/assets/love.png', alt:'heart'},
  {src: '/assets/user.png', alt:'user'},
]
const Navbar = () => {
  return (
    <header className='w-full'>
      <nav className='nav flex justify-between items-center m-5'>
        <Link href='/' className='flex items-center gap-1'>
          <Image 
            src="/assets/love.png"
            width={27}
            height={27}
            alt='logo'
          />
          <p className='nav-logo'></p>
          <b>Price</b> <span className='text-green-500 font-bold'>Wise</span>
        </Link>
        <div className='flex items-center gap-5'>
          {navIcons.map((icon)=>(
            <Image
             key={icon.alt}
             src={icon.src}
             alt={icon.alt}
             width={28}
             height={28}
             className='object-contain'
            />
          ))}
        </div>
      </nav>
    </header>
  )
}

export default Navbar
