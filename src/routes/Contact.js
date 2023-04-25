import React from 'react'
import Navbar from '../components/navbar'
import Hero from '../components/Hero'
import serviceimg from "../../src/Assets/2.jpg";
import Footer from '../components/Footer';
import Contactform from '../components/Contactform';

const Contact = () => {
  return (
    <div>
       <Navbar/>
       <Hero
       heroimg={serviceimg}
        title ={Contact}

       />
       <Contactform/>
       <Footer/>
    </div>
  )
}

export default Contact
