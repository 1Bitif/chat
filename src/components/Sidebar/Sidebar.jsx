import React, { useState } from 'react'
import { Navbar } from '../Navbar/Navbar'
import { Search } from '../Search/Search'
export const Sidebar = () => {

  return (
    <div className='bg-white'>
      <Navbar />
      <Search />
    </div>
  )
}
