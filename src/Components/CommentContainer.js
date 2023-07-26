import React from 'react'

const data=[{
    name:"Gops",
    text :"JScript was first released in 1996, alongside initial support for CSS and extensions to HTML. Each of these implementations was noticeably different from their counterparts in Navigator",
    replies: [
       {
        name:"Snehil",
        text :"During these formative years of the Web, web pages could only be static, lacking the capability for dynamic behavior after the page was loaded in the browser. ",
        replies : [
            {
                name:"Queen",
                text :"Netscape management soon decided that the best option was for Eich to devise a new language, with syntax similar to Java and less like Scheme or other extant scripting languages",
                replies :[]  
            }
        ]
       },
       {
        name:"King",
       text :"JScript was first released in 1996, alongside initial support for CSS and extensions to HTML. Each of these implementations was noticeably different from their counterparts in Navigator",
       }
    ]
}]
const Comment = ({ data}) =>{
   const {name , text , replies} = data;
   return(
     <div className='flex shadow-sm bg-gray-100 rounded-lg p-2 my-2' >
          <img
            className='w-12 h-12'
            alt="user"
            src="https://as2.ftcdn.net/v2/jpg/02/29/75/83/1000_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg"
          />
          <div className='px-3'>
            <p className='font-bold'>{name}</p>
            <p>{text}</p>
          </div>
     </div>
   )
}

const CommentsList = ({comments}) =>{
  return comments?.map((comment,index)=>{
       return(
       <div  key={index}>
           <Comment data={comment} />
           <div className='pl-5 border border-l-black ml-5'>
                 <CommentsList  comments={comment?.replies} />
           </div>
       </div>
       ) 
  })
}

const CommentContainer = () => {
  return (
    <div className='m-5 p-2'>
          <h1 className='text-2xl font-bold'>Comment: </h1>
          <CommentsList comments={data}/>
    </div>
  )
}

export default CommentContainer