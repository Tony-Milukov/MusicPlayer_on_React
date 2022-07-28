import "./MusicPlayerControls.css"
import PauseRounded from '@mui/icons-material/PauseRounded';
import PlayArrowRounded from '@mui/icons-material/PlayArrowRounded';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";

const MusicPlayerControls = ({play,setPlay,musicProgress,handleProgressBar,songID}) => {
    const allMusic = useSelector((state) => state.allMusic.songs);

    const navigate = useNavigate()
    function formatSeconds(value) {
        let secondTime = parseInt (value); // sec
        let minuteTime = 0; // minute
        let hourTime = 0; // hour
        if (secondTime> 60) {
            minuteTime = parseInt(secondTime / 60);
            secondTime = parseInt(secondTime % 60);
            if(minuteTime > 60) {
                hourTime = parseInt(minuteTime / 60);
                minuteTime = parseInt(minuteTime % 60);
            }
        }
        let result = secondTime <= 9 ? `0:0${secondTime}` : ("0:" + secondTime)
        if(minuteTime > 0) {
            result =  secondTime <= 9 ? `${minuteTime}:0${secondTime}` : `${minuteTime}:${secondTime}`
        }

        if(hourTime > 0) {
            result =  secondTime <= 9 ? `${hourTime}:${minuteTime}:0${secondTime}` : `${hourTime}:${minuteTime}:${secondTime}`
        }
        return result;
    }

    const nextSong = () => {
        (allMusic.length) > songID ? navigate(`/song/${songID+1}`) :  navigate(`/song/1`)
    }
    const previousSong = () => {
        songID === 1 ? navigate(`/song/${allMusic.length}`) :  navigate(`/song/${songID-1}`)
    }


    return (
        <div className="MusicPlayerControls">
            <div className="progressbarContainer">

                        <input type="range"
                               className={"progressbar"}
                               min={"0"}
                               max={Math.round(musicProgress.loadedSeconds)}
                               value={Math.round(musicProgress.playedSeconds)}
                               step={"1"}
                               onChange={(e) => handleProgressBar(e)}
                        />
                <div className="progressNow">{formatSeconds(Math.round(musicProgress.playedSeconds)) === `0:${NaN}` ? "0:00" : formatSeconds(Math.round(musicProgress.playedSeconds))}</div>


            </div>
                <div className="buttonsControls">

                    <button className={"skipBTN"} onClick={previousSong}><SkipPreviousIcon/></button>

                    <button className={"playBTN"} onClick={() => setPlay(!play)}>{!play ? <PlayArrowRounded/> : <PauseRounded/>}</button>

                    <button className={"skipBTN"}  onClick={nextSong}> <SkipNextIcon/> </button>

                </div>
        </div>
        
    )
}
export default MusicPlayerControls