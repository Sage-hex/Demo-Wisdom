import React, { useEffect } from 'react'
import Navbar from './Components/Navbar/Navbar'
import HeroSection from './Components/Hero/Hero'
import About from './Components/About/About'
import AOS from 'aos';
import 'aos/dist/aos.css';



const App = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 }); // Adjust the duration for smoothness
  }, []);
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <About/>
    </div>
  )
}

export default App
