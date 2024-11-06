import React, { useEffect } from 'react'
import Navbar from './Components/Header/Navbar/Navbar'
import HeroSection from './Components/Header/Hero/Hero'
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
    </div>
  )
}

export default App
