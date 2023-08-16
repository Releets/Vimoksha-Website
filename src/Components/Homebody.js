
import flowers from '../Media/vineline3.png'

export default function Homebody(){

    return <div style={{height: '100%'}}>
        <div className='vineline'>
            <img src={flowers} className='flowerimage'></img>
        </div>
        <div className="header">ABOUT</div>
        <div className='main'>
            <div className='box about-left'>

            </div>
            <div className='box about-center'>
                
                   I am a singer, songwriter and perfomer with roots from Bosnia and Hercegovina, currently living in Norway.
                   I have been creating music since I was a small child, and it has always been
                   my biggest passion - my escape from reality and it is my greatest joy to create music
                   for myself and others to enjoy. Through my diverse origins, the many people I have worked with,
                   love for music and many, many years of experience, I have created a diverse and strong 
                   musical vocabulary. From ethnic folk music to modern pop, Rock&Roll to musicals and opera - there is 
                   close to nothing I don't enjoy working on. 
                   <br></br><br></br>
                   -
                   <br></br><br></br>
                    My artist portfolio includes stage, TV and Radio-perfomrances, awards and first-place medals in singing competitions,
                    and a collection recorded and published songs, all written, composed and performed by me.

                
            </div>
            <div className='box about-right'>

            </div>
        </div>
    </div>
}

//IDEA
//Three "boxes" (at most just outlined with simple border), centered and evenly spaced
//first box fades in upon reaching with scroll, contains information about Vimoksha, center box
//Second box becomes visible upon click, horizontal Scrollable gallery of songs/images, left box
//Third box becomes visible upon click, 

//<a href="https://www.freepik.com/free-vector/flower-border-with-watercolor_15699402.htm">Image by asrulaqroni</a> on Freepik