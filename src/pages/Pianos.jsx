import Header from "../header/Header"
import Sidebar from "../sidebar/Sidebar"
import PianosPainel from "./PianosPainel";

function Pianos() {
    return (
        <div className="pianos">
            <Header />
            <Sidebar/>
            <PianosPainel/>
            <span className="titles">Pianos</span>
        </div>
    )
}

export default Pianos;