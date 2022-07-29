import "./SongPage.css"
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import {useDispatch, useSelector} from "react-redux";
import { Link } from "react-router-dom";
import liked from "../../images/liked.svg"
import dontLiked from "../../images/dontLiked.svg"
import {useParams} from "react-router-dom";
import {removeLikeRedux, setLikeRedux} from "../../store/user/actions";
import {useState} from "react";
import MusicPlayer from "../../Components/MusicPlayer/MusicPlayer";
const SongPage = () => {

    const dispatch = useDispatch()
    const user = useSelector((state) => state.user.likedMusic)
    const songID = useParams().songID
    const songs = useSelector((state) =>  state.allMusic.songs)
    const songItem = songs.filter(i => i.ID === parseInt(songID))[0]
    const [isLiked,setLike] = useState(user.map(i => i.ID === songItem.ID)[0])

    const changeLike = () => {
        setLike(!isLiked)
        dispatch(isLiked ? removeLikeRedux(songItem.ID) : setLikeRedux(songItem.ID))
    }

    return (
        <div className={"songPage"}>
           <div className={"mainSongPage"}>
               <Link className={"songsBtn"} to={"/songs"}><NavigateBeforeIcon/></Link>
               <div className={"playingNow"}>Now Plaing</div>
               <div className="infoSongPage">
                   <img className={"mainImageSongPage"} src={songItem.img} alt="image"/>
                   <footer className={"infoFooter"}>
                           <div id={"songPageContainer"}>
                               <div><div className="titleSongPage">{songItem.title}</div>
                                   <div className="authorSongPage">{songItem.author}</div></div>
                               <img onClick={changeLike} className={"likeSongPage"} src={user.map(i => i.ID === songItem.ID).includes(true) ? liked : dontLiked} alt="like"/>
                           </div>
                   </footer>
                   <MusicPlayer  songItem={songItem}/>
               </div>
           </div>
        </div>
    )
}
export default SongPage