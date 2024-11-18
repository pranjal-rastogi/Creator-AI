import { UserButton } from '@clerk/nextjs'
import { Search } from 'lucide-react'
import React from 'react'

function Header() {
  return (
    <div className='p-5 shadow-sm border-b-2 bg-white flex flex-col sm:flex-row sm:justify-between items-center'>
      <div className='flex gap-2 items-center p-2 border sm:max-w-lg w-full bg-white'>
        <Search />
        <input
          type='text'
          placeholder='Search...'
          className='outline-none w-full'
        />
      </div>
      <div className='flex flex-col sm:flex-row gap-5 items-center mt-4 sm:mt-0'>
        <h2 className='bg-primary p-1 text-sm text-white px-2 hidden sm:block'>
          Get Membership for Rs. 99/Month
        </h2>
        <UserButton />
      </div>
    </div>
  )
}

export default Header
