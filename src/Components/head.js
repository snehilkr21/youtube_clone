import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/appSlice'
import { Link, useRoutes } from 'react-router-dom'
const Head = () => {

  const dispatch = useDispatch()
  const toggleMenuHandler = () =>{
    dispatch(toggleMenu())
  }
  return (
    <div className='grid grid-flow-col p-2 m-2 shadow-lg'>
        <div className='flex col-span-1'>
            <img
              onClick= {()=>(toggleMenuHandler())}
              className="h-12 cursor-pointer" 
              alt="hamburger-menu" 
              src="https://static.vecteezy.com/system/resources/previews/002/292/406/original/hamburger-menu-line-icon-free-vector.jpg"
            />
           <a href="/"> <img className='h-12 mx-2' alt="youtube-icon" src="https://images.indianexpress.com/2017/08/youtube_logo_new-759.jpg"/></a> 
        </div>
        <div className='col-span-10 px-10 flex justify-center'>
            <input className='w-1/2 rounded-l-full border-4 border-black-500 p-1' type="text"/>
            <button className='rounded-r-full border-4 border-black-500 px-5 py-1 bg-gray-100'>🔍</button>
        </div>
        <div className='col-span-1' >
            <img className='h-8' alt="user-icon" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgu3Is6EWkzisekqHQhRNavQBc3ReX_g4ITUdbpFakTw&s"/>

        </div>
    </div>
  )
}

export default Head