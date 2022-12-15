import Header from "../header/Header"
import Sidebar from "../sidebar/Sidebar"
import PercussionPainel from "./PercussionPainel";

function Percussion() {
    return (
        <div className="percussion">
            <Header />
            <Sidebar />
            <PercussionPainel/>
            <span className="titles">Percussion</span>
        </div>
    )
}

export default Percussion;