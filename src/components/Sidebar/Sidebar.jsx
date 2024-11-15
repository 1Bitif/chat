import React from 'react'
import { TitleIcon } from '../../icons/Icons'

export const Sidebar = () => {
  return (
    <>
      <div className=' flex flex-col gap-6  items-center w-1/5 h-screen border-r border-primary ' >
        <div className='p-6 border-b border-primary w-full flex justify-center'>
            <TitleIcon width={""} height={""}  />
        </div>
        <div className='w-full flex flex-col justify-start items-center'>

        </div>

      </div>
    </>
  )
}
