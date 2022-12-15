import Header from "../header/Header"
import Sidebar from "../sidebar/Sidebar"
import OrchestraPainel from "./OrchestraPainel";

function Orchestra() {
    return (
        <div className="orchestra">
            <Header />
            <Sidebar />
            <OrchestraPainel/>
            <span className="titles">ORCHESTRA</span>
        </div>
    )
}

export default Orchestra;