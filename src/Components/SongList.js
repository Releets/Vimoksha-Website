import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function SongList(){
    // use array for each song?
    const [currIcons, setCurrIcon] = useState([faPlay, faPlay, faPlay, faPlay])

    const songs = ["Pustite Mi Mir", 
    "DILER", 
    "Ti Si Izabran",
    "Discommunication"];
    //Some cases here, must change back to play if:
    //1) song finishes playing
    //2) Another song is played, interrupting current playing song
    const toggleIcon = (index) => {
        const newIcons = [faPlay, faPlay, faPlay, faPlay]
        newIcons[index] = faPause
        setCurrIcon(newIcons)
    }

    const playSong = (s, i) => {
        toggleIcon(i)
        console.log("Playing "+s)
    }
    return <div className="songlist">
        <ul className="list-container">
            {songs.map((song, index) => 
                <li key={index} className="songlist-elem">
                    {song}
                    <div className="play-btn">
                        <FontAwesomeIcon onClick={() => playSong(song, index)} cursor='pointer' size="xs" icon={currIcons[index]}/>
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