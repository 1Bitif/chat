import React, { useState } from 'react'
import { Navbar } from '../Navbar/Navbar'
import { Search } from '../Search/Search'
import { Chats } from '../Chats/Chats'
export const Sidebar = ({sideBar}) => {

  return (
    <div className='bg-white w-full'>
      <Navbar />
      <Search />
      <div className='flex flex-col'>
      <Chats />
      </div>
    </div>
  )
}
