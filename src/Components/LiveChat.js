import React,{useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ChatMessage from './ChatMessage'
import {addMessage} from "../utils/chatSlice"
import { generateRandomName ,genrateRandomMessage} from '../utils/helper'
import {OFFSET_LIVE_CHAT} from "../utils/Constants"

const LiveChat = () => {
  const dispatch = useDispatch();
  const chatData = useSelector(store => store.chat.message)
  const [inputData,setInputData] = useState("")
  useEffect(()=>{
      const i = setInterval(()=>{
         dispatch(addMessage({
             name: generateRandomName(),
             message:`${genrateRandomMessage(OFFSET_LIVE_CHAT)} 🚀`
         }))
      },500)

      return ()=>{
        clearInterval(i)
      }
  },[])

  const onClickSubmitButton = (e) =>{
     e.preventDefault()
     dispatch(addMessage({
        name:"Snehil",
        message:inputData
     }))
     setInputData("")
  }
  return (
    <>
    <span className='ml-2 mr-2 font-bold'>Live Chat</span> 
    <div className='ml-2 mr-2 p-2 w-full h-[500px] border border-black bg-gray-100 rounded-lg overflow-y-scroll flex flex-col-reverse'>
        
        {
            chatData?.map((chat,index)=>{
                return(
                  <ChatMessage name={chat?.name} message={chat?.message} key={index} />
                )
            })
        }
        </div>
     <form className='w-full p-1 m-1 rounded-lg shadow-lg bg-gray-100' onSubmit={(e)=>onClickSubmitButton(e)}>
        <input value={inputData} type="text" onChange={(e)=>setInputData(e.target.value)} className='w-3/4 mx-2' placeholder='Type Something...' 
        />
        <button className='m-1 p-1 bg-green-500 text-white rounded-lg font-bold' >Submit</button>
     </form>
   </>
  )
}

export default LiveChat