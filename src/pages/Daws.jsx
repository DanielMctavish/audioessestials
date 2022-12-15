import "./pages.css"
import "../sidebar/Sidebar"
import Header from "../header/Header"
import Sidebar from "../sidebar/Sidebar"
import Sidebar2 from "../sidebar/Sidebar2"
import DawsPainel from "./DawsPainel"

function Daws() {
    return (
        <div className="DAWS">
            <Header />
            <Sidebar/>
            <Sidebar2/>
            <DawsPainel/>
            <span className="titles">DAWS - Digital Audio Workstation</span>
        </div>
    )
}

export default Daws;