import Header from "../header/Header"
import Sidebar from "../sidebar/Sidebar"
import KontaktPainel from "./KontaktPainel";

function Kontakt() {
    return (
        <>
            <Header />
            <Sidebar />
            <KontaktPainel/>
            <span className="titles">Kontakt</span>
        </>
    )
}

export default Kontakt;