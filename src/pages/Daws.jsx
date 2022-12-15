import "./pages.css"
import "../sidebar/Sidebar"
import Header from "../header/Header"
import Sidebar from "../sidebar/Sidebar"
import DawsPainel from "./DawsPainel"

function Daws() {
    return (
        <>
            <Header />
            <Sidebar/>
            <DawsPainel/>
            <span className="titles">DAWS - Digital Audio Workstation</span>
        </>
    )
}

export default Daws;