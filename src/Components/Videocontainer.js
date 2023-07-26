import React, { useEffect, useState } from 'react'
import {YOUTUBE_VIDEO_API} from "../../src/utils/Constants"
import VideoCard from './VideoCard'
import { Link } from 'react-router-dom'
const Videocontainer = () => {
  const [videos , setVideos] = useState([])
  useEffect(()=>{
    getVideos()
  },[])
  async function getVideos() {
     let data = await fetch(YOUTUBE_VIDEO_API)
     data = await data.json()
     setVideos(data?.items)
  }
  return (
    <div className='flex flex-wrap px-14'>
      {
        videos?.map((video)=>{
          return(
            <Link key={video?.id} to={"/watch?v="+video?.id}><VideoCard key={video?.id} info={video}/></Link>
          )
        })
      }
      
    </div>
  )
}

export default Videocontainer