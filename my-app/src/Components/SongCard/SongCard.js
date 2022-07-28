import "./SongCard.css"
import liked from "../../images/liked.svg"
import dontLiked from "../../images/dontLiked.svg"
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {logDOM} from "@testing-library/react";
import {removeLikeRedux, setLikeRedux} from "../../store/user/actions";
import {useDispatch} from "react-redux";

const SongCard = ({item}) => {
    const dispatch = useDispatch()
  const [isLiked,setLike] = useState(false)
  const user = useSelector((state) => state.user.likedMusic)

  const changeLike = () => {
      setLike(!isLiked)
      dispatch(isLiked ? removeLikeRedux(item.ID) : setLikeRedux(item.ID))
  }

  return(
      <div className={"songCard"}>
            <main>
                <Link className={"cartTitle"} to={`/song/${item.ID}`}><img src={item.img} alt="" className={"cardImage"} /> </Link>
                <div className="info">
               <div className={"infoTop"}>
                   <Link className={"cartTitle"} to={`/song/${item.ID}`}> <h1 className={"cartTitle"}>{item.title}</h1></Link>
               </div>

                    <Link className={"cartTitle"} to={`/song/${item.ID}`}>  <h2 className={"cardAuthor"}>{item.author}</h2> </Link>
                </div>


            </main>
          <img onClick={changeLike} className={"likeSongCard"} src={user.map(i => i.ID === item.ID).includes(true) ? liked : dontLiked} alt="like"/>

      </div>
  )
}
export default SongCard