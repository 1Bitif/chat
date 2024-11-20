import React from 'react'
import { Message } from '../Message/Message'

export const Messages = () => {
  return (
    <div className='flex flex-col  gap-4 p-2' >
      <Message  />
      <Message  />
      <Message  />
      <Message  />
    </div>
  )
}
