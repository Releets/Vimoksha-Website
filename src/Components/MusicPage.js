export default function MusicPage(){
    return <div className="musicpage">
        <div className="fade"></div>
        <div className="content">
            <h3>MUSIC</h3>
            <h1 className="music-header">NIŠTA</h1>
            <div className="music-wrapper">
                <iframe width="672" 
                        height="378" 
                        src="https://www.youtube.com/embed/iuOo5YuORv0" 
                        title="YouTube video player" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        className="albumimg"
                        allowfullscreen>
                </iframe>
                <div className="music-textbox">
                    <h3>My newest single <i><u>Ništa</u></i><br></br> </h3>
                    A fun, catchy burst of energy to get your body moving on a night out. Check out the music video or stream it on Spotify!
                    <br></br>
                    <br></br>
                    <iframe  
                    src="https://open.spotify.com/embed/track/76P77x2DWNlBvtEddhAPnr?utm_source=generator&theme=0" 
                    width="60%" 
                    height="152" 
                    frameBorder="0" 
                    allowfullscreen="" 
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                    loading="lazy">
                    </iframe>
                </div>
            </div>
        </div>
    </div>
}