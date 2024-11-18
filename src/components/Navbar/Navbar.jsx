import React from 'react'
import { TitleIcon } from '../../icons/Icons'
import { LogOut } from 'lucide-react'

export const Navbar = () => {
  return (
    <>
        <div className='flex justify-between items-center py-4 px-2  bg-white '>
            <div>
                <TitleIcon width="100" height="54"  />
            </div>
            <div className='flex gap-4 items-center justify-center'>
                <div>
                    <img src="https://avatar.iran.liara.run/public/40" className='w-10 h-10 rounded-full' alt="Image" />
                </div>
                <div>
                    <h1>Abdellatif Aajli</h1>
                </div>
                <div>
                    <button className=' text-gray-600 hover:text-red-600 px-2 py-1 rounded-full'><LogOut /></button>
                </div>
            </div>
        </div>
    </>
  )
}
