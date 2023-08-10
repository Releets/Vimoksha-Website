import React, { useEffect, useState, useRef } from 'react';

import Navbar from './Components/Navbar';
import Homebody from './Components/Homebody';
import Banner from './Components/Banner';
import HeaderInfoBox from './Components/HeaderInfoBox';
import MusicPage from './Components/MusicPage';
import PortfolioPage from './Components/PortfolioPage';
import ContactPage from './Components/ContactPage';
import Footer from './Components/Footer';

import {Parallax, ParallaxLayer} from '@react-spring/parallax'

import './Styles/App.css';
import './Styles/banner.css'
import './Styles/navbar.css'
import './Styles/homebody.css'
import './Styles/headerinfobox.css'
import './Styles/musicpage.css'

import './Styles/portfoliopage.css'
import './Styles/portfoliocard.css'
import './Styles/eventgallery.css'

import './Styles/contactpage.css'

import bannerimg1 from './Media/emina-gray1.jpg'
import bannerimg2 from './Media/emina-veil1.jpg'



function App() {

  const ref = useRef();
  document.title = '~ V I M O K S H A ~';

  return (
    <div className="App">
      <Parallax pages={7.3} ref={ref}>
        <ParallaxLayer offset={0} factor={1} speed={0.5}>
          <Navbar/>
          <Banner/>
          <br></br><br></br>
          <HeaderInfoBox/>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.1} factor={1.2}
        style={{
          backgroundImage: `url(${bannerimg1})`,
          backgroundSize: 'cover'
        }}> 
        </ParallaxLayer>
        <ParallaxLayer offset={1.9} speed={1.3}>
          <Homebody/>  
        </ParallaxLayer>
        <ParallaxLayer offset={2.6} speed={1} factor={2.2}
        style={{
          backgroundImage: `url(${bannerimg2})`,
          backgroundSize: 'cover'
        }}>
        </ParallaxLayer>
        <ParallaxLayer offset={3} speed={-0.2}>
          <MusicPage/>
        </ParallaxLayer>
        <ParallaxLayer offset={5}
        style={{
          backgroundColor: '#662c2c'
        }}>
          <PortfolioPage/>
        </ParallaxLayer>
        <ParallaxLayer offset={6}>
          <ContactPage/>
        </ParallaxLayer>
        <ParallaxLayer offset={7} factor={0.3}
        style={{
          backgroundImage: `linear-gradient(#2F1728, black)`,
        }}>
          <Footer/>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}
// Social media links in footer?
// Credit to imgs etc in footer

export default App;
