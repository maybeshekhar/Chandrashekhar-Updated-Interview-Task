import React from 'react'
import DisplaySection from './components/DisplaySection';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Foooter from './components/Foooter';

const Home = () => {
  return (
    <div>
        <Header />
        <HeroSection />
        <br /> <br />
        <DisplaySection />
        <Foooter />
    </div>
  )
}

export default Home