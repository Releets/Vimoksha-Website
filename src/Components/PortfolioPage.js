import PortfolioCard from "./PortfolioCard"


import { useState } from "react"


export default function PortfolioPage(){
    const items = {
        "Studensko Ljeto Winner" : ["Studenskoljeto.png","In the 2022 annual Singing Competiton \"Studensko Ljeto\"\, which gathers youth from all across Europe to sing both modern and traditional folk music, I placed first with the song STOP by Sam Brown."],
        "Finalist in Supertalent 2019" : ["supertalent.png", "sample text"],
        "Great Gatsby Galla 2022" : ["gatsby.png","sample textsample textsample textsample textsample textsample textsample textsample textsample textsample textsample textsample text"],
        "something else" : ["?","eee"],
    }

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
            <div className="wrap-flowers"></div>
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
                    content={c[1]}
                    picture={c[0]}
                    path={"../Media/Portfolio/"} 
                    bgc={"#DAEDD9"} 
                    expandFunction={handleCardExpand}
                    collapseFunction={handleCardCollapse}></PortfolioCard>)}
            </div>
        </div>
}

// <a href="https://www.freepik.com/free-vector/watercolor-hard-drawn-floral-banner_11564643.htm">Image by lukasdedi</a> on Freepik