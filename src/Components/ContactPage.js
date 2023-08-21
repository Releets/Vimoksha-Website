import mainimg from '../Media/Photoshoots/emina-guitar1.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUp } from '@fortawesome/free-solid-svg-icons';


export default function ContactPage(props){
    const returnToTop = () => {
        props.returnToTopFunc(0);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const params = {
            name: event.target[0].value,
            email: event.target[1].value,
            subject: event.target[2].value,
            messsage: event.target[3].value
        }
        
        fetch('http://localhost:3000/api/contact/emailhandler.php', {
            method: "POST",
            body: JSON.stringify(params),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            }).then(
                (response) => (response.json())
            ).then((response)=> {
                if (response.status === 'success') {
                    alert("Message Sent.");
                    this.resetForm()
                } 
                else if(response.status === 'fail') {
                    alert("Message failed to send.")
                }
            })
    }

    return <div className="contactpage">
           <div className='contact-img'>
            <img src={mainimg} style={{maxWidth: "100%", height: "auto", width: "20vw"}}></img>
            </div> 
           <div className='contact-box'>
                <h2 className='contact-header'>Want to get in touch?</h2>

                <h5>For commissions and jobs, the easiest way to reach me is through <a href='https://www.fiverr.com/s/91repd'><u><i>Fiverr</i></u></a><br></br>
                    For any other inquiries, bookings or questions, feel free to use the form below!
                </h5>
                <form className="cf" onSubmit={handleSubmit} action='#'>
                    <div className="half left">
                        <input type="text" placeholder="Name"></input>
                        <input type="email" placeholder="Email address"></input>
                        <input type="text" placeholder="Subject"></input>
                    </div>
                    <div className="half right">
                        <textarea name="message" type="text" placeholder="Message"></textarea>
                    </div>  
                    <input type="submit" value="Submit" id="input-submit"></input>
                </form>
                {/*<a href='https://www.fiverr.com/s/91repd' target='_blank'><img src={fiverlogo} className='fiver-logo'></img></a> */}
           </div>
           <div className="upbutton"><FontAwesomeIcon size={'lg'} color={'white'} icon={faCircleUp} onClick={returnToTop}/></div>
    </div>
}