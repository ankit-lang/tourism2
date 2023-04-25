import React from 'react'
import "../components/Contactform.css"

const Signup = () => {
  return (
    <div>
      <div className="signup">
        <form action="" >
            <input type="text" placeholder='Enter Email id'/>
            <input type="text" placeholder='Enter username'/>
            <input type="password" placeholder='Enter Password'/>
            <button>Sign Up</button>
        </form>
      </div>
    </div>
  )
}

export default Signup
