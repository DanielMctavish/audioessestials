import Header from "../header/Header"
import Sidebar from "../sidebar/Sidebar"
import WorldMusicPainel from "./WorldMusicPainel";

function WorldMusic() {
    return (
        <div className="world-music">
            <Header />
            <Sidebar />
            <WorldMusicPainel/>
            <span className="titles">World-music</span>
        </div>
    )
}

export default WorldMusic;