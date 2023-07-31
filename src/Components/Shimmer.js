import React from 'react'

const Shimmer = () => {
  return (
    <div className='flex flex-wrap col-span-11'>
       
       { Array(10).fill("").map(()=>{
          return(
            <div className='p-2 m-2 w-72 h-80 shadow-lg bg-gray-300' key={Math.random()}></div>
          )
        })
       }
   </div>
  )
}

export default Shimmer