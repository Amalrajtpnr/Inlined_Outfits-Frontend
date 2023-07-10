import React from 'react'
type props ={
    colour : string;
    bordercolour? : string;
    colourName : string;
}

function Colour({colour,bordercolour,colourName}:props) {
  return (
    <div className='h-[100%] w-[25%] flex flex-col justify-between items-center'> 

    <div style={{backgroundColor:colour, borderColor:bordercolour}} className="h-[35px] w-[35px] rounded-full border-[1px] "></div>
    <h1 className="text-[10px]">{colourName}</h1>
    
    </div>
  )
}

export default Colour