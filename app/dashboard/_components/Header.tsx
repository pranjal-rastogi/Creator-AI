import { UserButton } from '@clerk/nextjs'
import { Search } from 'lucide-react'
import React from 'react'

function Header() {
  return (
    <div className='p-5 shadow-sm border-b-2 bg-white flex justify-between items-center'>
      <div className='flex gap-2 items-center p-2 border max-w-lg bg-white'>
        <Search />
        <input
          type='text'
          placeholder='Search...'
          className='outline-none w-full'
        />
      </div>
      <div className='flex gap-5 items-center'>
        <h2 className='bg-primary p-1 text-sm text-white px-2 hidden sm:block'>
          Get Membership for Rs. 99/Month
        </h2>
        <UserButton />
      </div>
    </div>
  )
}

export default Header
