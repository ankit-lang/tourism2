import React from 'react'
// import "../components/Asse"
import "./Hero.css"
const Hero = (props) => {
  return (
    <div>
      <div className={props.cName}>
        <img src={props.heroimg} alt="none" />
        <div className="hero-text">
            <h1>{props.title}</h1>
            <p>{props.text}</p>
            <a href={props.url} className={props.btn}>{props.btntxt} </a>
        </div>
      </div>
    </div>
  )
}

export default Hero
