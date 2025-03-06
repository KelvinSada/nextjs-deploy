"use client"
import React from 'react'
import Link from 'next/link'

const layout = ({children}:{children:React.ReactNode}) => {
  return (
    <div>
      <header className='w-full bg-white p-2 text-black text-center'>
        <ul className='flex gap-10 flex-row justify-center'>
          <li><Link href="./">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/post">Post</Link></li>
        </ul>
      </header>
      {children}
    </div>
  )
}

export default layout
