import { useState } from "react"

export default function PortfolioCard(props){

    const [isExpanded, setIsExpanded] = useState('');
    const [isHidden, setIsHidden] = useState('');

    const handleClick = () => {
        props.onClickFunction(props.id)
    }

    const expandCard = () => {
        setIsExpanded(' card-expanded')
    }

    const collapseCard = () => {
        setIsExpanded('')
    }

    const hideCard = () => {
        setIsHidden(' card-hidden')
    }

    const revealCard = () => {
        setIsHidden('')
    }
    return <div className={'card' + isExpanded + isHidden} onClick={handleClick}>
        <h2 className="card-title">{props.title}</h2>
        <div className="line" style={{backgroundColor: props.bgc}}></div>
        <img src={props.path + props.picture} className="card-img"></img>
        <p className="card-content">{props.content}</p>
    </div>
}