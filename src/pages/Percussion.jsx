import Header from "../header/Header"
import Sidebar from "../sidebar/Sidebar"
import PercussionPainel from "./PercussionPainel";

function Percussion() {
    return (
        <>
            <Header />
            <Sidebar />
            <PercussionPainel/>
            <span className="titles">Percussion</span>
        </>
    )
}

export default Percussion;