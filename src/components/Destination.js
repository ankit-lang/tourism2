import React from 'react'
import "./Destination.css"
import Destinationdata from './Destinationdata'
import  mountain1  from "../Assets/1.jpg"
import  mountain2  from"../Assets/2.jpg"
import  mountain3 from "../Assets/3.jpg"
import  mountain4  from"../Assets/4.jpg"

// import  mountain
//  "../Assets/1.jpg"
const Destination = () => {
  return (
    <div>
      <div className="destination">
        <h1>Popular Destination</h1>
        <p>Tour give you opportunity to see a lot, within a time frame</p>
      </div>
    
      <Destinationdata
      className="block"
        heading ="Thailand"
        text ="  Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, dicta. Magnam fuga, harum quasi dolor ipsa fugit pariatur rerum neque voluptas libero, nulla reiciendis impedit corrupti. Maxime eos deserunt distinctio." 
        img1 ={mountain1}
        img2 ={mountain2}
      />
      <Destinationdata
      className='block-reverse'
        heading ="Australia"
        text ="  Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, dicta. Magnam fuga, harum quasi dolor ipsa fugit pariatur rerum neque voluptas libero, nulla reiciendis impedit corrupti. Maxime eos deserunt distinctio." 
        img1 ={mountain3}
        img2 ={mountain4}
      />

    </div>
  )
}

export default Destination
