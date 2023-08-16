import mainimg from '../Media/emina-guitar1.jpg'
import fiverlogo from '../Media/fiverr.png'

// One div with image, wone with content
//img div slightly taller
//centered, aligned horizontally
export default function ContactPage(){
    return <div className="contactpage">
           <div className='contact-img'>
            <img src={mainimg} style={{maxWidth: "100%", height: "auto", width: "20vw"}}></img>
            </div> 
           <div className='contact-box'>
                <h2 className='contact-header'>Want to get in touch?</h2>

                <h5>For commissions and jobs, the easiest way to reach me is through <a href='https://www.fiverr.com/s/91repd'><u><i>Fiverr</i></u></a><br></br>
                    For any other inquiries, bookings or questions, feel free to use the form below!
                </h5>
                <form className="cf">
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
    </div>
}