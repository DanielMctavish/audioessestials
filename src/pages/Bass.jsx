import Header from "../header/Header"
import Sidebar from "../sidebar/Sidebar"
import BassPainel from "./BassPainel";

function Bass() {
    return (
        <>
            <Header />
            <Sidebar />
            <BassPainel/>
            <span className="titles">Bass</span>
        </>
    )
}

export default Bass;