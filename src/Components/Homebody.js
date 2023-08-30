import { useState, useRef, useEffect } from 'react'
import flowers from '../Media/Flowers/vineline3.png'

import Carousel from './Carousel';
import SongList from './SongList';

const carousel_images = [
    "https://images.pexels.com/photos/169647/pexels-photo-169647.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/313782/pexels-photo-313782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/773471/pexels-photo-773471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/632522/pexels-photo-632522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/777059/pexels-photo-777059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ];

export default function Homebody(){
    const [isVisible, setVisible] = useState(false);
    const domRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if(entry.isIntersecting){
                    setVisible(entry.isIntersecting);
                }
            });
        });
        observer.observe(domRef.current);
        return () => observer.unobserve(domRef.current);
    }, []);

    return <div style={{height: '100%'}}>
        <div className='vineline'>
            <div className='loadwrapper'> 
                <img src={flowers} className='flowerimage'></img>
            </div>
        </div>
        <div className="header">ABOUT</div>
        <div className='main'>
            <div className={`box about-left fade-in-section ${isVisible ? 'is-visible second-box' : ''}`} ref={domRef}>
                <div className='flower-bg-left'></div>
                <Carousel images={carousel_images}/>
            </div>
            <div className={`box about-center fade-in-section ${isVisible ? 'is-visible first-box' : ''}`} ref={domRef}>
                <section className='main-text'>
                   I am a singer, songwriter and perfomer with roots from Bosnia and Hercegovina, currently living in Norway.
                   I have been creating music since I was a small child, and it has always been
                   my biggest passion - my escape from reality and it is my greatest joy to create music
                   for myself and others to enjoy. Through my diverse origins, the many people I have worked with,
                   love for music and many, many years of experience, I have created a diverse and strong 
                   musical vocabulary. From ethnic folk music to modern pop, rock & roll to musicals and opera - there is 
                   close to nothing I don't enjoy working on. 
                   <br></br><br></br>
                    My artist portfolio includes stage, TV and Radio-perfomrances, awards and first-place medals in singing competitions,
                    and a collection recorded and published songs, all written, composed and performed by me.
                </section>
                    <div className='flower-bg-mid'> </div>
                
            </div>
            <div className={`box about-right fade-in-section ${isVisible ? 'is-visible third-box' : ''}`} ref={domRef}>
                <SongList/>
                <div className='flower-bg-right'></div>
            </div>
        </div>
    </div>
}


// <a href="https://www.freepik.com/free-vector/colorful-floral-border-with-watercolor_24177295.htm">Image by asrulaqroni</a> on Freepik
