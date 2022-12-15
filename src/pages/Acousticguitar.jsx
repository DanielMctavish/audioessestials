import Header from "../header/Header"
import Sidebar from "../sidebar/Sidebar"
import AcousticGuitarPainel from "./AcousticGuitarPainel";


function Acousticguitar() {
    return (
        <div className="acoustic-guitars">
            <Header />
            <Sidebar />
            <AcousticGuitarPainel/>
            <span className="titles">Acoustic - Guitars</span>
        </div>
    )
}

export default Acousticguitar;