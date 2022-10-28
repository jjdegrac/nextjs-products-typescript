import Link from 'next/link'
import React from 'react'

export const Nav = () => {
  return (
    <nav className=' w-full flex gap-5 p-6 items-center text-2xl '>
        <Link href="/">
            <a>Home</a>
        </Link>
        {/* -- 5px -- */}
        <Link href="/movies">
            <a>Movies</a>
            
        </Link>        
    </nav>
  )
}

