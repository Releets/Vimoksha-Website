import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

export default function SongList(){

    const songs = ["Pustite Mi Mir", 
    "DILER", 
    "Ti si Izabran",
    "Discommunication"];

    const playSong = (s) => {
        console.log("Playing "+s)
    }
    return <div className="songlist">
        <ul className="list-container">
            {songs.map((song, index) => 
                <li key={index} className="songlist-elem">
                    {song}
                    <div className="play-btn">
                        <FontAwesomeIcon onClick={() => playSong(song)}cursor='pointer' size="xs" icon={faPlay}/>
                    </div>
                </li>
            )}
        </ul>
    </div>
}

//https://devsnap.me/react-music-players For inspiration?

//Design ideas:

//1)
//Player bar at bottom of box, Pause/play icon and Volume slider
//Upon selecting a song from list above player, it will play and can be controlled from player bar at bottom

//2)
//Each song Can be clicked, and when started the other fade out, player bar moves/fades in and can control song.

//3) 
//List of songs is permanent (similar to current base design), and when clciked can be paused/played
//Using the same button. The table line below serves as player line?