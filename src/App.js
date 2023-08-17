import React, { useEffect, useState, useRef } from 'react';

import Navbar from './Components/Navbar';
import Homebody from './Components/Homebody';
import Banner from './Components/Banner';
import LargeBannerImage from './Components/LargeImageBanner';
import HeaderInfoBox from './Components/HeaderInfoBox';
import MusicPage from './Components/MusicPage';
import PortfolioPage from './Components/PortfolioPage';
import ContactPage from './Components/ContactPage';
import Footer from './Components/Footer';

import {Parallax, ParallaxLayer} from '@react-spring/parallax'

import './Styles/App.css';
import './Styles/banner.css'
import './Styles/navbar.css'
import './Styles/headerinfobox.css'

import './Styles/homebody.css'
import './Styles/carousel.css'
import './Styles/largebannerimage.css'
import './Styles/songlist.css'

import './Styles/musicpage.css'

import './Styles/portfoliopage.css'
import './Styles/portfoliocard.css'

import './Styles/contactpage.css'

//import bannerimg1 from './Media/Photoshoots/emina-gray1.jpg'
import bannerimg2 from './Media/Photoshoots/emina-veil1.jpg'
import transitionimg1 from './Media/Flowers/flowers-transition.png'


function App() {
  const ref = useRef();
  document.title = '~ V I M O K S H A ~';

  const scrollToRef = (loc) => {
      ref.current.scrollTo(loc);
  }

  return (
    <div className="App">
      <Parallax pages={8} ref={ref}>
        <ParallaxLayer offset={0} factor={1} speed={-0.3}>
          <Navbar scrollFunc={scrollToRef}/>
          <Banner/>
          <HeaderInfoBox/>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={1.2}>
          <Homebody/>  
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={1} factor={3}>
          <LargeBannerImage image={bannerimg2}/>
        </ParallaxLayer>
        <ParallaxLayer offset={3.3} speed={-0.2}>
          <MusicPage/>
        </ParallaxLayer>
        <ParallaxLayer offset={5} factor={1.5}>
          <PortfolioPage/>
        </ParallaxLayer>
        <ParallaxLayer offset={4.3} speed={1.5} factor={1}>
            <div className='transition-container'>
              <img src={transitionimg1} className='transitionimg'></img>
            </div>
        </ParallaxLayer>
        <ParallaxLayer offset={6.5}>
          <ContactPage/>
        </ParallaxLayer>
        <ParallaxLayer offset={7.5} factor={0.2}>
          <Footer/>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}
// Social media links in footer?
// Credit to imgs etc in footer
// <a href="https://www.vecteezy.com/free-png/rose">Rose PNGs by Vecteezy</a>
// <a href="https://www.freepnglogos.com/pics/flower-watercolor">Flower Watercolor from freepnglogos.com</a>

export default App;
