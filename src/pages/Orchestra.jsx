import Header from "../header/Header"
import Sidebar from "../sidebar/Sidebar"
import OrchestraPainel from "./OrchestraPainel";

function Orchestra() {
    return (
        <>
            <Header />
            <Sidebar />
            <OrchestraPainel/>
            <span className="titles">ORCHESTRA</span>
        </>
    )
}

export default Orchestra;