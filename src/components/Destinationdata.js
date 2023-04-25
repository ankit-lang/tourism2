import "./Destination.css"
import React from 'react'


const Destinationdata = (props) => {
  return (
    <div>
      
        <div className={props.className}>
            <div className="first-block">
                <h2>{props.heading}</h2>
                <p>{props.text}</p>

            </div>
            <div className="second-block">
                <img className='Img' src={props.img1} alt="img" />
                <img className='Img' src={props.img2 } alt="img" />
            </div>
        </div>
      </div>
    
  )
}

export default Destinationdata
