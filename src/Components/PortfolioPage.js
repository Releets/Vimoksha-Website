import PortfolioCard from "./PortfolioCard"


import { useState } from "react"

import img1 from '../Media/Portfolio/studenskoljeto.jpg'
import img2 from '../Media/Portfolio/supertalent.jpg'
import img3 from '../Media/Portfolio/gatsby.jpg'
import img4 from '../Media/Portfolio/sth.jpg'

export default function PortfolioPage(){
    const items = {
        "Studensko Ljeto Winner" : "In the 2022 annual Singing Competiton \"Studensko Ljeto\"\, which gathers youth from all across Europe to sing both modern and traditional folk music, I placed first with the song STOP by Sam Brown.",
        "Supertalent 2023" : "sample text",
        "Great Gatsby Galla 2022" : "sample textsample textsample textsample textsample textsample textsample textsample textsample textsample textsample textsample text",
        "something else" : "eee"
    }

    const pictures =[img1, img2, img3, img4]

    let cardStateArray = []
    for (let i  = 0; i < Object.keys(items).length; i++) {
        cardStateArray[i] = true;
    }
    const [currentItem, setCurrentItem] = useState("");
    const [visibleCards, setVisibleCards] = useState(cardStateArray)


    function handleCardExpand(id){
        setCurrentItem(id)
        for (let i  = 0; i < visibleCards.length; i++) {
            cardStateArray[i] = false;
        }
        cardStateArray[id] = true;

        setVisibleCards(cardStateArray);
      }
      
    function handleCardCollapse(){
        for (let i  = 0; i < visibleCards.length; i++) {
            cardStateArray[i] = true;
        }
        setVisibleCards(cardStateArray);
    }

    
    //Dict of: 
    //String <name> -> List of [String <picture file name>, String <description>]
    return <div className="portfoliopage">
            <div className="fade-2"></div>
            <div className="portfolio-header-container">
                <h1 className="portfolio-header">PORTFOLIO</h1>
                <h3 className="portfolio-sub">some of my performances include...</h3>
            </div>
            <div className="cardcontainer">
                {
                Object.entries(items).map(([t, c], index) => 
                    <PortfolioCard id={index} 
                    key={index}
                    isVisible={visibleCards[index]}
                    title={t} 
                    content={c}
                    picture={pictures[index]}
                    bgc={"#CDCA87"} 
                    expandFunction={handleCardExpand}
                    collapseFunction={handleCardCollapse}></PortfolioCard>)}
            </div>
        </div>
}

// <a href="https://www.freepik.com/free-vector/golden-pothos-leaf-isolated-white-background_2616107.htm#query=watercolor%20vines&position=1&from_view=keyword&track=ais">Image by rawpixel.com</a> on Freepik
//<a href="https://www.freepik.com/free-vector/beautiful-bunch-green-watercolor-leaf-set-design_28153883.htm#page=2&query=watercolor%20vines&position=24&from_view=keyword&track=ais">Image by Harryarts</a> on Freepik
// <a href="https://www.vecteezy.com/free-photos">Free Stock photos by Vecteezy</a>