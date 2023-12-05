'use client'

import { fetchUser } from '@/lib/fetchers'
import { useUser } from '@/store/userStore'
import React, { useEffect } from 'react'
import {useCookies} from 'react-cookie'
import { shallow } from 'zustand/shallow'
import Searchbar from './Searchbar'
import ChatList from './ChatList'

const Sidebar = () => {
    const [cookie, setCookie] = useCookies(["user"]);

    const { myUser, setUser } = useUser((state) => ({ myUser: state.myUser, setUser: state.setUser }), shallow);
    
    useEffect(() => {
        fetchUser(cookie, setUser)
    },[cookie.user])

    
  return (
    <div className='w-full md:block sidebar z-10 border border-r-2 border-slate-300 md:w-1/2 lg:w-1/3 p-3 bg-white h-screen '>
        {/* searchbae compt */}
        <Searchbar user={myUser}  />

        {/* chat list */}
        <ChatList />
    </div>
  )
}

export default Sidebar