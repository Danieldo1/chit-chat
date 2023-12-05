'use client'

import React, { useState } from 'react'
import Avatar from './Avatar'
import { handleSubmit } from '@/lib/fetchers'
import { useRouter } from 'next/navigation'


const Form = () => {
    const [avatar, setAvatar] = useState((Math.random()*200).toFixed())
    const router = useRouter()
   
  return (
    <form onSubmit={(e)=>handleSubmit(e,router,avatar)} className="flex flex-col gap-4">
        <Avatar avatar={avatar} setAvatar={setAvatar} />
        <div className="flex flex-col gap-5 xl:flex-row">
            <div className="form-control w-full">
                <label className='label'><span className='label-text text-lg' >What is your name?</span></label>
                <input type='text' placeholder='John Doe' className='input input-bordered w-full ' required/>
            </div>
            <div className="form-control w-full">
                <label className='label'><span className='label-text text-lg' >What is your email?</span></label>
                <input type='text' placeholder='example@email.com' className='input input-bordered w-full ' required/>
            </div>
        </div>
        <button className="btn btn-primary">Login</button>
    </form>
  )
}

export default Form