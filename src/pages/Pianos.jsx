import Header from "../header/Header"
import Sidebar from "../sidebar/Sidebar"
import PianosPainel from "./PianosPainel";

function Pianos() {
    return (
        <>
            <Header />
            <Sidebar/>
            <PianosPainel/>
            <span className="titles">Pianos</span>
        </>
    )
}

export default Pianos;