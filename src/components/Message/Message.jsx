import React from 'react'

export const Message = () => {
  return (
    <>
      <div className='flex items-start  gap-6 w-1/2'>
        <div className='flex flex-col  gap-1'>
          <div className='w-[3rem] flex justify-center items-center' > 
            <img src="https://avatar.iran.liara.run/public/87" alt=""  className='w-10 h-10 rounded-full'/>
          </div>
          <div>
            <p className='text-xs text-gray-400'>Just Now</p>
          </div>
        </div>
        <div className='flex rounded-lg rounded-tl-none bg-secondary text-white py-2 px-4 font-medium '>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis delectus deserunt quasi distinctio! Eveniet optio quam corporis eius! Repudiandae veniam ab sint repellat impedit vel at laudantium ea blanditiis minima.</p>
        </div>
      </div>
    </>
  )
}
