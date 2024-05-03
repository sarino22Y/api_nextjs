import ThemeToggle from '@/src/theme/ThemeToggle'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className='border-b border-b-accent fixed top-0 bg-background w-full'>
        <div className='container flex items-center py-2 max-w-lg mx-auto gap-1'>
            <h2 className='text-2xl font-bold mr-auto'>API NextJs</h2>
            <ThemeToggle />
        </div>
    </header>
  )
}

export default Header