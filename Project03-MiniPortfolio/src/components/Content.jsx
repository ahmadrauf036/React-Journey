import React from 'react'

const Content = ({
    Cdirection="row"/* row or row-reverse */,
    Ddirection="end" /* start or end*/, 
    img="https://img.freepik.com/free-photo/laptop-with-post-it-note-opened-lid_23-2148169537.jpg",
    h1="Download Now!",h2="lorem ipsum dolor",buttonText="Download now"

}) => {
    
  return (
    <div id="content" className='h-[90vh] w-screen grid place-items-center'>
      <div id="content-box" className={`h-4/5 w-4/5 flex flex-${Cdirection} justify-around `}>
        <img className='h-4/6' src={img} alt="" />
        <div id="data" className={`flex flex-col items-${Ddirection}`} >
          <h1 className='mb-2 text-5xl font-black'>{h1}</h1>
          <h2 className='mb-2 text-3xl font-bold'>{h2}</h2>
          <button className='p-3 w-50 bg-amber-700 rounded-2xl text-white'><i  className="fa-solid fa-play text-white mr-2"></i>{buttonText}</button>
        </div>
      </div>
    </div>
  )
}

export default Content