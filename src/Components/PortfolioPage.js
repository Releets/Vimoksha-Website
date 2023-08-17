import PortfolioCard from "./PortfolioCard"
import EventGallery from "./EventGallery"

import { useState, useRef } from "react"


export default function PortfolioPage(){
    const cards = useRef([]);
    const [currentItem, setCurrentItem] = useState("");

    function handleCardClick(id){
        console.log(cards.current)
        console.log("CLICK"+id)
        setCurrentItem(id)
        cards[currentItem].expandCard(9);
      } 
      // Logic for card expansion:
      // Upon creation, all cards are stored in array
      // Card is clicked, handleClick is called and card returns its own ID
      // Lookup card corresponding to ID in array
      // call card function to expand on that card, call card function to hide on all others.
      // Upon collapse (button, click outside?), call function to collaps on current card and function to appear on all others



    //Dict of: 
    //String <name> -> List of [String <picture file name>, String <description>]
    const items = {
        "Studensko Ljeto Winner" : ["Studenskoljeto.png","In the 2022 annual Singing Competiton \"Studensko Ljeto\"\, which gathers youth from all across Europe to sing both modern and traditional folk music, I placed first with the song STOP by Sam Brown."],
        "Finalist in Supertalent 2019" : ["supertalent.png", "sample text"],
        "Great Gatsby Galla 2022" : ["gatsby.png","sample textsample textsample textsample textsample textsample textsample textsample textsample textsample textsample textsample text"],
        "something else" : ["?","eee"],
    }
    return <div className="portfoliopage">
            <div className="wrap-flowers"></div>
            <div className="fade-2"></div>
            <div className="portfolio-header-container">
                <h1 className="portfolio-header">PORTFOLIO</h1>
                <h3 className="portfolio-sub">some of my performances include...</h3>
            </div>
            <div className="cardcontainer">
                {Object.entries(items).map(([t, c], index) => 
                <PortfolioCard id={index} 
                ref={(ref) => (cards.current[index] = ref)}
                title={t} 
                content={c[1]}
                picture={c[0]}
                path={"../Media/Portfolio/"} 
                bgc={"#DAEDD9"} 
                onClickFunction={handleCardClick}></PortfolioCard>)}
            </div>
        </div>
}

// <a href="https://www.freepik.com/free-vector/watercolor-hard-drawn-floral-banner_11564643.htm">Image by lukasdedi</a> on Freepik