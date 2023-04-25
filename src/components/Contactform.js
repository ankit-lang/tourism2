import "./Contactform.css"
import React from 'react'

const Contactform = () => {
  return (
    <div>
      <div className="form">
        <h1>Send a message to us!</h1>
      </div>
      <form action="">
        <input type="text" placeholder="Enter name" name="" id="" />
        <input type="text" placeholder="Enter email" name="" id="" />
        <input type="text" placeholder="Enter Subject" name="" id="" />
        <textarea type="text" rows="4" placeholder="Enter Message" name="" id="" />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Contactform
