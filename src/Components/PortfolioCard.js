export default function PortfolioCard(props){

    function handleClick(){
        props.onClickFunction(props.id)
    }

    return <div className="card" onClick={handleClick}>
        <h2>{props.title}</h2>
        <div className="line" style={{backgroundColor: props.bgc}}></div>
        <p>{props.content}</p>
    </div>
}