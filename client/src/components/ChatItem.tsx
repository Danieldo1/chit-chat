import { userProps } from '@/types'
import Image from 'next/image'
import React from 'react'

const ChatItem = ({user}: {user: userProps}) => {
  return (
    <>
        <li className='flex gap-3 cursor-pointer hover:bg-slate-300 p-5 rounded-lg'>
            <div className='w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2'>
                <Image src={user.imageId || ''} alt='avatar' width={256} height={256} />
            </div>
        </li>
    </>
  )
}

export default ChatItem