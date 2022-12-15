import Header from "../header/Header"
import Sidebar from "../sidebar/Sidebar"
import DrumsKitsPainel from "./DrumsKitPainel";

function Drumkits() {
    return (
        <div className="drums">
            <Header />
            <Sidebar />
            <DrumsKitsPainel/>
            <span className="titles">Drum Kits</span>
        </div>
    )
}

export default Drumkits;