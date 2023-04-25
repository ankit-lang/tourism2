import React from 'react'
import Navbar from '../components/navbar'
import Hero from '../components/Hero'
import Aboutimg from "../../src/Assets/night.jpg";
import Footer from '../components/Footer';
import Trip from '../components/Trip';
const Service = () => {
  return (
    <div>
       <Navbar/>
       <Hero
        heroimg ={Aboutimg}
        title="Service"
       />
       <Trip/>
        <Footer/>
    </div>
  )
}

export default Service
