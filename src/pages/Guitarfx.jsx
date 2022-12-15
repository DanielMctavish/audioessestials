import Header from "../header/Header"
import Sidebar from "../sidebar/Sidebar"
import GuitarPainel from "./GuitarfxPainel";

function Guitar() {
    return (
        <div className="guitar">
            <Header />
            <Sidebar />
            <GuitarPainel/>
            <span className="titles">Guitar - FX</span>
        </div>
    )
}

export default Guitar;