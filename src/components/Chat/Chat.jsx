import { Ellipsis, UserPlus, Video } from 'lucide-react'
import React from 'react'
import { CgUserAdd } from 'react-icons/cg'
import { TitleIcon } from '../../icons/Icons'

export const Chat = () => {
  return (
      <div className='flex justify-between items-center h-[86px]  p-4'>
        <div className='flex items-center gap-2'>
          <img src="https://avatar.iran.liara.run/public/40" className='w-10 h-10 rounded-full' alt="" />
          <h3 className=''>Abdellatif</h3>
        </div>
        <div className='flex gap-4'>
          <Video />
          <UserPlus />
          <Ellipsis />
        </div>
      </div>
  )
}
