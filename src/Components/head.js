import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../utils/appSlice'
import { YOUTUBE_SEARCH_API } from '../utils/Constants'
import { cacheResults } from '../utils/searchSlice'
const Head = () => {
  const searchCache = useSelector(store=>store.search)
  const [searchQuery , setSearchQuery] = useState("")
  const [suggestion,setSuggestions]= useState([])
  const [focusSuggestion,setFocusSuggestion] = useState(false)
  const dispatch = useDispatch()
  const toggleMenuHandler = () =>{
    dispatch(toggleMenu())
  }
  useEffect(()=>{
    const timer = setTimeout(()=>{
      if(Object?.keys(searchCache)?.includes(searchQuery)){
        
        setSuggestions(searchCache[searchQuery])
      }else{
        getSearchSuggestion()
      }
    },200) 
    return ()=>{
      clearTimeout(timer)
    }
  },[searchQuery])

  const getSearchSuggestion = async() =>{
       const data = await fetch(YOUTUBE_SEARCH_API+searchQuery)
       let json = await data.json();
       setSuggestions(json[1])
       dispatch(cacheResults({
          [searchQuery] : json[1]
       }))
  }
  return (
    <div className='grid grid-flow-col p-2 m-2 shadow-lg w-full'>
        <div className='flex col-span-1'>
            <img
              onClick= {()=>(toggleMenuHandler())}
              className="h-12 cursor-pointer" 
              alt="hamburger-menu" 
              src="https://static.vecteezy.com/system/resources/previews/002/292/406/original/hamburger-menu-line-icon-free-vector.jpg"
            />
           <a href="/"> <img className='h-12 mx-2' alt="youtube-icon" src="https://images.indianexpress.com/2017/08/youtube_logo_new-759.jpg"/></a> 
        </div>
        <div className='col-span-10 px-10 '>
          <div className=''>
            <input value={searchQuery} onChange={(e)=>{setSearchQuery(e.target.value)}} 
            className='w-1/2 rounded-l-full border-4 border-black-500 p-1' 
            type="text"
            onFocus={ ()=>{setFocusSuggestion(true)}}
            onBlur={ ()=>{setFocusSuggestion(false)}}
            />
            <button className='rounded-r-full border-4 border-black-500 px-5 py-1 bg-gray-100'>🔍</button>
          </div>
          {
            focusSuggestion &&
            <div className=' bg-white py-2 px-5 w-1/3 rounded-lg shadow-lg absolute'>
              <ul>
                {
                  suggestion?.map((e)=>{
                    return(
                        <li key={e} className='py-2 hover:bg-gray-100'>🔍 {e}</li>
                    )
                  })
                }
                
              </ul>
          </div>
           }
        </div>
        <div className='col-span-1' >
            <img className='h-8' alt="user-icon" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgu3Is6EWkzisekqHQhRNavQBc3ReX_g4ITUdbpFakTw&s" />

        </div>
    </div>
  )
}

export default Head