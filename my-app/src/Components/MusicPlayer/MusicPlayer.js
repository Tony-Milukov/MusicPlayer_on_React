import ReactPlayer from "react-player";
import "./MusicPlayer.css"
import {createRef, useRef, useState} from "react";
import MusicPlayerControls from "../MusicPlayerControls/MusicPlayerControls";

import {removeLikeRedux} from "../../store/user/actions";

const MusicPlayer  = ({songItem}) => {

    const ref = useRef()
    const [play,setPlay] = useState(false)
    const [musicProgress,setMusicProgress] = useState({loadedSeconds: 0})
    const handleProgressBar = (e) => {
                ref.current.seekTo(Math.round(e.target.value))
                setPlay(true)
    }

    const handleProgress = (e) => {
        setMusicProgress(e)
        console.log(musicProgress)
    }
    return (
        <div className="MusicPlayer" >

            <ReactPlayer
                url={songItem.music}
                playing={play}
                width={"100%"}
                height={"100%"}
                ref={ref}
                onProgress={handleProgress}

            />
            <MusicPlayerControls songID={songItem.ID} handleProgressBar={handleProgressBar} musicProgress={musicProgress} setMusicProgress={setMusicProgress} play={play} setPlay={setPlay} />
        </div>
    )
}

export default MusicPlayer