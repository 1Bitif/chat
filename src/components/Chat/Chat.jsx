import { ArrowLeft, Ellipsis, UserPlus, Video } from 'lucide-react'
import React, { useRef, useState } from 'react'
import { CgUserAdd } from 'react-icons/cg'
import { TitleIcon } from '../../icons/Icons'
import { Messages } from '../Messages/Messages'
import { Input } from '../Input/Input'

export const Chat = ({setOpen}) => {
  const [openDetails, setOpenDetails] = useState(false)
  const handleOpenClick = () => {
    setOpenDetails(!openDetails)
  }

  const handleBackToSidebar = () => {
    setOpen(false)
  }
  return (
    <div className='flex flex-col  h-[100%]'>
      <div className='flex justify-between items-center h-[86px]  border-b hover:bg-gray-200 p-4'>
        <div className='flex items-center gap-2'>
          <div onClick={handleBackToSidebar} className='lg:hidden block '>
          <ArrowLeft />
          </div>
          <img src="https://avatar.iran.liara.run/public/40" className='w-10 h-10 rounded-full' alt="" />
          <h3 className=''>Abdellatif Aajli</h3>
        </div>
        <div className='flex gap-4'>
          <Video />
          <UserPlus />
          <div className='relative cursor-pointer ' onClick={handleOpenClick}>
            <Ellipsis />
            {
              openDetails && <div className='absolute top-7 border right-0 bg-white p-2 rounded-lg shadow-lg '>
                <div className='flex flex-col gap-2 items-center w-40 justify-center  '>
                  <h3 className='px-4 py-2 hover:bg-gray-300 rounded-xl w-full text-center'>Add to Group</h3>
                  <h3 className='px-4 py-2 hover:bg-gray-300 rounded-xl w-full text-center'>Add to Group</h3>
                  <h3 className='px-4 py-2 hover:bg-gray-300 rounded-xl w-full text-center'>Add to Group</h3>
                </div>
              </div>
            }
          </div>
        </div>
      </div>
      <div className='flex flex-col  h-full'>
        <div className='p-4 h-[80%]   overflow-y-scroll'>
          <Messages />
        </div>
        <div className=' h-[20%]   border bg-gray-100'>
          <Input />
        </div>
      </div>
    </div>
  )
}
