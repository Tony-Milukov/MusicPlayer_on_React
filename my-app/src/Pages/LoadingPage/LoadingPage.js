import "./LoadingPage.css"
import logo from "../../logo/logo.svg"
import {useNavigate} from "react-router-dom"
const LoadingPage = () => {
    const navigate = useNavigate()
   const navigateToSongs = () => {
       navigate("/songs")
    }
    setTimeout(navigateToSongs, 1300);


    return (
        <div className={"LoadingPage"}>
            <div className="logo">
                <img className={"logoImage"} src={logo} alt="LogoImage"/>
                <h1 className={"logoTitle"}>Tony's Musics</h1>
                <h5 className={"logoWait"}>please wait...</h5>
            </div>
        </div>
    )
}
export default LoadingPage