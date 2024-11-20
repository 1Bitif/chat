import React, { useState } from 'react'

export const Message = () => {
  const [friend, setFriend] = useState(true)
  return (
    <>
      <div className={`flex ${friend ? 'flex-row ' : 'flex-row-reverse'} items-start  lg:gap-6  gap-2`}>
        <div className='flex flex-col  gap-1'>
          <div className='w-[3rem] flex justify-center items-center' >
            <img src="https://avatar.iran.liara.run/public/87" alt="" className='w-10 h-10 rounded-full' />
          </div>
          <div>
            <p className='text-xs text-gray-400'>Just Now</p>
          </div>
        </div>
        <div className={`flex flex-col ${friend ? "items-start" : "items-end"} gap-1`}>
          <div className={`${friend ? 'bg-secondary text-white rounded-tl-none' : 'bg-primary text-white rounded-tr-none'} flex rounded-[20px]  py-2 px-4 font-medium lg:max-w-[40%] w-[60%]`}>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis delectus deserunt quasi distinctio! Eveniet optio quam corporis eius! Repudiandae veniam ab sint repellat impedit vel at laudantium ea blanditiis minima.</p>
          </div>
          <div className={`${friend ? 'bg-secondary text-white ' : 'bg-primary text-white '} flex rounded-[20px] p-0.5   lg:max-w-[40%] w-[60%]`}>
            <img src="https://images.pexels.com/photos/17060097/pexels-photo-17060097/free-photo-of-old-town-street-in-chachapoyas.jpeg?auto=compress&cs=tinysrgb&w=600" 
              className='w-full h-full rounded-[20px] '
            alt="" />
          </div>
        </div>
      </div>
    </>
  )
}
