import React, { useState } from 'react'
import { TitleIcon } from '../../icons/Icons'
import { ChartNoAxesCombined, FolderClosed, LayoutGrid, Phone, Settings, Users } from 'lucide-react'
import { NavLink } from 'react-router-dom'

export const Sidebar = () => {

  return (
    <>
      <div className=' flex   flex-col gap-6  items-center w-full h-screen ' >
        <div className='p-6  w-full flex justify-center' >
          <TitleIcon width={""} height={""} />
        </div>
        <div className='w-10/12 flex rounded-[30px] bg-primary  justify-center items-center '>
            <div>
              
            </div>
        </div>



      </div>
    </>
  )
}
