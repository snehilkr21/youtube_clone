import React from 'react'

const ChatMessage = ({name,message}) => {
  return (
    <div className='flex items-center shadow p-2'>
         <img className='h-8' alt="user-icon" 
           src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgu3Is6EWkzisekqHQhRNavQBc3ReX_g4ITUdbpFakTw&s"
         />
         <span className='font-bold px-2'>{name}</span>
         <span>{message}</span>
    </div>
  )
}

export default ChatMessage