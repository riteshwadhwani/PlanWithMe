import React, { useState } from 'react'

export const Cards = ({id,name,info,image,price ,removeTour}) => {
    const [readmore,setReadmore] =useState(false);
    const description = readmore ? info: `${info.substring(0,200)}...`;
    function readmoreHandler(){
        setReadmore(!readmore);
    }
  return (
    <div className='card'>
        <img src={image} className="image"/>
       <div className='tour-info'>
       <div className="tour-details">
           <div className='tour-price'>{price}</div>
           <h2 className='tour-name'>{name}</h2>
        </div>
        <div className='description'>
        {description}
            <span className='read-more' onClick={readmoreHandler}>
            {readmore ? `showless` : `readmore`}
            </span>
        </div>
       </div>
        <button className='btn-red' onClick={()=>removeTour(id)}>Not Intrested</button>
    </div>
  )
}
