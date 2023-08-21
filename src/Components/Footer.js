import ImageCreditBox from "./ImageCreditBox"
import { useState } from "react"
export default function Footer(){

    const [creditState, toggleCreditState] = useState(true)
    const displayImageCredits = () => {
        toggleCreditState(!creditState)
    }

    return <div className="footer">
        <ImageCreditBox isHidden={creditState} close={displayImageCredits}/>
       <div>Created by Tobias Muniz Aslaksen</div>
       <div onClick={displayImageCredits} className="credits-toggle"><u>Image Credits</u></div>
    </div>
}