import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Heroimg2 from '../components/Heroimg2'
import Aboutco from '../components/Aboutco'



const About = () => {
  return (
    <div>
      
      
      <Navbar/>
      <Heroimg2 heading="ABOUT" text="Us"/>
     <Aboutco/>
      <Footer/>
    </div>
  )
}

export default About