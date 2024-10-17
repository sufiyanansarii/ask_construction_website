import React from 'react'
import './Homepage.css'
import ThemeToggle from "../ThemeToggle/ThemeToggle.js";
import CursorFollower from '../CursorFollower/CursorFollower.js';
import Header from '../Header/Header.js';
import Information from '../Information/Information.js';
import Runningproject from '../Runningproject/Runningproject.js';
import Projectpackery from '../Projectpackery/Projectpackery.js';
import Letestblogs from '../Letestblogs/Letestblogs.js';
import Footer from '../Cardcomponent/Footer/Footer.js';





const Homepage = () => {
  return (
    <div className='home'>
      
     
      <CursorFollower /> {/* Custom cursor component */}
      
      <Header />
      <Information/>
      <Runningproject/>
      <Projectpackery/>
     <Letestblogs/>
     <Footer/>
    </div>
  )
}

export default Homepage