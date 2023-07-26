import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

function Sidebar() {
   const isMenuOpen = useSelector((store)=>store.app.isMenuOpen)
   if(!isMenuOpen) return null; //early return
  return (
    <div className='w-96 p-5 shadow-lg'>
      <ul>
          <li className='my-8'>
            <Link to="/" className=''>
               <img alt="home" src="https://cdn-icons-png.flaticon.com/512/15/15766.png" className='h-12 w-16'/> 
            </Link>
          </li>
          <li className='my-20 '>
            <Link to="https://www.youtube.com/shorts">
            <img alt="shorts" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJmrkoI8XdFWTQctABwAJzvrut5m1owbmdRGHCZNeE&s" className='h-12 w-16'/>
            </Link>
          </li>
          <li className='my-20'>
            <Link to="https://www.youtube.com/feed/storefront?bp=ogUCKAI%3D">
            <img alt="video" src="https://www.gstatic.com/youtube/img/tvfilm/clapperboard_profile.png" className='h-12 w-20'/>
            </Link>
          </li>
          <li className='my-20'>
            <Link to="https://www.youtube.com/channel/UC-9-kyTW8ZkZNDHQJ6FgpwQ">
            <img alt="music" src="https://yt3.googleusercontent.com/vCqmJ7cdUYpvR0bqLpWIe8ktaor4QafQLlfQyTuZy-M9W_YafT8Wo9kdsKL2St1BrkMRpVSJgA=s176-c-k-c0x00ffffff-no-rj-mo" className='h-12 w-8'/>
            </Link>
          </li>
       </ul>
      
    </div>
  )
}

export default Sidebar