import React, { useState } from 'react'
import { Navbar } from '../Navbar/Navbar'
import { Search } from '../Search/Search'
import { Chats } from '../Chats/Chats'
export const Sidebar = ({setOpen}) => {

  return (
    <div className='bg-white w-full'>
      <Navbar />
      <Search />
      <div className='flex flex-col'>
      <Chats setOpen={setOpen}/>
      </div>
    </div>
  )
}
