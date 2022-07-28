import {BrowserRouter, Route, Routes} from "react-router-dom";
import LoadingPage from "./Pages/LoadingPage/LoadingPage";
import SongsPage from "./Pages/SongsPage/SongsPage";
import SongPage from "./Pages/SongPage/SongPage";

const Router = () => {
    return (
        <div className={"Routers"}>
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<LoadingPage/>}></Route>
                    <Route path={"/songs"} element={<SongsPage/>}></Route>
                    <Route path={"/song/:songID"} element={<SongPage/>}></Route>
                </Routes>
            </BrowserRouter>

        </div>
    )
}
export default Router