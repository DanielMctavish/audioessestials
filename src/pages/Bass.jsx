import Header from "../header/Header"
import Sidebar from "../sidebar/Sidebar"
import BassPainel from "./BassPainel";

function Bass() {
    return (
        <div className="bass">
            <Header />
            <Sidebar />
            <BassPainel/>
            <span className="titles">Bass</span>
        </div>
    )
}

export default Bass;