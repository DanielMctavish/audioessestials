import Header from "../header/Header"
import Sidebar from "../sidebar/Sidebar"
import PluguinPainel from "./PluguinsPainel";

function Pluguins() {
    return (
        <>
            <Header />
            <Sidebar />
            <PluguinPainel/>
            <span className="titles">Pluguins</span>
        </>
    )
}

export default Pluguins;