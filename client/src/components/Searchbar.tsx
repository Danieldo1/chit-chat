

import { userProps } from '@/types'
import React from 'react'
import Image from 'next/image'
import { SearchIcon } from '@/utils/icons'

const Searchbar = ({user}: {user: userProps}) => {

  return (
    <div className='flex gap-4 '>
        <div className='avatar online py-1'>
            <div className='w-10 rounded-full ring '>
                <Image src={user?.imageId || 'https://robohash.org/user.png'} alt='avatar' width={256} height={256} className='rounded-full' />
            </div>
        </div>
        
        <div className='relative w-full '>
            <input type='text' placeholder='Search' className='input input-bordered w-full pl-8 rounded-full bg-gray-100 placeholder:text-gray-600' />
            <div className='w-6 h-6 absolute top-1/2 left-5 -translate-x-1/2 -translate-y-1/2'>
            <SearchIcon  />
            </div>
        </div>
    </div>
  )
}

export default Searchbar