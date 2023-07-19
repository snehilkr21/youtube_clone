import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

function Sidebar() {
   const isMenuOpen = useSelector((store)=>store.app.isMenuOpen)
   if(!isMenuOpen) return null; //early return
  return (
    <div className='w-48 p-5 shadow-lg'>
      <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>Shorts</li>
          <li>Videos</li>
          <li>Live</li>
       </ul>
       <h1 className='font-bold pt-5'>Subscription</h1>
       <ul>
          <li>Nusic</li>
          <li>Sports</li>
          <li>Gaming</li>
          <li>Movie</li>
       </ul>
       <h1 className='font-bold pt-5'>Watch Later</h1>
       <ul>
          <li>Nusic</li>
          <li>Sports</li>
          <li>Gaming</li>
          <li>Movie</li>
       </ul>
    </div>
  )
}

export default Sidebar