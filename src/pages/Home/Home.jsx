import React, { useState } from 'react'
import { Sidebar } from '../../components/Sidebar/Sidebar'
import { Chat } from '../../components/Chat/Chat'
import { TitleIcon } from '../../icons/Icons'

export const Home = () => {
  const [open, setOpen] = useState(true) 
  const sideBar = () => {
    // setOpen(setOpenSidebar)

  }
  // console.log("open", setOpenSidebar)
  return (
    <>
      <div className='flex justify-center items-center w-full h-screen bg-blue-50'>
        <div className=' flex  shadow-xl bg-white overflow-hidden lg:w-[60%]  w-[100%] lg:h-[80%] h-full   rounded-xl'>
          <div className={`lg:w-1/3 lg:border-r ${open && "sm:block hidden w-full"}`}>
            <Sidebar sideBar={sideBar} />
          </div>
          <div className={`lg:w-2/3 ${!open && "sm:block hidden w-full"}` }>
            <Chat setOpenSidebar={"setOpenSidebar"} />
          </div>
        </div>
      </div>

    </>
  )
}
