import React from 'react'
import Button from './Button'
function Buttonlist() {
  const list = ["All","Gaming","Songs","News","Cooking","Live","Gadgets","Moon"]
  return (
    <div className='flex px-14'>
      {
        list.map((e)=>{
           return(<Button key={e} name={e}/>)
        })
      }
    </div>
  )
}

export default Buttonlist