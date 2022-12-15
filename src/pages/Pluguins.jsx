import Header from "../header/Header"
import Sidebar from "../sidebar/Sidebar"
import PluguinPainel from "./PluguinsPainel";

function Pluguins() {
    return (
        <div className="plugins">
            <Header />
            <Sidebar />
            <PluguinPainel/>
            <span className="titles">Plugins</span>
        </div>
    )
}

export default Pluguins;