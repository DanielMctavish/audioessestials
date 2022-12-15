import Header from "../header/Header"
import Sidebar from "../sidebar/Sidebar"
import GuitarPainel from "./GuitarfxPainel";

function Guitar() {
    return (
        <>
            <Header />
            <Sidebar />
            <GuitarPainel/>
            <span className="titles">Guitar - FX</span>
        </>
    )
}

export default Guitar;