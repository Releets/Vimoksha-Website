import {useEffect, useState} from 'react';

export default function Navbar(props){
    const categories =["HOME", "ABOUT", "MUSIC", "PORTFOLIO", "CONTACT"]
    const socials = {
        "INSTAGRAM": "https://www.instagram.com/vimoksha_/",
        "YOUTUBE" : "https://www.youtube.com/c/Vimoksha", 
        "PATREON" : "https://www.patreon.com/Vimoksha",
        "FIVERR" : "https://www.fiverr.com/s/Wmv27R"
    }

    const offsetList = [0, 1.25, 3.5, 5.2, 6.5];
    
    const [navbarPosition, setNavbarPosition] = useState('static');

    function handleClick(loc) {
      props.scrollFunc(loc)
    }

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
                    {categories.map((name, index) =>
                        <div key={index} className="navbar-item" onClick={() => handleClick(offsetList[index])}>
                            {name}
                        </div>
                    )}
                </div>
            </div>
            <div className="navbar-righthalf">
                <div className="navbar-wrapper">
                    {Object.entries(socials).map(([key, val]) =>
                            <a key={key} className="navbar-item" target="_blank" href={val}>{key}</a>
                        )}
                </div>
            </div>
    </div>
}