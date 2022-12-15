import Header from "../header/Header"
import Sidebar from "../sidebar/Sidebar"
import DrumsKitsPainel from "./DrumsKitPainel";

function Drumkits() {
    return (
        <>
            <Header />
            <Sidebar />
            <DrumsKitsPainel/>
            <span className="titles">Drum Kits</span>
        </>
    )
}

export default Drumkits;