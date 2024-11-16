import React from 'react'
import { Sidebar } from '../../components/Sidebar/Sidebar'
import { Chat } from '../../components/Chat/Chat'
import { TitleIcon } from '../../icons/Icons'

export const Home = () => {
  return (
    <>
      <div className='flex justify-center items-center h-screen bg-blue-50'>
        <div className=' flex border border-white shadow-xl bg-white overflow-hidden w-[60%] h-[80%] rounded-xl'>
          <div className='w-1/3 bg-primary'>
            <Sidebar />
          </div>
          <div className='w-2/3'>
            <Chat />
          </div>
        </div>
      </div>

    </>
  )
}
