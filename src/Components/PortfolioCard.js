import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
export default function PortfolioCard(props){
    console.log((props.path + props.picture));
    const [isExpanded, setIsExpanded] = useState(false);

    const handleClick = () => {
        if(isExpanded == false){
            props.expandFunction(props.id)
            expandCard()
        }
    }

    const handleClose = () => {
        collapseCard()
        props.collapseFunction()
    }

    const expandCard = () => {
        setIsExpanded(true)
    }

    const collapseCard = () => {
        setIsExpanded(false)
    }

    
    return <div className={'card' + (props.isVisible ? '' : ' card-hidden') + (isExpanded ? ' card-expanded' : '')} onClick={handleClick}>
        <FontAwesomeIcon icon={faCircleXmark} size='lg' className={"card-xicon" + (isExpanded ? '': ' card-hidden')} onClick={handleClose}/>
        <h2 className="card-title">{props.title}</h2>
        <div className="line" style={{backgroundColor: props.bgc}}></div>
        <div className="card-content-wrapper">
            <img src={props.picture} className="card-img"></img>
            {!isExpanded ? '': <section className="card-content">{props.content}</section>}
        </div>
    </div>
}