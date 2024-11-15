import React, { useState } from 'react'
import { TitleIcon } from '../../icons/Icons'
import { ChartNoAxesCombined, FolderClosed, LayoutGrid, Phone, Settings, Users } from 'lucide-react'
import { NavLink } from 'react-router-dom'

export const Sidebar = () => {
  const sideTitle = [
    { name : "Dashboard" , icon : <LayoutGrid />},
    { name : "Analytics" , icon : <ChartNoAxesCombined  />},
    { name : "Files" , icon : <FolderClosed  />},  
    { name : "Call" , icon : <Phone />},  
    { name : "Community" , icon : <Users />},  
    { name : "Settings" , icon : <Settings />},  

  ]
  const [clickSidebar , setClickSidebar] = useState(false)
  return (
    <>
      <div className=' flex flex-col gap-6  items-center w-1/6 h-screen border-r border-primary ' >
        <div className='p-6 border-b border-primary w-full flex justify-center'>
            <TitleIcon width={""} height={""}  />
        </div>
        <div className='w-full flex flex-col mt-6 gap-8 justify-start items-center '>
          {sideTitle.map((item , index) => (
            <div onClick={() => setClickSidebar(!clickSidebar)} className='w-full flex flow-row  gap-4 justify-between cursor-pointer' >
          <NavLink to={`#`} className={`flex items-center hover:bg-gray-300 gap-10 rounded-xl  w-11/12 p-4  ml-5  ${clickSidebar ? "bg-white text-primary" : ""}`}>
            {item.icon}
            <h1 className='text-xl font-medium'>{item.name}</h1>
          </NavLink>
          <div className='bg-primary rounded-l-xl w-1/12'>
          </div>
            </div>
          ))}
         
          
        </div>

      </div>
    </>
  )
}
