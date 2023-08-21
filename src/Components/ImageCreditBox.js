import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

export default function ImageCreditBox(props){
    const handleClose = () => {
        props.close()
    }
    return <div className={"credits"+ (props.isHidden ? ' credits-hidden' : '')}>
        <FontAwesomeIcon icon={faCircleXmark} size='lg' className="credit-closebtn" onClick={handleClose}/>
        <ul className="credit-list">
            <li>Banner by <a href="https://www.freepik.com/free-vector/watercolor-peach-rose-flower-bouquet-collection_22724293.htm#query=flower%20branch&position=31&from_view=keyword">asrulaqroni</a> on Freepik</li>
            <li>Transition image #1 by <a href="https://www.freepik.com/free-vector/flower-border-with-watercolor_15699402.htm">asrulaqroni</a></li>
            <li>Box backgrounds by <a href="https://www.vecteezy.com/free-png/rose">Vecteezy</a> and <a href="https://www.freepnglogos.com/pics/flower-watercolor">freepnglogos.com</a></li>
            <li>Transition image #2 by <a href="https://www.freepik.com/free-vector/watercolor-hard-drawn-floral-banner_11564643.htm">lukasdedi</a> on Freepik</li>
            <li>Background image #1 by <a href="https://www.vecteezy.com/photo/24352003-a-beautiful-fantasy-landscape-on-a-white-background-mountains-trees-fog-watercolor-painting-abstract-intricate-splashes-of-paint-on-a-white-background-generative-ai">Ahasanara Akter onVecteezy</a></li>
       </ul>
    </div>
}