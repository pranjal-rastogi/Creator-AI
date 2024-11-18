import { UserProfile } from '@clerk/nextjs'
import React from 'react'

function Settings() {
  return (
    <div className='flex items-center justify-center min-h-screen px-4'>
      <div className='w-full sm:max-w-lg'>
        <UserProfile />
      </div>
    </div>
  )
}

export default Settings
