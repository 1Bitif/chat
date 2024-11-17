import { ImagePlus, Paperclip, SendHorizontal } from 'lucide-react'
import React from 'react'

export const Input = () => {
  return (
    <div className='flex justify-start px-4 w-full gap-4'>
      <div className='flex w-full relative h-full py-4'>
        <input type="text" placeholder='Type here' className='rounded-2xl border w-full px-4 py-2 bg-white border-b  border-gray-300 text-gray-900 text-sm  focus:outline-none focus:border-primary block ' />
      </div>
      <div className='flex gap-4 items-center justify-center'>
        <button>
          <Paperclip />
        </button>
        <button>
          <ImagePlus />
        </button>
        <button className='bg-primary text-white p-2  rounded-full hover:bg-transparent transition duration-300 ease-in-out hover:text-primary'>
        <SendHorizontal />
        </button>
      </div>
    </div>
  )
}
