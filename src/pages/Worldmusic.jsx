import Header from "../header/Header"
import Sidebar from "../sidebar/Sidebar"
import WorldMusicPainel from "./WorldMusicPainel";

function WorldMusic() {
    return (
        <>
            <Header />
            <Sidebar />
            <WorldMusicPainel/>
            <span className="titles">World-music</span>
        </>
    )
}

export default WorldMusic;