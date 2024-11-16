import React, { useState } from 'react'
import { Navbar } from '../Navbar/Navbar'
import { Search } from '../Search/Search'
import { Chats } from '../Chats/Chats'
export const Sidebar = () => {

  return (
    <div className='bg-white'>
      <Navbar />
      <Search />
      <Chats />
    </div>
  )
}
