import React from 'react'
import { Cards } from './Cards'
export const Tours = ({tours,removeTour}) => {

  return (
    <div className='container'>
    <div className='title'>Plan With Me</div>
    <div className='cards'>
       {
        tours.map((tour)=>{
            return <Cards key ={tour.id}  {...tour} removeTour={removeTour}></Cards>
        })
       }
    </div>
    </div>
  )
}
