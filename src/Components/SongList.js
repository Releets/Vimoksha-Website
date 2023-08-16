import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

export default function SongList(){

    const songs = ["Pustite Mi Mir", 
    "DILER", 
    "Discommunication"];

    return <div className="songlist">
        <ul className="list-container">
            {songs.map((song, index) => 
                <li key={index} className="songlist-elem">
                    {song}
                    <div className="play-btn">
                        <FontAwesomeIcon cursor='pointer' size="xs" icon={faPlay}/>
                    </div>
                </li>
            )}
        </ul>
    </div>
}