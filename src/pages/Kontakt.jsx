import Header from "../header/Header"
import Sidebar from "../sidebar/Sidebar"
import KontaktPainel from "./KontaktPainel";

function Kontakt() {
    return (
        <div className="orchestra">
            <Header />
            <Sidebar />
            <KontaktPainel/>
            <span className="titles">Kontakt</span>
        </div>
    )
}

export default Kontakt;