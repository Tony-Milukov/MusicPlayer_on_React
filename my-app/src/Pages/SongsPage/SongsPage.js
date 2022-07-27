import "./SongsPage.css"
import {useSelector} from "react-redux";
import SongCard from "../../Components/SongCard/SongCard";
import randomKey from "../../functions/randonKey";
const SongsPage = () => {

    const allMusic = useSelector((state) => state.allMusic.songs);


    return (
      <div className="SongsPage">
            <h3 className={"pageTitle"}>Songs</h3>
          <main className="main">
              <div className={"allSongs"}>{
                  allMusic.map(i => <SongCard key={randomKey()} item={i}/>)
              }</div>
          </main>
      </div>
  )
}
export default SongsPage