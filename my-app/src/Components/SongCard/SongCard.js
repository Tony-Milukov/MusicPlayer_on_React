import "./SongCard.css"
import liked from "../../images/liked.svg"
import dontLiked from "../../images/dontLiked.svg"
import {useState} from "react";
import {Link} from "react-router-dom";

const SongCard = ({item}) => {
  const [isLiked,setLike] = useState(false)
  const changeLike = () => {
      setLike(!isLiked)
  }
  return(
      <div className={"songCard"}>
            <main>
                <img src={"https://protkd.com/wp-content/uploads/2017/04/default-image-620x600.jpg"} alt="" className={"cardImage"} />
                <div className="info">
               <div className={"infoTop"}>
                   <h1 className={"cartTitle"}>{item.title}</h1>
                   <img onClick={changeLike} className={"like"} src={isLiked ? liked : dontLiked} alt="like"/>
               </div>

                    <h2 className={"cardAuthor"}>{item.author}</h2>
                </div>

            </main>
      </div>
  )
}
export default SongCard