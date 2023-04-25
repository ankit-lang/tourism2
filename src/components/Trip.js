import "./Trip.css"
import React from 'react'
import Tripdata from "./Tripdata"
import trip1 from "../Assets/5.jpg"
import trip2 from "../Assets/6.jpg"
import trip3 from "../Assets/8.jpg"
const Trip = () => {
  return (
    <div>
      <div className="trip">
        <h1>Recent Trips</h1>
        <p>You can discover unique destinaton using Google Maps</p>
        <div className="tripcards">
        
        <Tripdata
            image={trip1}
            heading="Trip in Indonesia"
            text ="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, ullam? Et neque vero facere nihil minus at officiis quae fugit dicta hic cumque sit similique earum nam error, quos veritatis."
        />
        <Tripdata
            image={trip2}
            heading="Trip in India"
            text ="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, ullam? Et neque vero facere nihil minus at officiis quae fugit dicta hic cumque sit similique earum nam error, quos veritatis."
        />
        <Tripdata
            image={trip3}
            heading="Trip in France"
            text ="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, ullam? Et neque vero facere nihil minus at officiis quae fugit dicta hic cumque sit similique earum nam error, quos veritatis."
        />
        </div>

      </div>
    </div>
  )
}

export default Trip
