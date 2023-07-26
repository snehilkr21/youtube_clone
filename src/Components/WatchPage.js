import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import {  useSearchParams } from 'react-router-dom'
import { closeMenu } from '../utils/appSlice'
import CommentContainer from './CommentContainer'
import LiveChat from "./LiveChat"

const WatchPage = () => {
    const [searchParams] = useSearchParams()
    const dispatch = useDispatch();
    const [videoDetails, setVideoDetails] = useState({})
    useEffect(()=>{
        dispatch(closeMenu())
        getVideoDetails()
    },[])
    const getVideoDetails = async () =>{
        let data = await fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id="+searchParams.get("v")+"&key=AIzaSyCxby1JFzXFzxukKA56rrBiTX23GInzaKA")
        data = await data.json()
        setVideoDetails(data?.items[0])
    }

//   const {title,channelTitle} = videoDetails?.items[0]?.snippet
  return (
    <div className='flex flex-col w-full'>
    <div className='px-5 py-5 flex w-full'>
        <div>
            <iframe 
            width="1000" 
            height="500" 
            src={"https://www.youtube.com/embed/"+searchParams.get("v")} 
            title="YouTube video player" frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowFullScreen>
            </iframe>
            <div>
                <span className='font-bold'>
                    {videoDetails?.snippet?.title} | {videoDetails?.snippet?.channelTitle} 
                </span>
            </div>
        </div>
        <div className='w-full'>
            <LiveChat/>
        </div>
    </div>
    <CommentContainer/>
    </div>
  )
}

export default WatchPage