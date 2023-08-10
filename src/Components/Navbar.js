import {useEffect, useState} from 'react';

export default function Navbar(){
    const categories =["HOME", "ABOUT", "MUSIC", "PORTFOLIO", "CONTACT"]
    const socials = {
        "INSTAGRAM": "https://www.instagram.com/vimoksha_/",
        "YOUTUBE" : "https://www.youtube.com/c/Vimoksha", 
        "PATREON" : "https://www.patreon.com/Vimoksha"
    }
    
    const [navbarPosition, setNavbarPosition] = useState('static');

    // Use an effect to update the navbar position based on the scroll position
    useEffect(() => {
      function handleScroll() {
        if (window.scrollY > 50) {
            console.log("YA SCORLLED")
          setNavbarPosition('fixed');
        } else {
          setNavbarPosition('static');
        }
      }
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    return <div className={`navbar ${navbarPosition}`}>
            <div className="navbar-lefthalf">
                <div className="navbar-wrapper">
                    {categories.map(name =>
                        <div className="navbar-item">
                            {name}
                        </div>
                    )}
                </div>
            </div>
            <div className="navbar-righthalf">
                <div className="navbar-wrapper">
                    {Object.entries(socials).map(([key, val]) =>
                            <a className="navbar-item" href={val}>{key}</a>
                        )}
                </div>
            </div>
    </div>
}