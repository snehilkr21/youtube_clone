import React from 'react'
import Sidebar from './Sidebar'
import Maincontainer from "./Maincontainer"
import { Outlet } from 'react-router-dom'
function Body() {
  return (
    <div className='flex'>
        <Sidebar/>
        {/* <Maincontainer/> */}
        <Outlet/>
    </div>
  )
}

export default Body