import React from 'react'

export const Chats = () => {
  return (
    <div className='w-full flex flex-row justify-start gap-4 px-4 py-6 items-start hover:bg-gray-100  cursor-pointer '>
        <div className='flex flow-row justify-center items-center gap-2 '>
          <img 
            src="https://avatar.iran.liara.run/public/40" 
            alt="" 
            className='w-12 h-12 rounded-full' 
          />
        <div>
          <h1 className='font-semibold'>Abdellatif Aajli</h1>
        </div>
        </div>
    </div>
  )
}
