import React from 'react'
import Link from 'next/link';

export default function Header() {
  return (
    <header className=''>
       <nav className='flex justify-between items-center shadow-md px-4 h-12'>
            <Link href="/"><a className='hover:text-red-400 font-bold text-lg'>Amazon</a></Link>
            <div className='flex '>
            <Link href="/cart"><a className='p-2'>Cart</a></Link>
            <Link href="/login"><a className='p-2'>Login</a></Link>
            </div>
          </nav>
    </header>
  )
}
