import Header from "../header/Header"
import Sidebar from "../sidebar/Sidebar"
import AcousticGuitarPainel from "./AcousticGuitarPainel";


function Acousticguitar() {
    return (
        <>
            <Header />
            <Sidebar />
            <AcousticGuitarPainel/>
            <span className="titles">Acoustic - Guitars</span>
        </>
    )
}

export default Acousticguitar;