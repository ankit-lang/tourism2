import React from 'react'
import Navbar from '../components/navbar'
import Hero from '../components/Hero'
import Destination from '../components/Destination'
import Trip from '../components/Trip'
import Footer from '../components/Footer'
import boat from '../Assets/img.jpg'

const Home = () => {
  return (
    <div>
       <Navbar/>
       <Hero
        cName = "herocls" 
        heroimg = {boat}
        title= "Your journey your story"
        text ="choose your destinany"
        btntxt= "Travel plan"
        btn="show"
        url="/"


       />
       <Destination/>
       <Trip/>
       <Footer/>
    </div>
  )
}

export default Home
