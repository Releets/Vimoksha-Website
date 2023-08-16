import PortfolioCard from "./PortfolioCard"
import EventGallery from "./EventGallery"

import { useState } from "react"

export default function PortfolioPage(){
    const [showGallery, setShowGallery] = useState(false)
    const [currentItem, setCurrentItem] = useState("")

    function handleCardClick(id){
        console.log("CLICK"+id)
        setCurrentItem("0")
        setShowGallery(!showGallery)
      } 
    
    const items = {
        "Studensko Ljeto Winner" : "blablablablalbalba",
        "Finalist in Supertalent 2019" : "bsklbmfksldbmsklfbmlskbmkfsbfm",
        "Great Gatsby Galla 2022" : "SWITZERLAND I SING GATSBY YES djsnfnjfkdsnfdsjfnksdkjfndskfnjsknj",
        "something else" : "eee",
    }
    return <div className="portfoliopage">
            <div className="fade-2"></div>
            <h1>PORTFOLIO</h1>
            <h3><i>some of my performances include...</i></h3>
            <div className="cardcontainer">
                {Object.entries(items).map(([t, c], index) => 
                <PortfolioCard id={index} 
                title={t} 
                content={c} 
                bgc={"#611D1D"} 
                onClickFunction={handleCardClick}></PortfolioCard>)}
            </div>
            <div className="egcontainer">
            { showGallery ? <EventGallery item={currentItem}/> : null }
            </div>
        </div>
}