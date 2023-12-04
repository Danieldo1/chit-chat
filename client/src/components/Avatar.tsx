'use client'

import React from 'react'
import Image from 'next/image'
import { AvatarProps } from '@/types'

const Avatar = ({avatar, setAvatar}:AvatarProps) => {
  return (
    <div onClick={()=>setAvatar((Math.random()*200).toFixed())} className="avatar cursor-pointer mx-auto mb-5 tooltip" data-tip='Click for a different avatar'>
        <div className='w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2'>
            <Image src={`https://robohash.org/${avatar}.png`} alt='avatar' width={256} height={256}/>
        </div>
    </div>
  )
}

export default Avatar

